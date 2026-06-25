import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { isBrandMatch } from "@/lib/metrics"

export const dynamic = 'force-dynamic'

export default async function VisibilityPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  const organizationId = userId

  const latestScan = await prisma.scan.findFirst({
    where: { 
      domain: { organizationId },
      status: "COMPLETED"
    },
    orderBy: { completedAt: "desc" },
    include: {
      promptResponses: true,
      domain: true
    }
  })

  if (!latestScan || !latestScan.promptResponses || latestScan.promptResponses.length === 0) {
    return (
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Visibility Details</h1>
          <p className="text-muted-foreground">Deep dive into how AI platforms see your brand.</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">No scan results found yet. Run a scan from the home page to see detailed visibility metrics.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const domainUrl = latestScan.domain.url;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Visibility Details</h1>
        <p className="text-muted-foreground">Deep dive into how AI platforms see your brand across multiple distinct prompts.</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {latestScan.promptResponses.map((pr) => {
          const oNorm = pr.openai_normalized_json as any || { brands_mentioned: [], ranked_list: [], confidence: 0 };
          const oHasMention = oNorm.brands_mentioned.some((b: string) => isBrandMatch(b, domainUrl)) || oNorm.ranked_list.some((b: string) => isBrandMatch(b, domainUrl));
          const oRankIndex = oNorm.ranked_list.findIndex((b: string) => isBrandMatch(b, domainUrl));
          const oRank = oRankIndex !== -1 ? oRankIndex + 1 : "N/A";

          const gNorm = pr.gemini_normalized_json as any || { brands_mentioned: [], ranked_list: [], confidence: 0 };
          const gHasMention = gNorm.brands_mentioned.some((b: string) => isBrandMatch(b, domainUrl)) || gNorm.ranked_list.some((b: string) => isBrandMatch(b, domainUrl));
          const gRankIndex = gNorm.ranked_list.findIndex((b: string) => isBrandMatch(b, domainUrl));
          const gRank = gRankIndex !== -1 ? gRankIndex + 1 : "N/A";

          return (
            <div key={pr.id} className="space-y-4 border-b border-border pb-8 last:border-0">
              <h2 className="text-xl font-bold">Prompt {pr.promptId}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* OpenAI Card */}
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>OpenAI (GPT-4o-mini)</CardTitle>
                      <Badge variant={oHasMention ? "default" : "destructive"}>
                        {oHasMention ? "Mentioned" : "Not Mentioned"}
                      </Badge>
                    </div>
                    <CardDescription>
                      Ranked Position: {oRank !== "N/A" ? `#${oRank}` : "N/A"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <div className="bg-secondary/50 rounded-md p-4 text-sm text-muted-foreground italic flex-1 border border-border whitespace-pre-wrap max-h-64 overflow-y-auto">
                      {pr.openai_raw_response || "No response generated."}
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-foreground">Extraction Confidence</span>
                      <Badge variant="secondary">
                        {Math.round((oNorm.confidence || 0) * 100)}%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Gemini Card */}
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>Google (Gemini-2.5-Flash-Lite)</CardTitle>
                      <Badge variant={gHasMention ? "default" : "destructive"}>
                        {gHasMention ? "Mentioned" : "Not Mentioned"}
                      </Badge>
                    </div>
                    <CardDescription>
                      Ranked Position: {gRank !== "N/A" ? `#${gRank}` : "N/A"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    <div className="bg-secondary/50 rounded-md p-4 text-sm text-muted-foreground italic flex-1 border border-border whitespace-pre-wrap max-h-64 overflow-y-auto">
                      {pr.gemini_raw_response || "No response generated."}
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-foreground">Extraction Confidence</span>
                      <Badge variant="secondary">
                        {Math.round((gNorm.confidence || 0) * 100)}%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
