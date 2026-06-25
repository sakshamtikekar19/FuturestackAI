import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { AddCompetitorDialog } from "@/components/dashboard/AddCompetitorDialog"
import { RemoveCompetitorButton } from "@/components/dashboard/RemoveCompetitorButton"

export const dynamic = 'force-dynamic'

export default async function CompetitorsPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  const organizationId = userId

  // Get the domain and competitors
  const domain = await prisma.domain.findFirst({
    where: { organizationId },
    include: {
      competitors: {
        orderBy: { createdAt: "desc" }
      }
    }
  })

  // Get the most recent completed scan
  const latestScan = await prisma.scan.findFirst({
    where: { 
      domain: { organizationId },
      status: "COMPLETED"
    },
    orderBy: { completedAt: "desc" },
    include: { report: true }
  })

  const competitors = domain?.competitors || []
  
  const reportData = latestScan?.report as any;
  const brandSOV = reportData?.sovBreakdown?.brandSOV || 0;
  const totalMarketMentions = reportData?.sovBreakdown?.totalMarketMentions || 0;
  const compMentions = reportData?.competitorMentions || {};

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Competitor Analysis</h1>
          <p className="text-muted-foreground">Compare your AI Share of Voice against industry rivals.</p>
        </div>
        <AddCompetitorDialog />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Share of Voice (AI Recommendations)</CardTitle>
            <CardDescription>How often you are recommended compared to tracked competitors.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Current Brand */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="flex items-center gap-2">
                    {domain?.url || "Your Brand"}
                    <Badge variant="secondary" className="text-[10px] h-5">You</Badge>
                  </span>
                  <span>{brandSOV}% SOV</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div className="bg-primary h-3 rounded-full" style={{ width: `${brandSOV}%` }}></div>
                </div>
              </div>

              {/* Competitors List */}
              {competitors.length > 0 ? (
                <>
                  <div className="border-t border-border pt-4 mt-6">
                    <h3 className="text-sm font-medium mb-4">Tracked Competitors</h3>
                    <div className="space-y-6">
                      {competitors.map((comp) => {
                        const mentions = compMentions[comp.url] || 0;
                        const realScore = totalMarketMentions > 0 ? Math.round((mentions / totalMarketMentions) * 100) : 0;
                        
                        return (
                          <div key={comp.id} className="flex flex-col gap-2">
                            <div className="flex justify-between items-center text-sm font-medium">
                              <span className="flex items-center gap-2">
                                {comp.url}
                              </span>
                              <div className="flex items-center gap-4">
                                <span className="text-muted-foreground">{realScore}% SOV</span>
                                <RemoveCompetitorButton id={comp.id} />
                              </div>
                            </div>
                            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                              <div className="bg-muted-foreground/40 h-3 rounded-full" style={{ width: `${realScore}%` }}></div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center border-2 border-dashed border-border rounded-lg bg-secondary/20">
                  <p className="text-muted-foreground text-sm max-w-sm mb-4">
                    You aren't tracking any competitors yet. Add competitors to see how their AI Visibility compares to yours.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
