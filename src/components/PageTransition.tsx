'use client'

import { useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeIn')
  
  useEffect(() => {
    // If the route has changed
    if (children !== displayChildren) {
      // Start fade out transition
      setTransitionStage('fadeOut')
      
      // After the fade out, swap the children and fade in
      const fadeOutTimeout = setTimeout(() => {
        setDisplayChildren(children)
        // Add a small delay before fading back in to ensure smoother transitions
        setTimeout(() => {
          setTransitionStage('fadeIn')
        }, 100)
      }, 300) // Reduced from 500ms for faster transitions
      
      return () => clearTimeout(fadeOutTimeout)
    }
  }, [children, displayChildren, pathname])
  
  return (
    <div
      className={`transition-opacity duration-300 ${
        transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {displayChildren}
    </div>
  )
} 