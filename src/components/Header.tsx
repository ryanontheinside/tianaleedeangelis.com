'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const isActive = (path: string) => pathname === path

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-secondary/95 backdrop-blur-lg shadow-lg py-2' : 'bg-secondary/80 backdrop-blur-sm py-4'
    }`}>
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-gothic font-bold relative group">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-[#FCEABB] transition-all duration-300">
            Tiana Lee
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 flex flex-col items-end">
            <span className={`bg-accent h-0.5 rounded-full block transition-all duration-300 ${menuOpen ? 'w-6 transform rotate-45 translate-y-1.5' : 'w-6 mb-1.5'}`}></span>
            <span className={`bg-accent h-0.5 rounded-full block transition-all duration-300 ${menuOpen ? 'w-6 opacity-0' : 'w-4 mb-1.5'}`}></span>
            <span className={`bg-accent h-0.5 rounded-full block transition-all duration-300 ${menuOpen ? 'w-6 transform -rotate-45 -translate-y-1.5' : 'w-5'}`}></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {['Home', 'Gallery', 'Booking', 'About'].map((item, index) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`
            const active = isActive(path)
            
            return (
              <Link 
                key={item} 
                href={path}
                className={`stagger-item opacity-0 font-gothic relative group overflow-hidden animate-fade-in ${
                  active ? 'text-accent' : 'text-light hover:text-accent'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            )
          })}
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-secondary/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col items-center gap-6">
            {['Home', 'Gallery', 'Booking', 'About'].map((item, index) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`
              const active = isActive(path)
              
              return (
                <Link 
                  key={item} 
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-2xl font-gothic relative group ${
                    active ? 'text-accent' : 'text-light hover:text-accent'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
} 