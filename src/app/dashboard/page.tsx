import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import { VisibilityChart } from "@/components/dashboard/VisibilityChart"

import Link from "next/link"
import { ScanButton } from "@/components/dashboard/ScanButton"
import { AutoRefresh } from "@/components/AutoRefresh"
import { scanQueue } from "@/lib/queue"

export const dynamic = 'force-dynamic'

export default async function DashboardOverview(props: { searchParams?: Promise<{ domain?: string }> }) {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  const organizationId = userId

  const searchParams = props.searchParams ? await props.searchParams : {}
  const domainQuery = searchParams.domain

  if (domainQuery) {
    // Upsert org
    await prisma.organization.upsert({
      where: { id: organizationId },
      update: {},
      create: { id: organizationId, name: "My Organization" }
    })

    // Upsert domain
    let domain = await prisma.domain.findFirst({
      where: { url: domainQuery, organizationId }
    })

    if (!domain) {
      domain = await prisma.domain.create({
        data: { url: domainQuery, organizationId }
      })
    }

    // Check if there's already a pending scan to avoid duplicates
    const existingPending = await prisma.scan.findFirst({
      where: { domainId: domain.id, status: "PENDING" }
    })

    if (!existingPending) {
      const scan = await prisma.scan.create({
        data: { domainId: domain.id, status: "PENDING" }
      })
      // Enqueue job to BullMQ (Upstash)
      await scanQueue.add("runScan", { scanId: scan.id }, {
        attempts: 3,
        backoff: { type: "exponential", delay: 5000 }
      })
    }

    // Redirect to clear the search params
    redirect("/dashboard")
  }

  // Get the most recent scan (even if pending) to see which domain we're looking at
  const mostRecentAnyScan = await prisma.scan.findFirst({
    where: { domain: { organizationId } },
    orderBy: { createdAt: "desc" },
    include: { domain: true }
  })

  const isPending = mostRecentAnyScan?.status === "PENDING" || mostRecentAnyScan?.status === "RUNNING"
  // Get all completed scans for this domain for the chart
  const domainId = mostRecentAnyScan?.domainId

  const allScans = domainId ? await prisma.scan.findMany({
    where: { 
      domainId,
      status: "COMPLETED"
    },
    orderBy: { completedAt: "asc" },
  }) : []

  const chartData = allScans.map(s => ({
    date: s.completedAt ? new Date(s.completedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '',
    score: s.visibilityScore || 0
  }))

  // Get the most recent completed scan
  const latestScan = allScans.length > 0 ? allScans[allScans.length - 1] : null
  
  // To get full results for the latest scan
  const latestScanWithResults = latestScan ? await prisma.scan.findUnique({
    where: { id: latestScan.id },
    include: { promptResponses: true, domain: true }
  }) : null

  // Get all uncompleted recommendation actions
  const actions = await prisma.recommendationAction.findMany({
    where: { 
      domain: { organizationId },
      isCompleted: false
    },
    orderBy: { impact: "asc" } 
  })

  // Calculate high-level stats
  const visibilityScore = latestScanWithResults?.visibilityScore || 0
  const actionsCompleted = await prisma.recommendationAction.count({
    where: { domain: { organizationId }, isCompleted: true }
  })
  
  const totalQueries = latestScanWithResults?.promptResponses?.length || 0

  const brandDomain = mostRecentAnyScan?.domain?.url || ""
  const prefix = brandDomain.split('.')[0].toLowerCase()
  const totalRecommendations = latestScanWithResults?.promptResponses?.reduce((sum: number, r: any) => {
    let count = 0;
    if (r.openai_normalized_json && r.openai_normalized_json.brands_mentioned) {
      count += r.openai_normalized_json.brands_mentioned.filter((b: string) => b.toLowerCase().includes(prefix)).length;
    }
    if (r.gemini_normalized_json && r.gemini_normalized_json.brands_mentioned) {
      count += r.gemini_normalized_json.brands_mentioned.filter((b: string) => b.toLowerCase().includes(prefix)).length;
    }
    return sum + count;
  }, 0) || 0

  const presenceScore = latestScanWithResults?.presenceScore || 0
  const recommendationStrength = latestScanWithResults?.recommendationStrength || 0
  const trendScore = latestScanWithResults?.trendScore || 0

  const displayDomain = mostRecentAnyScan?.domain?.url || "your domain"

  return (
    <div className="flex flex-col gap-8">
      <AutoRefresh isPending={isPending} />
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
            <Badge variant="outline" className="bg-secondary/50 text-muted-foreground border-border">{displayDomain}</Badge>
            {mostRecentAnyScan?.status === "PENDING" && (
              <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 border-none animate-pulse">Scanning...</Badge>
            )}
            {mostRecentAnyScan?.status === "RUNNING" && (
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none animate-pulse">Processing...</Badge>
            )}
          </div>
          <p className="text-muted-foreground">Here is how AI platforms are recommending your brand this week.</p>
        </div>
        <ScanButton 
          scanStatus={mostRecentAnyScan?.status || "NONE"} 
          domainUrl={displayDomain} 
        />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">AI Visibility Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">{visibilityScore}%</span>
              {trendScore !== 0 && (
                <span className={`text-sm font-medium ${trendScore > 0 ? "text-green-500" : "text-red-500"}`}>
                  {trendScore > 0 ? "+" : ""}{trendScore}%
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">% of positive responses</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Brand Mentions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">{totalRecommendations}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Total across {totalQueries} personas</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Presence Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">{presenceScore}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">In top 3 or first paragraph</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Recommendation Strength</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">{recommendationStrength}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Based on explicit phrasing</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Visibility Trend</CardTitle>
            <CardDescription>Your AI visibility score over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <VisibilityChart data={chartData} />
            </div>
          </CardContent>
        </Card>

        {/* Action List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Top Recommendations</CardTitle>
            <CardDescription>Actions to improve your score</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {actions.length === 0 ? (
              <p className="text-sm text-muted-foreground">No pending actions. Great job!</p>
            ) : (
              actions.map((action) => (
                <div key={action.id} className="flex flex-col gap-2 p-3 rounded-md border border-border bg-secondary/50 hover:bg-secondary/80 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-sm">{action.title}</span>
                    <Badge 
                      variant={action.impact === "HIGH" ? "destructive" : action.impact === "MEDIUM" ? "secondary" : "outline"} 
                      className={`h-5 text-[10px] ${action.impact === "MEDIUM" ? "bg-primary/20 text-primary" : ""}`}
                    >
                      {action.impact === "HIGH" ? "High Impact" : action.impact === "MEDIUM" ? "Med Impact" : "Low Impact"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
