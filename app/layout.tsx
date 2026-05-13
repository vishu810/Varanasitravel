import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import MobileStickyBar from '@/components/layout/MobileStickyBar'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // removed 900
  variable: '--font-cormorant',
})
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Kashi Journeys — Plan Your Sacred Varanasi Trip',
    template: '%s | Kashi Journeys',
  },
  description: 'Experience the real Varanasi. Personalised itineraries for spiritual journeys, ghat walks, Ganga Aarti & hidden experiences. Free trip planning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${inter.variable}`}>
      <body className="bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </body>
    </html>
  )
}