'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'
import AnimatedText from '@/components/AnimatedText'
import ParticleBackground from '@/components/ParticleBackground'
import TiltCard from '@/components/TiltCard'
import ParallaxImage from '@/components/ParallaxImage'
import ScrollingBanner from '@/components/ScrollingBanner'
import HoverRevealImage from '@/components/HoverRevealImage'

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    setFadeIn(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const calculateParallax = (factor: number = 0.2) => {
    return -scrollY * factor
  }

  return (
    <main className="relative">
      <ParticleBackground 
        particleCount={75} 
        particleSpeed={0.3}
        particleColor="#D4AF37"
        scrollModifier={0.108}
      />
      
      <div className="container mx-auto px-6 py-16">
        <section 
          className={`transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} mb-20 flex flex-col items-center text-center`}
          style={{ opacity: 1 }}
        >
          <div className="mb-8 image-container" style={{ zIndex: 50 }}>
            <Image 
              src="/images/tiana-profile.jpg" 
              alt="Tiana Lee DeAngelis"
              width={256}
              height={256}
              className="rounded-full border-4 border-accent"
              priority
            />
          </div>
          
          <AnimatedText
            text="Tiana Lee DeAngelis"
            tag="h1"
            animation="gradient"
            className="text-6xl font-gothic font-bold mb-4"
            speed="slow"
          />
          
          <AnimatedText
            text="Tattoo Artist"
            tag="h2"
            animation="reveal"
            delay={300}
            className="text-2xl text-accent mb-6 opacity-100"
          />
          
          <p className="text-xl max-w-2xl mb-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
            Professional tattoo artist based at Holistic Ink in Boston, specializing in fine line work inspired by antique medical texts, nature, and geometric designs.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
            <SocialLinks />
          </div>
        </section>

        <ScrollingBanner 
          text="FINE LINE TATTOOS • CUSTOM DESIGNS • TATTOO ARTIST • BOSTON MA • HOLISTIC INK" 
          className="py-8 text-2xl font-gothic text-accent opacity-80"
          speed={40}
          repeat={3}
        />

        <section className="mb-20 grid md:grid-cols-2 gap-16 items-center">
          <div className="section-dark card-hover">
            <AnimatedText
              text="The Art"
              tag="h2"
              animation="typewriter"
              className="text-3xl font-gothic font-bold mb-6 text-primary"
            />
            
            <p className="mb-4 animate-fade-in">
              Each tattoo is a unique piece of art created to reflect your vision and story. I specialize in fine line work featuring botanical elements, insects, mushrooms, skulls, and geometric patterns inspired by antique medical illustrations.
            </p>
            
            <p className="mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              My approach blends technical precision with artistic sensitivity, ensuring every piece is both beautiful and meaningful.
            </p>
            
            <Link 
              href="/gallery" 
              className="btn btn-outline inline-block font-gothic animate-pulse-subtle"
            >
              View Gallery
            </Link>
          </div>
          
          <div 
            className="grid grid-cols-2 gap-4 transform transition-all duration-700"
            style={{ transform: `translateY(${calculateParallax(0.05)}px)` }}
          >
            {[
              { id: 1, title: 'Botanical Design', desc: 'Fine line floral tattoo' },
              { id: 2, title: 'Geometric Pattern', desc: 'Precise line work' },
              { id: 3, title: 'Nature Inspired', desc: 'Detailed mushroom illustration' },
              { id: 4, title: 'Medical Aesthetic', desc: 'Vintage anatomical design' }
            ].map((item) => (
              <HoverRevealImage
                key={item.id}
                src={`/images/tattoo-${item.id}.jpg`}
                alt={`Tattoo design - ${item.title}`}
                title={item.title}
                description={item.desc}
                linkText="View more"
                linkUrl="/gallery"
                effectStyle={item.id % 2 === 0 ? 'slide' : 'shine'}
                className="rounded overflow-hidden shadow-xl card-hover"
              />
            ))}
          </div>
        </section>

        <section className="mb-20 text-center section-dark overflow-hidden card-hover">
          <div>
            <AnimatedText
              text="Book an Appointment"
              tag="h2"
              animation="wave"
              speed="medium"
              className="text-3xl font-gothic font-bold mb-6 text-primary"
            />
            
            <p className="max-w-2xl mx-auto mb-8 animate-fade-in">
              Ready to bring your vision to life? Contact me to discuss your ideas and schedule a consultation.
            </p>
            
            <div className="relative inline-block">
              <Link 
                href="/booking" 
                className="btn btn-outline inline-block font-gothic font-bold animate-shimmer link-card"
              >
                Book Now
              </Link>
              <div className="absolute -z-10 -inset-[3px] rounded-full bg-accent/20 blur-md"></div>
            </div>
          </div>
        </section>
        
        <ScrollingBanner 
          text="BOOK YOUR APPOINTMENT TODAY • FOLLOW ON INSTAGRAM • CUSTOM TATTOO DESIGNS • BOTANICAL • GEOMETRIC • FINE LINE"
          className="py-8 text-2xl font-gothic text-accent opacity-80"
          speed={35}
          repeat={2}
          direction="right"
        />
      </div>
    </main>
  )
}
