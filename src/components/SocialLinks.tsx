export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-4 flex-wrap ${className}`}>
      <a href="https://instagram.com/tianaleeartistry" 
         className="text-sm px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90"
         target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <a href="https://www.holisticink.com/holisticink-artists/tiana-lee/" 
         className="text-sm px-4 py-2 bg-primary text-white rounded-full hover:opacity-90"
         target="_blank" rel="noopener noreferrer">
        Holistic Ink
      </a>
      <a href="mailto:booking@tianaleedeangelis.com" 
         className="text-sm px-4 py-2 bg-secondary text-white rounded-full hover:opacity-90"
         target="_blank" rel="noopener noreferrer">
        Email
      </a>
    </div>
  )
} 