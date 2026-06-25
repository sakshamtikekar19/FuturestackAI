"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { addCompetitor } from "@/app/actions/competitors"

export function AddCompetitorDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return

    setIsLoading(true)
    setError("")

    const result = await addCompetitor(url)

    if (result.error) {
      setError(result.error)
    } else {
      setIsOpen(false)
      setUrl("")
    }
    
    setIsLoading(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>+ Add Competitor</Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-popover border border-border shadow-lg rounded-lg w-full max-w-md p-6 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <h2 className="text-xl font-bold mb-1">Add Competitor</h2>
            <p className="text-sm text-muted-foreground mb-6">Enter a competitor&apos;s domain to track their AI visibility.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="url" className="text-sm font-medium">Competitor URL or Brand Name</label>
                <input
                  id="url"
                  type="text"
                  placeholder="e.g., competitor.com"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isLoading}
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
              
              <div className="flex justify-end gap-3 pt-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsOpen(false)}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading || !url.trim()}>
                  {isLoading ? "Adding..." : "Add Competitor"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
