'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if consent has already been given
    const hasConsent = localStorage.getItem('cookie-consent')
    if (!hasConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    // Load third-party tracking scripts here if needed
    // e.g., load Google Tag Manager, Meta Pixel, etc.
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
    // Do NOT load third-party tracking scripts
  }

  if (!mounted || !showBanner) return null

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#0D0B08] border border-[#C9A37D] rounded-lg shadow-2xl p-6 md:p-8 backdrop-blur-md">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-[#C4BDB0] text-sm md:text-base leading-relaxed">
                  We use cookies to improve your experience and for advertising. By continuing, you agree to our{' '}
                  <Link
                    href="/privacy-policy"
                    className="text-[#D97706] font-semibold hover:text-[#FBBF24] transition"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
                <div className="flex gap-4 flex-shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-6 py-2 rounded-lg border border-[#D97706] text-[#D97706] font-semibold transition hover:bg-[rgba(217,119,6,0.1)]"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] font-semibold transition hover:shadow-lg"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
