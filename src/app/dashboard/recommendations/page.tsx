import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function RecommendationsPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  const organizationId = userId

  // Get all recommendation actions for the organization's domain
  const actions = await prisma.recommendationAction.findMany({
    where: { 
      domain: { organizationId },
    },
    orderBy: [
      { isCompleted: "asc" },
      { impact: "asc" }
    ]
  })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Actions & Recommendations</h1>
        <p className="text-muted-foreground">Actionable steps to improve your AI visibility.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {actions.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">No recommendations yet. Once a scan completes, actionable insights will appear here.</p>
            </CardContent>
          </Card>
        ) : (
          actions.map((action) => (
            <Card key={action.id} className={`transition-opacity ${action.isCompleted ? 'opacity-50' : 'opacity-100'}`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
                  <div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription className="mt-1">Targeting: {action.platform}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={action.impact === "HIGH" ? "destructive" : action.impact === "MEDIUM" ? "secondary" : "outline"} 
                      className={action.impact === "MEDIUM" ? "bg-primary/20 text-primary" : ""}
                    >
                      {action.impact === "HIGH" ? "High Impact" : action.impact === "MEDIUM" ? "Medium Impact" : "Low Impact"}
                    </Badge>
                    {action.isCompleted && <Badge variant="outline" className="border-green-500 text-green-500">Completed</Badge>}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex justify-between items-end gap-4 flex-col sm:flex-row">
                <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
                  {action.description}
                </p>
                {!action.isCompleted && (
                  <Button variant="outline" size="sm" className="whitespace-nowrap">Mark Complete</Button>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
