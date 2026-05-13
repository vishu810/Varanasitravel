'use client'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Suspense } from 'react'

function ThankYouContent() {
  const name = useSearchParams().get('name') || 'there'

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-[var(--bg-page)]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gold-500"
      >
        <svg className="h-12 w-12 text-night-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <h1 className="font-display text-4xl font-bold md:text-5xl">Namaste, {name}! 🙏</h1>
      <p className="mt-4 max-w-md text-text-secondary">
        A Varanasi travel expert will call you on WhatsApp within <span className="text-gold-500">2 hours</span> with a personalised plan.
      </p>
      <Link href="/experiences" className="mt-8 inline-block rounded-lg border border-[var(--border)] px-6 py-2 text-[var(--text-secondary)] transition hover:bg-[rgba(248,230,209,0.45)]">
        Explore Experiences While You Wait →
      </Link>
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