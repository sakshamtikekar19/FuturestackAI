"use server"

import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function addCompetitor(url: string) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return { error: "Unauthorized" }
    }

    const organizationId = userId

    // Get current domain
    const domain = await prisma.domain.findFirst({
      where: { organizationId }
    })

    if (!domain) {
      return { error: "No domain found. Run a scan first." }
    }

    // Check if competitor already exists
    const existing = await prisma.competitor.findFirst({
      where: { 
        domainId: domain.id,
        url: url.toLowerCase().trim()
      }
    })

    if (existing) {
      return { error: "Competitor already exists" }
    }

    await prisma.competitor.create({
      data: {
        domainId: domain.id,
        url: url.toLowerCase().trim()
      }
    })

    revalidatePath("/dashboard/competitors")
    return { success: true }
  } catch (error) {
    console.error("Add competitor error:", error)
    return { error: "Failed to add competitor" }
  }
}

export async function removeCompetitor(id: string) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return { error: "Unauthorized" }
    }

    // Verify it belongs to the user
    const competitor = await prisma.competitor.findUnique({
      where: { id },
      include: { domain: true }
    })

    if (!competitor || competitor.domain.organizationId !== userId) {
      return { error: "Competitor not found or unauthorized" }
    }

    await prisma.competitor.delete({
      where: { id }
    })

    revalidatePath("/dashboard/competitors")
    return { success: true }
  } catch (error) {
    console.error("Remove competitor error:", error)
    return { error: "Failed to remove competitor" }
  }
}
