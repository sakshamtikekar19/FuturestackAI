"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function ParticleField({ count = 500 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  const particles = useMemo(() => {
    const temp = []
    // Deterministic random to avoid react-hooks/purity errors
    const random = (seed: number) => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }
    
    let seed = 1;
    for (let i = 0; i < count; i++) {
      const x = (random(seed++) - 0.5) * 40
      const y = (random(seed++) - 0.5) * 40
      const z = (random(seed++) - 0.5) * 40
      const factor = random(seed++) * 0.5 + 0.1
      const speed = random(seed++) * 0.01 + 0.005
      const xOffset = random(seed++) * Math.PI * 2
      const yOffset = random(seed++) * Math.PI * 2
      const zOffset = random(seed++) * Math.PI * 2
      temp.push({ x, y, z, factor, speed, xOffset, yOffset, zOffset })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    
    particles.forEach((particle, i) => {
      const time = state.clock.getElapsedTime()
      
      // Gentle floating animation
      dummy.position.set(
        particle.x + Math.sin(time * particle.speed + particle.xOffset) * 2,
        particle.y + Math.sin(time * particle.speed + particle.yOffset) * 2,
        particle.z + Math.cos(time * particle.speed + particle.zOffset) * 2
      )
      
      const scale = particle.factor + Math.sin(time * 2 + i) * 0.1
      dummy.scale.set(scale, scale, scale)
      
      dummy.updateMatrix()
      mesh.current!.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#6366F1" transparent opacity={0.6} />
    </instancedMesh>
  )
}
