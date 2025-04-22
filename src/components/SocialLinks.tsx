export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-4 flex-wrap ${className}`}>
      <a href="https://instagram.com/tianaleeartistry" 
         className="btn btn-outline transition-colors duration-300 link-card"
         target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <a href="https://www.holisticink.com/holisticink-artists/tiana-lee/" 
         className="btn btn-outline transition-colors duration-300 link-card"
         target="_blank" rel="noopener noreferrer">
        Holistic Ink
      </a>
      <a href="mailto:booking@tianaleedeangelis.com" 
         className="btn btn-outline transition-colors duration-300 link-card"
         target="_blank" rel="noopener noreferrer">
        Email
      </a>
    </div>
  )
} 