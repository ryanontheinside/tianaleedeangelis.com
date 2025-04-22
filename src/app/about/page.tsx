import Image from 'next/image'
import SocialLinks from '@/components/SocialLinks'

export default function About() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-gothic font-bold mb-8 text-center">About Tiana</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square rounded overflow-hidden">
            <Image 
              src="/images/tiana-profile-2.jpg" 
              alt="Tiana Lee DeAngelis" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-gothic mb-4 text-primary">My Story</h2>
            <div className="space-y-4">
              <p>
                I'm Tiana Lee DeAngelis, a tattoo artist based in Boston, specializing in gothic, fine line, and custom designs. My journey in tattooing began with a lifelong passion for art and drawing, which evolved into a professional career after completing a formal apprenticeship.
              </p>
              <p>
                Working at Holistic Ink has allowed me to focus on creating deeply personal, meaningful art for my clients. I believe that tattoos are more than just decoration – they're powerful symbols and expressions of identity.
              </p>
              <p>
                My style draws inspiration from gothic art, architecture, and symbolism, blended with contemporary fine line techniques. Each piece I create is a collaboration between my artistic vision and my client's personal story.
              </p>
            </div>
            
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>
        
        <section className="mb-16">
          <h2 className="text-3xl font-gothic mb-6 text-center text-primary">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary/5 p-6 rounded text-center">
              <div className="text-accent text-4xl mb-4">✦</div>
              <h3 className="font-gothic text-xl mb-3">Personalization</h3>
              <p>Every tattoo begins with understanding your vision, story, and aesthetic preferences.</p>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded text-center">
              <div className="text-accent text-4xl mb-4">✦</div>
              <h3 className="font-gothic text-xl mb-3">Craftsmanship</h3>
              <p>Meticulous attention to detail and clean, precise techniques for lasting quality.</p>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded text-center">
              <div className="text-accent text-4xl mb-4">✦</div>
              <h3 className="font-gothic text-xl mb-3">Experience</h3>
              <p>Creating a comfortable, respectful environment for a positive tattoo experience.</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-secondary/10 p-8 rounded">
            <h2 className="text-3xl font-gothic mb-6 text-center text-primary">Credentials</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Professional tattoo artist at Holistic Ink, Boston</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Completed formal apprenticeship under master tattoo artists</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Certified in bloodborne pathogens and cross-contamination prevention</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Continued education in advanced tattooing techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Fine Arts background with specialization in illustration and design</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
} 