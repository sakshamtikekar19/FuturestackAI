import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    // Find the oldest pending scan
    const scan = await prisma.scan.findFirst({
      where: { status: { in: ["PENDING", "RUNNING"] } },
      orderBy: { createdAt: "asc" },
      include: { domain: { include: { competitors: true } } }
    })

    if (!scan) {
      return NextResponse.json({ scan: null }, { status: 200 })
    }

    // Mark as running so other workers don't pick it up
    const updatedScan = await prisma.scan.update({
      where: { id: scan.id },
      data: { status: "RUNNING" },
      include: { domain: { include: { competitors: true } } }
    })

    return NextResponse.json({ scan: updatedScan }, { status: 200 })
  } catch (error) {
    console.error("Get pending scan error:", error)
    return NextResponse.json({ error: "Failed to get pending scan" }, { status: 500 })
  }
}
