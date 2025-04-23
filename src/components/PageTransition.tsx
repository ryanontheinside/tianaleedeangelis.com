'use client'

import { useEffect, useState, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)
  
  // Only enable transitions after initial load
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  if (!isClient) return <>{children}</>
  
  return (
    <TransitionWrapper key={pathname}>
      {children}
    </TransitionWrapper>
  )
}

function TransitionWrapper({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Start with hidden content
    setIsVisible(false)
    
    // Then immediately trigger fade-in
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      {children}
    </div>
  )
}