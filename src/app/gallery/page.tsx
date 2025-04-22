'use client'

import { useState } from 'react'
import Image from 'next/image'

// This would normally be fetched from a CMS or database
const tattooCategories = [
  { id: 'all', name: 'All Work' },
  { id: 'gothic', name: 'Gothic' },
  { id: 'fineline', name: 'Fine Line' },
  { id: 'blackwork', name: 'Blackwork' },
  { id: 'floral', name: 'Floral' },
]

// Mock data - would be replaced with actual images
const tattooWorks = [
  { id: 1, src: '/images/tattoo-1.jpg', alt: 'Gothic rose tattoo', categories: ['gothic', 'floral'] },
  { id: 2, src: '/images/tattoo-2.jpg', alt: 'Fine line portrait', categories: ['fineline'] },
  { id: 3, src: '/images/tattoo-3.jpg', alt: 'Blackwork geometric design', categories: ['blackwork'] },
  { id: 4, src: '/images/tattoo-4.jpg', alt: 'Gothic cathedral', categories: ['gothic'] },
  { id: 5, src: '/images/tattoo-5.jpg', alt: 'Fine line botanical', categories: ['fineline', 'floral'] },
  { id: 6, src: '/images/tattoo-6.jpg', alt: 'Blackwork skull', categories: ['blackwork', 'gothic'] },
  { id: 7, src: '/images/tattoo-7.jpg', alt: 'Fine line snake', categories: ['fineline'] },
  { id: 8, src: '/images/tattoo-8.jpg', alt: 'Gothic moth', categories: ['gothic'] },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredWorks = activeCategory === 'all' 
    ? tattooWorks 
    : tattooWorks.filter(work => work.categories.includes(activeCategory))

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-gothic font-bold mb-8 text-center">Gallery</h1>
      
      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {tattooCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-gothic transition-colors
                ${activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-secondary/20 hover:bg-secondary/40 text-foreground'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map(work => (
          <div 
            key={work.id} 
            className="aspect-square relative rounded overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(work.id)}
          >
            <Image 
              src={work.src} 
              alt={work.alt} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-gothic">{work.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl aspect-square">
            <Image 
              src={tattooWorks.find(w => w.id === selectedImage)?.src || ''}
              alt={tattooWorks.find(w => w.id === selectedImage)?.alt || ''}
              fill
              className="object-contain"
            />
          </div>
          <button 
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </main>
  )
} 