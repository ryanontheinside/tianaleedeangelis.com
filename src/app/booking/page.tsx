'use client'

import { useState } from 'react'
import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tattooDescription: '',
    placement: '',
    size: '',
    references: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // This would typically send data to an API/backend
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      tattooDescription: '',
      placement: '',
      size: '',
      references: '',
      message: ''
    })
  }

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-gothic font-bold mb-8 text-center">Booking</h1>
      
      <div className="max-w-3xl mx-auto mb-16">
        <div className="section-dark mb-12">
          <h2 className="text-2xl font-gothic mb-4 text-primary">Booking Process</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Fill out the inquiry form below with your tattoo idea</li>
            <li>I'll review your request and contact you (usually within 48 hours)</li>
            <li>We'll schedule a consultation to discuss your design in detail</li>
            <li>A deposit will be required to secure your appointment</li>
            <li>Your tattoo session will be scheduled based on the complexity of the design</li>
          </ol>
        </div>
        
        <div className="section-dark mb-12">
          <h2 className="text-2xl font-gothic mb-4 text-primary">Pricing</h2>
          <p className="mb-2">Pricing varies based on size, complexity, and placement:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Consultation: Free</li>
            <li>Minimum charge: $150</li>
            <li>Hourly rate: $180-250 depending on complexity</li>
            <li>Custom design fee: $75-200 (applied toward tattoo)</li>
          </ul>
          <p className="mt-4 text-sm italic">A deposit (typically $100) is required to secure your appointment and is non-refundable but transferable with 48+ hours notice.</p>
        </div>
        
        {submitted ? (
          <div className="section-dark bg-primary/10 p-8 rounded text-center">
            <h2 className="text-2xl font-gothic mb-4 text-accent">Thank You!</h2>
            <p className="mb-6">Your booking inquiry has been received. I'll contact you soon to discuss your tattoo idea.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn btn-accent font-gothic"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="section-dark space-y-6">
            <h2 className="text-2xl font-gothic mb-4 text-primary">Booking Inquiry</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-1 font-gothic">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-secondary/10 border border-secondary/20 rounded focus:outline-none focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-gothic">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-secondary/10 border border-secondary/20 rounded focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-1 font-gothic">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 bg-secondary/10 border border-secondary/20 rounded focus:outline-none focus:border-primary"
              />
            </div>
            
            <div>
              <label htmlFor="tattooDescription" className="block mb-1 font-gothic">Tattoo Description *</label>
              <textarea
                id="tattooDescription"
                name="tattooDescription"
                required
                rows={4}
                value={formData.tattooDescription}
                onChange={handleChange}
                className="w-full p-2 bg-secondary/10 border border-secondary/20 rounded focus:outline-none focus:border-primary"
                placeholder="Describe your tattoo idea in detail"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="placement" className="block mb-1 font-gothic">Placement *</label>
                <input
                  type="text"
                  id="placement"
                  name="placement"
                  required
                  value={formData.placement}
                  onChange={handleChange}
                  className="w-full p-2 bg-secondary/10 border border-secondary/20 rounded focus:outline-none focus:border-primary"
                  placeholder="Arm, leg, back, etc."
                />
              </div>
              
              <div>
                <label htmlFor="size" className="block mb-1 font-gothic">Approximate Size *</label>
                <select
                  id="size"
                  name="size"
                  required
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full p-2 bg-secondary/10 border border-secondary/20 rounded focus:outline-none focus:border-primary"
                >
                  <option value="">Select size</option>
                  <option value="Small (2-3 inches)">Small (2-3 inches)</option>
                  <option value="Medium (3-5 inches)">Medium (3-5 inches)</option>
                  <option value="Large (5-8 inches)">Large (5-8 inches)</option>
                  <option value="Extra Large (8+ inches)">Extra Large (8+ inches)</option>
                  <option value="Full sleeve/leg/back">Full sleeve/leg/back</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="references" className="block mb-1 font-gothic">References (URLs)</label>
              <input
                type="text"
                id="references"
                name="references"
                value={formData.references}
                onChange={handleChange}
                className="w-full p-2 bg-secondary/10 border border-secondary/20 rounded focus:outline-none focus:border-primary"
                placeholder="Links to reference images or Pinterest boards"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 font-gothic">Additional Information</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-secondary/10 border border-secondary/20 rounded focus:outline-none focus:border-primary"
                placeholder="Any additional details, concerns, or questions"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary font-gothic w-full md:w-auto ${isSubmitting ? 'opacity-70' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </div>
      
      <div className="text-center max-w-2xl mx-auto section-dark">
        <h2 className="text-2xl font-gothic mb-4 text-primary">Direct Contact</h2>
        <p className="mb-6">
          Prefer to reach out directly? Contact me through any of these channels:
        </p>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </main>
  )
} 