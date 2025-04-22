'use client'

import { useState, useRef, ReactNode, useEffect, useCallback } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  scale?: number
  perspective?: number
  transitionSpeed?: number
  glareColor?: string
  glareOpacity?: number
  gyroscope?: boolean
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 10,
  scale = 1.05,
  perspective = 1000,
  transitionSpeed = 400,
  glareColor = '#ffffff',
  glareOpacity = 0.1,
  gyroscope = false
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0
  })
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = (rect.left + rect.right) / 2
    const centerY = (rect.top + rect.bottom) / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    // Calculate rotation based on mouse position
    const rotateY = (mouseX / (rect.width / 2)) * maxTilt
    const rotateX = -((mouseY / (rect.height / 2)) * maxTilt)
    
    // Calculate glare position
    const glareX = ((mouseX + rect.width / 2) / rect.width) * 100
    const glareY = ((mouseY + rect.height / 2) / rect.height) * 100
    
    setTransform({
      rotateX,
      rotateY,
      scale,
      glareX,
      glareY,
      glareOpacity: glareOpacity
    })
  }
  
  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0
    })
  }
  
  const handleDeviceOrientation = useCallback((e: DeviceOrientationEvent) => {
    if (!gyroscope || !e.beta || !e.gamma || !cardRef.current) return
    
    // Use device orientation for tilt when enabled
    const rotateX = (e.beta - 45) / 45 * maxTilt
    const rotateY = e.gamma / 45 * maxTilt
    
    setTransform({
      rotateX: Math.min(Math.max(rotateX, -maxTilt), maxTilt),
      rotateY: Math.min(Math.max(rotateY, -maxTilt), maxTilt),
      scale,
      glareX: ((rotateY + maxTilt) / (maxTilt * 2)) * 100,
      glareY: ((rotateX + maxTilt) / (maxTilt * 2)) * 100,
      glareOpacity: glareOpacity
    })
  }, [maxTilt, scale, glareOpacity, gyroscope]);
  
  // Enable gyroscope effect when supported and requested
  useEffect(() => {
    if (gyroscope && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation)
      return () => window.removeEventListener('deviceorientation', handleDeviceOrientation)
    }
  }, [gyroscope, handleDeviceOrientation]);
  
  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setTransform({ ...transform, scale })}
    >
      <div
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transition: `transform ${transitionSpeed}ms ease-out`,
          transformStyle: 'preserve-3d',
          opacity: 1,
          position: 'relative',
          zIndex: 1
        }}
      >
        {children}
        
        {/* Glare effect */}
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, ${glareColor} 0%, transparent 80%)`,
            opacity: transform.glareOpacity,
            transition: `opacity ${transitionSpeed}ms ease-out`,
            mixBlendMode: 'overlay',
            zIndex: 10
          }}
        />
      </div>
    </div>
  )
} 