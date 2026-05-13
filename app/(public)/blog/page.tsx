'use client'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display text-5xl font-bold mb-6">Blog Section Offline</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
          The blog section is currently retired while we focus on planning and booking your Varanasi journey.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-[var(--accent-saffron)] px-8 py-3 font-semibold text-[#0D0B08] shadow-[var(--shadow)] transition hover:scale-105"
        >
          Contact Us for a Custom Plan
        </Link>
      </div>
    </div>
  )
}
