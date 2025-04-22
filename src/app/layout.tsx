import type { Metadata } from 'next'
import { Cinzel_Decorative, EB_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import AIContext from '@/components/AIContext'

const gothic = Cinzel_Decorative({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-gothic'
})

const sans = EB_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Tiana Lee DeAngelis - Tattoo Artist',
  description: 'Portfolio and booking information for Tiana Lee DeAngelis, professional tattoo artist at Holistic Ink specializing in fine line work inspired by antique medical texts and nature',
  keywords: ['tattoo', 'tattoo artist', 'Tiana Lee DeAngelis', 'Holistic Ink', 'fine line tattoo', 'botanical tattoo', 'insects', 'mushrooms', 'Boston tattoo'],
  authors: [{ name: 'Tiana Lee DeAngelis' }],
  openGraph: {
    title: 'Tiana Lee DeAngelis - Tattoo Artist',
    description: 'Professional tattoo artist at Holistic Ink specializing in fine line designs inspired by nature, antique medical illustrations, and geometric patterns',
    url: 'https://tianaleedeangelis.com',
    siteName: 'Tiana Lee DeAngelis',
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'add-your-verification-code-here',
    'last-modified': new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiana Lee DeAngelis - Tattoo Artist',
    description: 'Professional tattoo artist at Holistic Ink specializing in fine line designs inspired by nature, antique medical illustrations, and geometric patterns',
    creator: '@tianaleedeangelis',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Get this from Google Search Console: https://search.google.com/search-console
    // Add your site, choose 'HTML tag' verification, and copy the content value
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'add-your-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gothic.variable} ${sans.variable} font-sans min-h-screen`}>
        <JsonLd />
        <AIContext />
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
