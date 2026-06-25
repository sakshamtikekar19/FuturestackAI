import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Float, Text } from "@react-three/drei"
import * as THREE from "three"
import { useStoryStore } from "@/store/useStoryStore"

export function BrandNode() {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const wireframeRef = useRef<THREE.Mesh>(null)
  const haloRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const scrollProgress = useStoryStore.getState().scrollProgress
    // Stage 0: 0 -> 0.2
    // Stage 1: 0.2 -> 0.4
    // Stage 2: 0.4 -> 0.6
    // Stage 3: 0.6 -> 0.8
    // Stage 4: 0.8 -> 1.0

    // Scale up slightly as we scroll
    const targetScale = 1 + scrollProgress * 0.5
    if (groupRef.current) {
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05)
    }

    if (coreRef.current && wireframeRef.current && haloRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Core pulses faster as scroll increases
      const pulseSpeed = 2 + scrollProgress * 5
      const coreScale = 1 + Math.sin(time * pulseSpeed) * 0.05
      coreRef.current.scale.set(coreScale, coreScale, coreScale)
      
      // Wireframe rotates faster
      wireframeRef.current.rotation.y = time * (0.2 + scrollProgress)
      wireframeRef.current.rotation.z = time * (0.1 + scrollProgress * 0.5)
      
      // Halo becomes more visible and larger
      const haloMaterial = haloRef.current.material as THREE.MeshBasicMaterial
      haloMaterial.opacity = THREE.MathUtils.lerp(haloMaterial.opacity, 0.1 + scrollProgress * 0.3, 0.05)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <group ref={groupRef}>
        <Sphere ref={coreRef} args={[0.8, 32, 32]}>
          <meshBasicMaterial color="#6366F1" />
        </Sphere>
        <Sphere ref={wireframeRef} args={[1.3, 24, 24]}>
          <meshBasicMaterial color="#818CF8" wireframe transparent opacity={0.4} />
        </Sphere>
        <Sphere ref={haloRef} args={[1.8, 32, 32]}>
          <meshBasicMaterial color="#06B6D4" transparent opacity={0.1} side={THREE.BackSide} />
        </Sphere>
        <Text
          position={[0, -2.2, 0]}
          fontSize={0.4}
          color="#F9FAFB"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          Your Brand
        </Text>
      </group>
    </Float>
  )
}
