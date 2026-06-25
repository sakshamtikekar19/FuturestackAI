import { ReactNode } from "react"
import Link from "next/link"

import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import prisma from "@/lib/prisma"
import { SidebarNav } from "@/components/dashboard/SidebarNav"
import { Bell } from "lucide-react"

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth()
  const organizationId = userId

  let pendingActionsCount = 0
  if (organizationId) {
    pendingActionsCount = await prisma.recommendationAction.count({
      where: {
        domain: { organizationId },
        isCompleted: false
      }
    })
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-secondary flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link href="/" className="font-bold text-xl text-foreground">
            FutureStack <span className="text-primary">AI</span>
          </Link>
        </div>
        
        <SidebarNav pendingActionsCount={pendingActionsCount} />
        
        <div className="p-4 border-t border-border flex items-center gap-3">
          <UserButton />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">My Account</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-background">
          <div className="flex items-center md:hidden">
            <span className="font-bold text-xl text-foreground">
              FutureStack <span className="text-primary">AI</span>
            </span>
          </div>
          <div className="hidden md:flex text-sm text-muted-foreground font-medium">
            AI Visibility Dashboard
          </div>
          <div className="flex items-center gap-4">
            
            <div className="relative group">
              <button className="text-muted-foreground hover:text-foreground relative outline-none cursor-pointer">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              </button>
              
              <div className="absolute right-0 mt-2 w-64 bg-popover text-popover-foreground rounded-md border border-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="px-3 py-2 font-semibold text-sm border-b border-border">Notifications</div>
                <div className="p-1">
                  <div className="px-3 py-2 text-sm rounded-sm hover:bg-muted/50 cursor-pointer">
                    <div className="font-medium">Welcome to FutureStack AI!</div>
                    <div className="text-xs text-muted-foreground mt-1">Run your first scan to see how AI platforms perceive your brand.</div>
                  </div>
                  <div className="px-3 py-2 text-sm rounded-sm hover:bg-muted/50 cursor-pointer">
                    <div className="font-medium text-destructive">Action Required</div>
                    <div className="text-xs text-muted-foreground mt-1">You have pending recommendations to review.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center">
               <UserButton />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
