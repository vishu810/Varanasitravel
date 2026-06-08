'use client'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Suspense } from 'react'

function ThankYouContent() {
  const name = useSearchParams().get('name') || 'there'
  const whatsappNumber = '+91 93199 74438'
  const whatsappLink = 'https://wa.me/9319974438'

  const expectations = [
    "We'll ask about your travel dates and group size",
    "We'll suggest the best experiences for your trip",
    "No payment or booking needed on the call"
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-page)] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#D97706] mb-4">
            We've Got Your Request! ✓
          </h1>
          <p className="text-lg text-[#C4BDB0] leading-relaxed">
            We will call you on WhatsApp within a few hours. Keep your phone nearby.
          </p>
        </motion.div>

        {/* WhatsApp Icon and Number */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#25D366] shadow-lg">
              <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.393-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.915 1.515c-1.428.823-2.566 1.988-2.982 3.357-.418 1.37-.313 2.832.287 4.129.898 1.934 2.594 3.406 4.666 4.079.829.276 1.64.423 2.43.431a9.91 9.91 0 004.867-1.261c1.325-.783 2.42-1.902 3.048-3.237.629-1.334.808-2.837.422-4.33-.734-2.943-3.277-5.149-6.36-5.526-.895-.12-1.814-.047-2.663.181z"/>
              </svg>
            </div>
            <p className="text-2xl font-bold text-[#D97706] mb-6">{whatsappNumber}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Chat with Us Now on WhatsApp →
            </a>
          </div>
        </motion.div>

        {/* What to Expect Section */}
        <motion.div
          className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-[#C4BDB0] text-sm font-semibold mb-6">
            While you wait, here's what to expect on the call...
          </p>
          <ul className="space-y-4">
            {expectations.map((expectation, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-[#C4BDB0]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="mt-1 text-lg">✓</span>
                <span>{expectation}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Explore While You Wait */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-[#8C7F6E] text-sm mb-4">Or explore while you wait:</p>
          <Link
            href="/experiences"
            className="inline-block rounded-lg border border-[#D97706] px-6 py-3 text-[#D97706] font-semibold transition hover:bg-[rgba(217,119,6,0.1)]"
          >
            Explore Experiences →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}