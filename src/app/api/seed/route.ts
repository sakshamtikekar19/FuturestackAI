import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    const domain = await prisma.domain.findFirst()
    
    if (!domain) {
      return NextResponse.json({ error: "No domain found" }, { status: 404 })
    }

    // Clear existing to avoid duplicates if called multiple times
    await prisma.recommendationAction.deleteMany({
      where: { domainId: domain.id }
    })

    await prisma.recommendationAction.createMany({
      data: [
        {
          domainId: domain.id,
          title: 'Optimize for Claude',
          description: 'Claude did not mention your brand. Consider creating more content that explicitly links your brand to your target keywords on high-authority domains.',
          impact: 'HIGH',
          platform: 'Claude'
        },
        {
          domainId: domain.id,
          title: 'Improve sentiment on ChatGPT',
          description: 'Your brand was mentioned but with neutral sentiment. Try encouraging user reviews and case studies that highlight positive outcomes.',
          impact: 'MEDIUM',
          platform: 'ChatGPT'
        },
        {
          domainId: domain.id,
          title: 'Update outdated information on Gemini',
          description: 'Gemini cited older features that are no longer accurate. Ensure your homepage clearly lists current capabilities.',
          impact: 'LOW',
          platform: 'Gemini'
        }
      ]
    })

    return NextResponse.json({ success: true, message: "Mock actions added" })
  } catch (error) {
    console.error("Seed error:", error)
    return NextResponse.json({ error: "Failed to seed" }, { status: 500 })
  }
}
