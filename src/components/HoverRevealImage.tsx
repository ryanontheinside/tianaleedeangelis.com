'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HoverRevealImageProps {
  src: string
  alt: string
  title?: string
  description?: string
  linkText?: string
  linkUrl?: string
  className?: string
  aspectRatio?: 'square' | '16/9' | '3/4' | '2/3'
  priority?: boolean
  effectStyle?: 'fade' | 'slide' | 'zoom' | 'shine'
}

export default function HoverRevealImage({
  src,
  alt,
  title,
  description,
  linkText,
  linkUrl,
  className = '',
  aspectRatio = 'square',
  priority = false,
  effectStyle = 'fade'
}: HoverRevealImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const getAspectRatio = () => {
    switch (aspectRatio) {
      case '16/9': return 'aspect-video'
      case '3/4': return 'aspect-[3/4]'
      case '2/3': return 'aspect-[2/3]'
      default: return 'aspect-square'
    }
  }
  
  const getEffectClasses = () => {
    const baseClasses = 'absolute inset-0 flex flex-col justify-end p-4 transition-all duration-500'
    
    switch (effectStyle) {
      case 'slide':
        return `${baseClasses} ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`
      case 'zoom':
        return baseClasses
      case 'shine':
        return `${baseClasses} ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`
      default: // fade
        return `${baseClasses} ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`
    }
  }
  
  return (
    <div 
      className={`relative overflow-hidden group ${getAspectRatio()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className={`absolute inset-0 transition-transform duration-500 ${
        effectStyle === 'zoom' && isHovered ? 'scale-110' : 'scale-100'
      }`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
      
      {/* Overlay */}
      <div className={getEffectClasses()}>
        <div className={`relative z-10 ${effectStyle === 'shine' ? 'animate-shimmer' : ''}`}>
          {title && (
            <h3 className="text-white font-gothic text-xl mb-2">
              {title}
            </h3>
          )}
          
          {description && (
            <p className="text-white/90 text-sm mb-3">
              {description}
            </p>
          )}
          
          {linkText && linkUrl && (
            <Link href={linkUrl} className="inline-block text-accent hover:text-white text-sm font-bold transition-colors">
              {linkText}
            </Link>
          )}
        </div>
      </div>
      
      {/* Background overlay gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Shine effect */}
      {effectStyle === 'shine' && (
        <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform transition-transform duration-700 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} style={{ width: '150%', left: '-50%' }} />
      )}
    </div>
  )
} 