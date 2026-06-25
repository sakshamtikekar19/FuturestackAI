import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function GET(_request: Request) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const organizationId = userId

    // Get the most recent completed scan for any domain in this organization
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

    // Get all uncompleted recommendation actions
    const actions = await prisma.recommendationAction.findMany({
      where: { 
        domain: { organizationId },
        isCompleted: false
      },
      orderBy: { impact: "asc" } // Simple sort, in reality we'd have an enum sorting
    })

    return NextResponse.json({ 
      scan: latestScan,
      actions
    }, { status: 200 })
  } catch (error) {
    console.error("Get metrics error:", error)
    return NextResponse.json({ error: "Failed to get metrics" }, { status: 500 })
  }
}
