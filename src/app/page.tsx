import { Background3D } from "@/components/three/Background3D"
import { ScrollStory } from "@/components/marketing/ScrollStory"

export default function Home() {
  return (
    <main className="bg-background relative">
      <Background3D />
      <ScrollStory />
    </main>
  )
}
