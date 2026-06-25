import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function ReportsPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/")
  }

  const organizationId = userId

  // Get all completed scans for the organization
  const scans = await prisma.scan.findMany({
    where: { 
      domain: { organizationId },
      status: "COMPLETED"
    },
    orderBy: { completedAt: "desc" },
    include: {
      domain: true,
      report: true,
      promptResponses: true
    }
  })

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Reports & History</h1>
          <p className="text-muted-foreground">View and export your historical scan data.</p>
        </div>
        <Button variant="outline">Export CSV</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Scan History</CardTitle>
          <CardDescription>A chronological log of all AI visibility audits performed.</CardDescription>
        </CardHeader>
        <CardContent>
          {scans.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center border-2 border-dashed border-border rounded-lg bg-secondary/20">
              <p className="text-muted-foreground text-sm max-w-sm">
                No completed scans found. Run your first scan from the home page.
              </p>
            </div>
          ) : (
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Domain</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Visibility Score</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Presence Score</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {scans.map((scan) => (
                    <tr key={scan.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle whitespace-nowrap">
                        {scan.completedAt ? new Date(scan.completedAt).toLocaleString() : 'N/A'}
                      </td>
                      <td className="p-4 align-middle font-medium">
                        {scan.domain.url}
                      </td>
                      <td className="p-4 align-middle">
                        <span className="font-bold text-foreground">{scan.visibilityScore}</span>/100
                      </td>
                      <td className="p-4 align-middle">
                        <span className="font-bold text-foreground">{scan.presenceScore}</span>/100
                      </td>
                      <td className="p-4 align-middle">
                        <Badge variant="outline" className="border-green-500 text-green-500 bg-green-500/10">Completed</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
