"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { removeCompetitor } from "@/app/actions/competitors"

export function RemoveCompetitorButton({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleRemove() {
    setIsLoading(true)
    await removeCompetitor(id)
    setIsLoading(false)
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={handleRemove}
      disabled={isLoading}
      className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
    >
      {isLoading ? "Removing..." : "Remove"}
    </Button>
  )
}
