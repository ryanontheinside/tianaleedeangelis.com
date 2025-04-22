import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-gothic text-primary mb-6">404</h1>
      <h2 className="text-3xl font-gothic mb-4">Page Not Found</h2>
      <p className="max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-primary text-white font-gothic rounded hover:bg-opacity-90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
} 