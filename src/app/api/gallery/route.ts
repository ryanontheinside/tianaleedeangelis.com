import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const tattooCategories = [
  { id: 'all', name: 'All Work' },
  { id: 'fineline', name: 'Fine Line' },
  { id: 'botanical', name: 'Botanical' },
  { id: 'insects', name: 'Insects & Animals' },
  { id: 'geometric', name: 'Geometric' },
  { id: 'skulls', name: 'Skulls' },
]

interface TattooWork {
  id: string
  src: string
  alt: string
  categories: string[]
}

export async function GET() {
  const works: TattooWork[] = []
  
  // Load images from each category directory
  for (const category of tattooCategories) {
    if (category.id === 'all') continue
    
    try {
      const categoryPath = path.join(process.cwd(), 'public', 'images', category.id)
      const files = fs.readdirSync(categoryPath)
      
      files.forEach((file, index) => {
        if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
          const id = `${category.id}-${index}`
          const src = `/images/${category.id}/${file}`
          const alt = file.replace(/\.[^/.]+$/, '').replace(/-/g, ' ')
          
          // Check if this image already exists in works (for images in multiple categories)
          const existingWork = works.find(w => w.src === src)
          if (existingWork) {
            existingWork.categories.push(category.id)
          } else {
            works.push({
              id,
              src,
              alt,
              categories: [category.id]
            })
          }
        }
      })
    } catch (error) {
      console.error(`Error loading images from ${category.id}:`, error)
    }
  }
  
  return NextResponse.json({ works })
} 