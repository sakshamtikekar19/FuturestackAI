import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function POST(request: Request) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const organizationId = userId
    const { domainUrl } = await request.json()

    if (!domainUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Upsert organization for local dev purposes (in prod, created via Clerk webhook)
    const org = await prisma.organization.upsert({
      where: { id: organizationId },
      update: {},
      create: {
        id: organizationId,
        name: "Acme Corp" // Placeholder
      }
    })

    // Upsert domain
    let domain = await prisma.domain.findFirst({
      where: { url: domainUrl, organizationId }
    })

    if (!domain) {
      domain = await prisma.domain.create({
        data: {
          url: domainUrl,
          organizationId: org.id
        }
      })
    }

    // Create Scan
    const scan = await prisma.scan.create({
      data: {
        domainId: domain.id,
        status: "PENDING",
      }
    })

    return NextResponse.json({ success: true, scan }, { status: 201 })
  } catch (error) {
    console.error("Start scan error:", error)
    return NextResponse.json({ error: "Failed to start scan" }, { status: 500 })
  }
}
