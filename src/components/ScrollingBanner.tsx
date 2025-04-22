'use client'

import { useRef, useEffect } from 'react'

interface ScrollingBannerProps {
  text: string
  className?: string
  speed?: number
  repeat?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}

export default function ScrollingBanner({
  text,
  className = '',
  speed = 30,
  repeat = 4,
  direction = 'left',
  pauseOnHover = true
}: ScrollingBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const repeatedText = Array(repeat).fill(text).join(' • ')
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    // Calculate the animation duration based on text length and speed
    const textLength = container.scrollWidth
    const duration = textLength / speed
    
    // Set the animation CSS
    container.style.animationDuration = `${duration}s`
    container.style.animationDirection = direction === 'left' ? 'normal' : 'reverse'
    
    if (pauseOnHover) {
      container.addEventListener('mouseenter', () => {
        container.style.animationPlayState = 'paused'
      })
      
      container.addEventListener('mouseleave', () => {
        container.style.animationPlayState = 'running'
      })
    }
    
    // Create keyframes dynamically to ensure smooth looping
    const styleSheet = document.styleSheets[0]
    const keyframes = `
      @keyframes scrollText {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${textLength / repeat}px); }
      }
    `
    
    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
    } catch (e) {
      console.error('Error inserting keyframes:', e)
    }
    
    return () => {
      // Cleanup
    }
  }, [text, speed, repeat, direction, pauseOnHover])
  
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div 
        ref={containerRef}
        className="inline-block animate-scroll-text"
        style={{
          animationName: 'scrollText',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {repeatedText}
      </div>
    </div>
  )
} 