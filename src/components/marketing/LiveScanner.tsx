"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

const PLATFORMS = [
  { name: "ChatGPT", color: "#10A37F", status: "idle" },
  { name: "Claude", color: "#D97757", status: "idle" },
  { name: "Gemini", color: "#1A73E8", status: "idle" },
  { name: "Perplexity", color: "#22B8CD", status: "idle" },
  { name: "Copilot", color: "#0067B8", status: "idle" },
]

export function LiveScanner() {
  const router = useRouter()
  const [domain, setDomain] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  
  const handleScan = () => {
    if (!domain) return
    setIsScanning(true)
    setScanProgress(0)
    
    // Simulate scan progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsScanning(false), 1000)
          return 100
        }
        return prev + 2
      })
    }, 50)
  }

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Live Analysis</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            See how AI platforms perceive your brand, <span className="text-primary">right now.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our engine queries the top 5 AI models in real-time to determine your baseline AI Visibility Score.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            <div className="p-1 border-b border-border bg-secondary/50 flex items-center gap-2">
              <div className="flex gap-1.5 px-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-muted-foreground font-mono bg-background/50 px-3 py-1 rounded-md">
                futurestack.ai / scanner
              </div>
            </div>
            
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-md relative mb-12">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <input 
                    type="text" 
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter your domain to scan..." 
                    disabled={isScanning}
                    className="w-full h-14 rounded-full border border-border bg-background pl-12 pr-32 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50"
                  />
                  <div className="absolute inset-y-1 right-1">
                    <Button 
                      onClick={handleScan}
                      disabled={isScanning || !domain}
                      className="h-12 rounded-full px-6 shadow-md"
                    >
                      {isScanning ? "Scanning..." : "Run Audit"}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 w-full">
                  {PLATFORMS.map((platform, idx) => (
                    <div key={platform.name} className="flex flex-col items-center gap-3">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden bg-secondary border border-border transition-all duration-300"
                        style={{
                          borderColor: isScanning && scanProgress > idx * 20 ? platform.color : 'var(--border)',
                          boxShadow: isScanning && scanProgress > idx * 20 ? `0 0 20px ${platform.color}40` : 'none'
                        }}
                      >
                        {isScanning && scanProgress > idx * 20 && scanProgress < 100 && (
                          <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                        )}
                        <span className="font-bold text-xl" style={{ color: platform.color }}>
                          {platform.name[0]}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{platform.name}</span>
                    </div>
                  ))}
                </div>

                {isScanning && (
                  <div className="w-full max-w-2xl mt-12">
                    <div className="flex justify-between text-sm mb-2 text-muted-foreground font-mono">
                      <span>Analyzing mention frequency...</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {scanProgress === 100 && !isScanning && (
                  <div className="w-full max-w-2xl mt-12 p-6 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between animate-in fade-in slide-in-from-bottom-4">
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">Scan Complete</h4>
                      <p className="text-sm text-muted-foreground">We found 12 mentions across 3 platforms.</p>
                    </div>
                    <Button variant="default" onClick={() => router.push(`/dashboard?domain=${encodeURIComponent(domain)}`)}>
                      View Full Report
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
