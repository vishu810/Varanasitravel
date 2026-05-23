'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Packages() {
  const packages = [
    {
      tier: 'Short Varanasi Visit',
      duration: '1 to 2 Nights',
      description: 'Good for people with limited time',
      color: 'from-[#D97706]/20 to-[#D97706]/5',
      includes: [
        'Ganga Aarti at Dashashwamedh Ghat',
        'Morning or evening boat ride on the Ganga',
        'Walk through the old city lanes',
        'One or two temple visits',
        'Hotel stay arranged based on your preferences',
      ],
      highlight: false,
    },
    {
      tier: 'Immersive Kashi',
      duration: '3 to 4 Nights',
      description: 'Enough time to go beyond the obvious',
      color: 'from-[#FBBF24]/20 to-[#FBBF24]/5',
      includes: [
        'Ganga Aarti viewing (multiple evenings)',
        'Boat rides at different times of day',
        'Kashi Vishwanath Temple visit',
        'Food walk through old city lanes',
        'Silk weaving workshop visit (Madanpura area)',
        'Sarnath half-day trip — where Buddha gave his first sermon',
        'Hotel stay arranged based on your preference',
      ],
      highlight: true,
    },
    {
      tier: 'Extended Varanasi',
      duration: '5 to 7 Nights',
      description: 'For those who want to take their time',
      color: 'from-[#D97706]/20 to-[#D97706]/5',
      includes: [
        'Everything in Immersive Kashi above',
        'Yoga or meditation session at the ghats',
        'Classical music evening (Sankat Mochan or local venue)',
        'Cooking class — Banarasi food',
        'Photography-focused ghat walk',
        'Day trip options: Chunar Fort, Vindhyachal, or Ramnagar Fort',
      ],
      highlight: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80" alt="Varanasi" className="h-full w-full object-cover brightness-[0.3]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-page)]/90 to-[var(--bg-page)]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="font-display text-6xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gold-shimmer">Trip Formats We Arrange</span>
          </motion.h1>
          <motion.p
            className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            These are rough outlines of how we typically structure trips to Varanasi. Nothing here is fixed — every trip is adjusted based on your dates, group, and what matters to you.
          </motion.p>
        </div>
      </section>
      {/* Packages Grid */}
      <section className="py-20 bg-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                className={`glass-card p-8 relative overflow-hidden group hover:scale-[1.03] transition ${
                  pkg.highlight ? 'md:scale-105 ring-2 ring-[#D97706]' : ''
                }`}
                variants={itemVariants}
              >
                {/* highlight badge removed per content rules */}

                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${pkg.color}`} />

                <h3 className="font-display text-3xl font-bold mb-2">{pkg.tier}</h3>
                <p className="text-[#D97706] font-semibold mb-2">{pkg.duration}</p>
                <p className="text-sm text-[var(--text-secondary)] mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8 text-sm text-[var(--text-secondary)]">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">• <span>{item}</span></li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full block text-center bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] font-bold py-3 rounded-lg hover:scale-[1.02] transition"
                >
                  Ask About This →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      

      {/* Simple note about packages */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
            All trips are custom. These outlines exist to give you a starting point — not a fixed menu.
          </p>
          <p className="max-w-2xl mx-auto text-[var(--text-secondary)] mt-3">
            Tell us what you are looking for and we will work from there.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass-card p-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4">None of these feel right?</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">That is fine. Tell us what you have in mind — we plan from scratch.</p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-8 py-3 rounded-lg font-bold text-[#0D0B08] hover:scale-105 transition"
            >
              Get In Touch →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}