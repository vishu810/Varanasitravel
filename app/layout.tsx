import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import CookieConsentBanner from '@/components/shared/CookieConsentBanner'
import StickyWhatsAppButton from '@/components/shared/StickyWhatsAppButton'

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
    default: 'Varunaassi — Plan Your Varanasi Trip',
    template: '%s | Varunaassi',
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
      <head>
        {/* GTM HEAD SNIPPET */}
      </head>
      <body className="bg-[var(--bg-page)] text-[var(--text-primary)] antialiased" suppressHydrationWarning>
        {/* GTM BODY SNIPPET */}
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
        <StickyWhatsAppButton />
        <CookieConsentBanner />
      </body>
    </html>
  )
}