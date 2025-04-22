'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
  priority?: boolean
}

export default function ParallaxImage({ 
  src, 
  alt, 
  speed = 0.5, 
  className = '', 
  priority = false 
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    if (!imageRef.current) return
    
    const handleScroll = () => {
      if (!imageRef.current) return
      
      const { top } = imageRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Check if element is in viewport
      if (top < windowHeight && top > -windowHeight) {
        // Calculate how far scrolled into view
        const scrolledRatio = 1 - (top / windowHeight)
        setOffset(scrolledRatio * speed * 100)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])
  
  return (
    <div 
      ref={imageRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        style={{ transform: `translateY(${offset}px)` }}
        className="absolute inset-0 transition-transform duration-100 ease-out"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  )
} 