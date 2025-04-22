'use client'

import { useEffect, useRef, createElement } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  animation?: 'reveal' | 'typewriter' | 'wave' | 'gradient'
  speed?: 'slow' | 'medium' | 'fast'
  delay?: number
  onAnimationComplete?: () => void
}

export default function AnimatedText({
  text,
  className = '',
  tag = 'span',
  animation = 'reveal',
  speed = 'medium',
  delay = 0,
  onAnimationComplete
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const speedValue = {
      slow: 100,
      medium: 50,
      fast: 20
    }[speed]
    
    // Add delay before starting animation
    setTimeout(() => {
      if (animation === 'typewriter') {
        const element = containerRef.current
        if (!element) return
        
        element.textContent = ''
        
        let i = 0
        const type = () => {
          if (i < text.length) {
            element.textContent += text.charAt(i)
            i++
            setTimeout(type, speedValue)
          } else if (onAnimationComplete) {
            onAnimationComplete()
          }
        }
        
        type()
      } else if (animation === 'wave') {
        const element = containerRef.current
        if (!element) return
        
        element.innerHTML = text
          .split('')
          .map(char => char === ' ' 
            ? ' ' 
            : `<span class="inline-block transition-transform">${char}</span>`)
          .join('')
        
        const characters = element.querySelectorAll('span')
        
        characters.forEach((char, index) => {
          setTimeout(() => {
            char.classList.add('animate-wave')
          }, index * speedValue + delay)
        })
        
        if (onAnimationComplete) {
          setTimeout(onAnimationComplete, characters.length * speedValue + delay + 500)
        }
      }
    }, delay)
  }, [text, animation, speed, delay, onAnimationComplete])
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'reveal':
        return 'animate-fade-in'
      case 'gradient':
        return 'animate-shimmer'
      default:
        return ''
    }
  }
  
  return createElement(
    tag,
    {
      ref: containerRef,
      className: `${className} ${getAnimationClass()}`,
      style: { animationDelay: `${delay}ms` }
    },
    animation !== 'typewriter' && animation !== 'wave' ? text : ''
  )
}

// Add custom CSS to globals.css
/*
@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-wave {
  animation: wave 0.5s ease-in-out;
}
*/ 