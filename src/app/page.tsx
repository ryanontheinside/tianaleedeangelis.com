'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <main className="container mx-auto px-6 py-16">
      <section 
        className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} mb-20 flex flex-col items-center text-center`}
      >
        <div className="mb-8 relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent">
          <Image 
            src="/images/tiana-profile.jpg" 
            alt="Tiana Lee DeAngelis" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-6xl font-gothic font-bold mb-4">
          Tiana Lee DeAngelis
        </h1>
        <h2 className="text-2xl text-accent mb-6">Tattoo Artist</h2>
        <p className="text-xl max-w-2xl mb-6">
          Professional tattoo artist based at Holistic Ink in Boston, specializing in fine line work inspired by antique medical texts, nature, and geometric designs.
        </p>
        <SocialLinks />
      </section>

      <section className="mb-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-gothic font-bold mb-6 text-primary">The Art</h2>
          <p className="mb-4">
            Each tattoo is a unique piece of art created to reflect your vision and story. I specialize in fine line work featuring botanical elements, insects, mushrooms, skulls, and geometric patterns inspired by antique medical illustrations.
          </p>
          <p className="mb-6">
            My approach blends technical precision with artistic sensitivity, ensuring every piece is both beautiful and meaningful.
          </p>
          <Link 
            href="/gallery" 
            className="inline-block px-6 py-3 bg-primary text-white font-gothic rounded hover:bg-opacity-90 transition-colors"
          >
            View Gallery
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square relative rounded overflow-hidden">
            <Image 
              src="/images/tattoo-1.jpg" 
              alt="Tattoo design sample" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="aspect-square relative rounded overflow-hidden">
            <Image 
              src="/images/tattoo-2.jpg" 
              alt="Tattoo design sample" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="aspect-square relative rounded overflow-hidden">
            <Image 
              src="/images/tattoo-3.jpg" 
              alt="Tattoo design sample" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="aspect-square relative rounded overflow-hidden">
            <Image 
              src="/images/tattoo-4.jpg" 
              alt="Tattoo design sample" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-3xl font-gothic font-bold mb-6 text-primary">Book an Appointment</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Ready to bring your vision to life? Contact me to discuss your ideas and schedule a consultation.
        </p>
        <Link 
          href="/booking" 
          className="inline-block px-8 py-4 bg-accent text-black font-gothic font-bold rounded hover:bg-opacity-90 transition-colors"
        >
          Book Now
        </Link>
      </section>
    </main>
  )
}
