import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { generateScanReport, calculateTrendScore, PromptResponsePayload } from "@/lib/metrics"

export async function POST(request: Request) {
  try {
    const { scanId, results } = await request.json()

    if (!scanId || !results || !Array.isArray(results)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const scan = await prisma.scan.findUnique({ 
      where: { id: scanId },
      include: { 
        domain: {
          include: { competitors: true }
        } 
      } 
    })

    if (!scan) {
      return NextResponse.json({ error: "Scan not found" }, { status: 404 })
    }

    // 1. Save all PromptResponses
    await prisma.promptResponse.createMany({
      data: results.map((r: PromptResponsePayload) => ({
        scanId,
        promptId: r.promptId,
        openai_raw_response: r.openai_raw_response,
        gemini_raw_response: r.gemini_raw_response,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        openai_normalized_json: r.openai_normalized_json as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gemini_normalized_json: r.gemini_normalized_json as any,
        openai_processing_time: r.openai_processing_time,
        gemini_processing_time: r.gemini_processing_time,
        openai_status: r.openai_status,
        gemini_status: r.gemini_status
      }))
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { visibilityScore, reportData } = generateScanReport(
      results, 
      scan.domain.url,
      scan.domain.competitors
    ) as any;

    // 3. Save the ScanReport
    await prisma.scanReport.create({
      data: {
        scanId,
        openaiFindings: reportData.openaiFindings,
        geminiFindings: reportData.geminiFindings,
        brandMentions: reportData.brandMentions,
        competitorMentions: reportData.competitorMentions,
        visibilityScoreBreakdown: reportData.visibilityScoreBreakdown,
        sovBreakdown: reportData.sovBreakdown,
        recommendationBreakdown: reportData.recommendationBreakdown,
        confidenceScores: reportData.confidenceScores
      }
    });

    // 4. Calculate trend score
    const pastScans = await prisma.scan.findMany({
      where: { domainId: scan.domainId, status: "COMPLETED" },
      orderBy: { completedAt: "asc" },
      select: { visibilityScore: true }
    });
    const historicalScores = [...pastScans.map(s => s.visibilityScore || 0), visibilityScore];
    const trendScore = calculateTrendScore(historicalScores);

    // 5. Update Scan
    const completedScan = await prisma.scan.update({
      where: { id: scanId },
      data: {
        status: "COMPLETED",
        visibilityScore,
        presenceScore: reportData.visibilityScoreBreakdown.mentionPct, // mapped to mention presence
        recommendationStrength: reportData.visibilityScoreBreakdown.recommendationPoints,
        trendScore,
        completedAt: new Date()
      }
    })

    // 6. Generate Actions
    // Clear old uncompleted actions
    await prisma.recommendationAction.deleteMany({
      where: { domainId: scan.domainId, isCompleted: false }
    });

    const actionsToCreate = [];
    
    if (reportData.sovBreakdown.brandSOV < 30) {
      actionsToCreate.push({
        domainId: scan.domainId,
        title: "Improve Share of Voice",
        description: "Your brand holds less than 30% of the conversational space against competitors. Increase digital PR and mention frequency across high-authority blogs and review sites.",
        platform: "General AI",
        impact: "HIGH",
        isCompleted: false
      });
    }

    if (reportData.visibilityScoreBreakdown.rankingPct < 50) {
      actionsToCreate.push({
        domainId: scan.domainId,
        title: "Boost AI Ranking Position",
        description: "Your brand is frequently omitted from the top 3 recommended lists. Ensure your value proposition is clearly defined on comparison sites like G2 and Capterra.",
        platform: "General AI",
        impact: "HIGH",
        isCompleted: false
      });
    }

    if (reportData.visibilityScoreBreakdown.recommendationPoints <= 0) {
      actionsToCreate.push({
        domainId: scan.domainId,
        title: "Address Neutral/Negative Sentiment",
        description: "The AI engines are not strongly recommending your brand. Publish case studies and clear use-cases to help AI models understand exactly who your product is best for.",
        platform: "General AI",
        impact: "MEDIUM",
        isCompleted: false
      });
    }

    // Always ensure at least one action exists
    if (actionsToCreate.length === 0) {
      actionsToCreate.push({
        domainId: scan.domainId,
        title: "Maintain AI Dominance",
        description: "You are currently performing exceptionally well. Continue publishing fresh, authoritative content to maintain your top position in AI summaries.",
        platform: "General AI",
        impact: "LOW",
        isCompleted: false
      });
    }

    await prisma.recommendationAction.createMany({
      data: actionsToCreate
    });

    return NextResponse.json({ success: true, scan: completedScan }, { status: 200 })
  } catch (error) {
    console.error("Submit scan results error:", error)
    return NextResponse.json({ error: "Failed to submit results" }, { status: 500 })
  }
}
