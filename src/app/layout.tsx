import type { Metadata } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from '@clerk/nextjs'

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "FutureStack AI | Own Your AI Visibility",
  description: "The infrastructure layer that helps businesses become discoverable, trusted, and recommended across ChatGPT, Claude, Gemini, Perplexity, and Copilot.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
