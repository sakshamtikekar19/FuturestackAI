"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function ParticleField({ count = 500 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40
      const y = (Math.random() - 0.5) * 40
      const z = (Math.random() - 0.5) * 40
      const factor = Math.random() * 0.5 + 0.1
      const speed = Math.random() * 0.01 + 0.005
      const xOffset = Math.random() * Math.PI * 2
      const yOffset = Math.random() * Math.PI * 2
      const zOffset = Math.random() * Math.PI * 2
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
