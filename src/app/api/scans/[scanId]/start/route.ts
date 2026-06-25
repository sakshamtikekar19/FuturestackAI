import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(request: Request, context: { params: Promise<{ scanId: string }> }) {
  try {
    const { scanId } = await context.params
    if (!scanId) {
      return NextResponse.json({ error: "Missing scanId" }, { status: 400 })
    }

    const scan = await prisma.scan.findUnique({
      where: { id: scanId },
      include: { domain: { include: { competitors: true } } }
    })

    if (!scan) {
      return NextResponse.json({ error: "Scan not found" }, { status: 404 })
    }

    const updatedScan = await prisma.scan.update({
      where: { id: scan.id },
      data: { status: "RUNNING" },
      include: { domain: { include: { competitors: true } } }
    })

    return NextResponse.json({ scan: updatedScan }, { status: 200 })
  } catch (error) {
    console.error("Start scan error:", error)
    return NextResponse.json({ error: "Failed to start scan" }, { status: 500 })
  }
}
