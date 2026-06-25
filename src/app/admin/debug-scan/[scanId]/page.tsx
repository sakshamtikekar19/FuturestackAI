import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const dynamic = 'force-dynamic'

export default async function DebugScanPage(props: { params: Promise<{ scanId: string }> }) {
  const { scanId } = await props.params
  
  const scan = await prisma.scan.findUnique({
    where: { id: scanId },
    include: {
      promptResponses: true,
      report: true,
      domain: true
    }
  })

  if (!scan) return notFound()

  return (
    <div className="container mx-auto p-8 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Scan Debug Transparency Layer</h1>
        <p className="text-muted-foreground">Scan ID: {scanId} | Domain: {scan.domain.url}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Final Metrics Calculation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-sm">
            <div>
              <strong>Visibility Score:</strong> {scan.visibilityScore}%
            </div>
            <pre className="bg-secondary/50 p-4 rounded-md overflow-auto">
              {JSON.stringify(scan.report?.visibilityScoreBreakdown, null, 2)}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Share of Voice Calculation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-sm">
            <pre className="bg-secondary/50 p-4 rounded-md overflow-auto">
              {JSON.stringify(scan.report?.sovBreakdown, null, 2)}
            </pre>
            <pre className="bg-secondary/50 p-4 rounded-md overflow-auto">
              {JSON.stringify(scan.report?.competitorMentions, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mt-8">Prompt Responses (4 Prompts x 2 Models)</h2>
      {scan.promptResponses.map((pr) => (
        <Card key={pr.id}>
          <CardHeader>
            <CardTitle>Prompt {pr.promptId}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">OpenAI (GPT-4o)</h3>
              <p className="text-xs text-muted-foreground">Status: {pr.openai_status} | Time: {pr.openai_processing_time}ms</p>
              <div>
                <h4 className="font-semibold text-sm mb-1">RAW OUTPUT</h4>
                <pre className="bg-secondary/50 p-4 rounded-md overflow-auto max-h-64 text-xs whitespace-pre-wrap">
                  {pr.openai_raw_response || "N/A"}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">NORMALIZED JSON</h4>
                <pre className="bg-secondary/50 p-4 rounded-md overflow-auto max-h-64 text-xs">
                  {JSON.stringify(pr.openai_normalized_json, null, 2)}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Google (Gemini)</h3>
              <p className="text-xs text-muted-foreground">Status: {pr.gemini_status} | Time: {pr.gemini_processing_time}ms</p>
              <div>
                <h4 className="font-semibold text-sm mb-1">RAW OUTPUT</h4>
                <pre className="bg-secondary/50 p-4 rounded-md overflow-auto max-h-64 text-xs whitespace-pre-wrap">
                  {pr.gemini_raw_response || "N/A"}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">NORMALIZED JSON</h4>
                <pre className="bg-secondary/50 p-4 rounded-md overflow-auto max-h-64 text-xs">
                  {JSON.stringify(pr.gemini_normalized_json, null, 2)}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
