'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PackageCards() {
  const packages = [
    {
      emoji: '🛕',
      name: 'Short Varanasi Visit',
      duration: '1–2 Nights',
      description: 'For those with limited time',
      highlights: ['Ganga Aarti viewing', 'Dawn or evening boat ride', 'Old city walk', '1–2 temple visits'],
    },
    {
      emoji: '🛗️',
      name: 'Immersive Kashi',
      duration: '3–4 Nights',
      description: 'Enough time to go deeper',
      highlights: ['Ganga Aarti (multiple evenings)', 'Boat rides at different times of day', 'Kashi Vishwanath Temple visit', 'Food walk in old city lanes', 'Sarnath half-day trip', 'Silk weaving area visit'],
    },
    {
      emoji: '👑',
      name: 'Extended Varanasi',
      duration: '5–7 Nights',
      description: 'For those who want to take it slow',
      highlights: ['Everything in Immersive Kashi', 'Classical music evening', 'Cooking class (Banarasi food)', 'Yoga or meditation session', 'Photography-focused ghat walk', 'Day trip options: Sarnath, Chunar Fort, Vindhyachal'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="bg-gradient-to-b from-[#1A1510] to-[#0D0B08] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#D97706] font-bold mb-3 md:mb-4">HOW WE STRUCTURE TRIPS</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="gold-shimmer">Trip Formats We Typically Arrange</span>
          </h2>
          <p className="text-[#C4BDB0] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            These are rough trip formats. Every trip is customised to your dates, group, and what matters to you. Nothing is fixed — this is just to give you an idea.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              className="relative group"
              variants={itemVariants}
            >
              {/* Card */}
              <div className="glass-card p-8 h-full hover:bg-[rgba(248,230,209,0.45)] transition overflow-hidden">
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Emoji */}
                  <div className="text-4xl md:text-6xl mb-4 group-hover:scale-110 transition">{pkg.emoji}</div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-3xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-[#D97706] font-semibold text-sm md:text-base mb-1">{pkg.duration}</p>
                  <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-4 md:mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-6 py-4 border-t border-b border-[var(--border)]">
                    {/* No price shown */}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 md:space-y-2 mb-6 md:mb-8">
                    {pkg.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs md:text-sm text-[#C4BDB0]">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#D97706]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#lead-form"
                    className="w-full block text-center bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] font-bold py-3 rounded-lg hover:scale-[1.02] transition"
                  >
                    Tell Us Your Dates →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C4BDB0] mb-6">All packages fully customizable</p>
          <Link
            href="/contact"
            className="inline-block text-[#FBBF24] border border-[#FBBF24] px-6 py-2 rounded-lg hover:bg-[#FBBF24] hover:text-[#0D0B08] transition"
          >
            Tell Us Your Dream →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}