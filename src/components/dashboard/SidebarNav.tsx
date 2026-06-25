"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"

type NavItem = {
  href: string
  label: string
  icon: React.ReactNode
  badge?: number
}

export function SidebarNav({ pendingActionsCount }: { pendingActionsCount: number }) {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
    },
    {
      href: "/dashboard/visibility",
      label: "Visibility",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
    },
    {
      href: "/dashboard/recommendations",
      label: "Actions",
      badge: pendingActionsCount,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    },
    {
      href: "/dashboard/competitors",
      label: "Competitors",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
    },
    {
      href: "/dashboard/reports",
      label: "Reports",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/><path d="M18 21v-8a2 2 0 0 0-2-2h-1"/><path d="M4 11V4a2 2 0 0 1 2-2h8l6 6v13a2 2 0 0 1-2 2h-4"/></svg>
    }
  ]

  return (
    <nav className="flex-1 overflow-y-auto py-4">
      <ul className="space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.label}
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <Badge variant="destructive" className="h-5 px-1.5 min-w-5 flex items-center justify-center text-[10px]">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
