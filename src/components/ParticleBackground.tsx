'use client'

import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  baseSpeedX: number
  baseSpeedY: number
  color: string
  opacity: number
}

interface ParticleBackgroundProps {
  className?: string
  particleColor?: string
  particleCount?: number
  particleSpeed?: number
  interactive?: boolean
  scrollModifier?: number
}

export default function ParticleBackground({
  className = '',
  particleColor = '#D4AF37',
  particleCount = 50,
  particleSpeed = 0.5,
  interactive = true,
  scrollModifier = 0.005
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 })
  const scrollSpeedRef = useRef(1)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    let animationFrameId: number
    let particles: Particle[] = []
    
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return
      
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      
      // Recreate particles on resize
      initParticles()
    }
    
    const handleScroll = () => {
      // Get viewport height and calculate scroll percentage
      const viewportHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = window.scrollY / viewportHeight
      
      // Create a sine wave based on scroll position (will oscillate between 0.5 and 1.5)
      scrollSpeedRef.current = 1 + Math.sin(scrollPercentage * Math.PI) * scrollModifier * 100
    }
    
    const initParticles = () => {
      particles = []
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 5 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const baseSpeedX = (Math.random() - 0.5) * particleSpeed
        const baseSpeedY = (Math.random() - 0.5) * particleSpeed
        const opacity = Math.random() * 0.5 + 0.3
        
        particles.push({
          x,
          y,
          size,
          baseSpeedX,
          baseSpeedY,
          speedX: baseSpeedX,
          speedY: baseSpeedY,
          color: particleColor,
          opacity
        })
      }
      
      particlesRef.current = particles
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p, index) => {
        // Update speeds based on scroll position
        p.speedX = p.baseSpeedX * scrollSpeedRef.current
        p.speedY = p.baseSpeedY * scrollSpeedRef.current
        
        // Update position
        p.x += p.speedX
        p.y += p.speedY
        
        // Bounce off edges
        if (p.x > canvas.width || p.x < 0) {
          p.speedX *= -1
          p.baseSpeedX *= -1
        }
        
        if (p.y > canvas.height || p.y < 0) {
          p.speedY *= -1
          p.baseSpeedY *= -1
        }
        
        // Interactive effect - move away from mouse
        if (interactive) {
          const dx = p.x - mouseRef.current.x
          const dy = p.y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouseRef.current.radius) {
            const angle = Math.atan2(dy, dx)
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius
            
            p.x += Math.cos(angle) * force * 2
            p.y += Math.sin(angle) * force * 2
          }
        }
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.floor(p.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.fill()
        
        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `${p.color}${Math.floor((p.opacity * (100 - distance) / 100) * 255).toString(16).padStart(2, '0')}`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }
    
    // Initialize
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('scroll', handleScroll)
    
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove)
    }
    
    // Start animation
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleColor, particleCount, particleSpeed, interactive, scrollModifier])
  
  return (
    <div className={`absolute inset-0 overflow-hidden opacity-70 pointer-events-none ${className}`} style={{ zIndex: -1 }}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  )
} 