import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-black/90 backdrop-blur-sm border-b border-primary z-50">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-gothic font-bold text-accent">
          Tiana Lee
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="font-gothic text-foreground hover:text-accent">Home</Link>
          <Link href="/gallery" className="font-gothic text-foreground hover:text-accent">Gallery</Link>
          <Link href="/booking" className="font-gothic text-foreground hover:text-accent">Booking</Link>
          <Link href="/about" className="font-gothic text-foreground hover:text-accent">About</Link>
        </div>
      </nav>
    </header>
  )
} 