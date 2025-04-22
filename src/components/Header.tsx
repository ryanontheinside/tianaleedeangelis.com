import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-secondary/90 backdrop-blur-sm border-b border-primary z-50">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-gothic font-bold text-accent">
          Tiana Lee
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="font-gothic text-light hover:text-accent transition-all duration-300 hover:opacity-90">Home</Link>
          <Link href="/gallery" className="font-gothic text-light hover:text-accent transition-all duration-300 hover:opacity-90">Gallery</Link>
          <Link href="/booking" className="font-gothic text-light hover:text-accent transition-all duration-300 hover:opacity-90">Booking</Link>
          <Link href="/about" className="font-gothic text-light hover:text-accent transition-all duration-300 hover:opacity-90">About</Link>
        </div>
      </nav>
    </header>
  )
} 