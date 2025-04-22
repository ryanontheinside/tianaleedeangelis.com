import Image from 'next/image'
import SocialLinks from '@/components/SocialLinks'

export default function About() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-gothic font-bold mb-8 text-center">About Tiana</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square rounded overflow-hidden border-2 border-accent">
            <Image 
              src="/images/tiana-profile-2.jpg" 
              alt="Tiana Lee DeAngelis" 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="section-dark">
            <h2 className="text-3xl font-gothic mb-4 text-primary">My Story</h2>
            <div className="space-y-4">
              <p>
                I'm Tiana Lee DeAngelis, but you can call me Tina! I'm a tattoo artist based in Boston, specializing in fine line work inspired by antique medical texts, nature, and geometric designs. My journey in tattooing began with a lifelong passion for art and drawing, which evolved into a professional career after completing a formal apprenticeship.
              </p>
              <p>
                Before focusing on tattooing, I honed my skills across multiple mediums including watercolor, oil, acrylic, pencils, gouache, pastels, sculpting, and miniatures. This diverse artistic background gives me a unique perspective and versatility in my approach to tattoo design.
              </p>
              <p>
                Working at Holistic Ink has allowed me to focus on creating deeply personal, meaningful art for my clients. I believe that tattoos are more than just decoration – they're powerful symbols and expressions of identity.
              </p>
              <p>
                My style draws inspiration from vintage scientific illustrations, botanical studies, and the intricate details found in nature. I'm particularly drawn to insects, mushrooms, animal anatomy, and geometric patterns, which I render with precise, delicate lines to create elegant, timeless pieces.
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
            <div className="section-dark text-center">
              <div className="text-accent text-4xl mb-4">✦</div>
              <h3 className="font-gothic text-xl mb-3">Precision</h3>
              <p>Fine line work requires exceptional attention to detail and steady hands for clean, precise results.</p>
            </div>
            
            <div className="section-dark text-center">
              <div className="text-accent text-4xl mb-4">✦</div>
              <h3 className="font-gothic text-xl mb-3">Research</h3>
              <p>I study antique illustrations, natural specimens, and scientific texts to create authentic, detailed designs.</p>
            </div>
            
            <div className="section-dark text-center">
              <div className="text-accent text-4xl mb-4">✦</div>
              <h3 className="font-gothic text-xl mb-3">Collaboration</h3>
              <p>I work closely with clients to create personalized designs that reflect their interests and aesthetic vision.</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="section-dark">
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
                <span>Fine Arts background with proficiency in multiple mediums including watercolor, oil, acrylic, pencils, gouache, pastels, and sculpture</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
} 