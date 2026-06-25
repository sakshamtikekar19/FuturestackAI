"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function ScanButton({ scanStatus, domainUrl }: { scanStatus: string, domainUrl: string }) {
  const router = useRouter()
  const [justCompleted, setJustCompleted] = useState(false)
  const [isStarting, setIsStarting] = useState(false)
  const [prevStatus, setPrevStatus] = useState(scanStatus)

  // A scan is conceptually pending if it's PENDING, RUNNING, or if we just clicked the button
  const isPendingOrRunning = scanStatus === "PENDING" || scanStatus === "RUNNING"
  const isDisabled = isPendingOrRunning || isStarting

  // If the server tells us it's actually running/pending, we can clear our instant local state
  if (isPendingOrRunning && isStarting) {
    setIsStarting(false)
  }

  if (prevStatus !== scanStatus) {
    setPrevStatus(scanStatus)
  }

  useEffect(() => {
    // Detect transition from PENDING/RUNNING to COMPLETED
    if ((prevStatus === "PENDING" || prevStatus === "RUNNING") && scanStatus === "COMPLETED") {
      setTimeout(() => setJustCompleted(true), 0)
      const timer = setTimeout(() => {
        setJustCompleted(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [scanStatus, prevStatus])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isDisabled) return
    
    // Instantly disable to prevent double taps
    setIsStarting(true)
    router.push(`/dashboard?domain=${encodeURIComponent(domainUrl)}`)
  }

  // Determine button text
  let buttonText = "Run New Scan"
  if (isStarting || scanStatus === "PENDING") {
    buttonText = "Queued for Scanning..."
  } else if (scanStatus === "RUNNING") {
    buttonText = "Processing AI Results..."
  } else if (justCompleted) {
    buttonText = "Scan Completed!"
  }

  return (
    <Button 
      onClick={handleClick} 
      disabled={isDisabled}
      className={justCompleted ? "bg-green-600 hover:bg-green-700 text-white" : ""}
    >
      {buttonText}
    </Button>
  )
}
