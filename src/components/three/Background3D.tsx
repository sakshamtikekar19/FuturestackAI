"use client"

import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { StoryNetwork } from "./StoryNetwork"

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <StoryNetwork />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
        </EffectComposer>
      </Canvas>
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-background/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#04060D_100%)] pointer-events-none opacity-80" />
    </div>
  )
}
