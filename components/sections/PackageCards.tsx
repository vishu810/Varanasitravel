'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PackageCards() {
  const packages = [
    {
      emoji: '🛕',
      name: 'Kashi Darshan',
      duration: '2 Nights',
      price: '₹6,999',
      description: 'Perfect for first-timers',
      highlights: ['Ganga Aarti (2×)', 'Boat ride', 'Food walk', 'Expert guide'],
      badge: null,
    },
    {
      emoji: '🕯️',
      name: 'Benaras Soul',
      duration: '4 Nights',
      price: '₹14,999',
      description: 'Deep spiritual immersion',
      highlights: ['All from Kashi', 'Yoga session', 'Silk workshop', 'Photography'],
      badge: 'MOST POPULAR',
    },
    {
      emoji: '👑',
      name: 'Sacred & Luxe',
      duration: '3 Nights',
      price: '₹24,999',
      description: 'Premium experience',
      highlights: ['Private experiences', 'Luxury hotel', 'Personal guide', '5⭐ meals'],
      badge: null,
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shimmer">Packages for Every Seeker</span>
          </h2>
          <p className="text-[#C4BDB0] text-lg">
            From spiritual seekers to luxury travelers — find your perfect journey
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              className={`relative group ${
                pkg.badge ? 'md:scale-105 md:-translate-y-8' : ''
              }`}
              variants={itemVariants}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                  <span className="bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] px-4 py-1 rounded-full text-xs font-bold">
                    ⭐ {pkg.badge}
                  </span>
                </div>
              )}

              {/* Card */}
              <div className={`glass-card p-8 h-full hover:bg-[rgba(248,230,209,0.45)] transition overflow-hidden ${
                pkg.badge ? 'ring-2 ring-[#D97706]' : ''
              }`}>
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Emoji */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition">{pkg.emoji}</div>

                  {/* Title */}
                  <h3 className="font-display text-3xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-[#D97706] font-semibold mb-1">{pkg.duration}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-6 py-4 border-t border-b border-[var(--border)]">
                    <div className="font-display text-4xl font-bold text-[#FBBF24] mb-1">
                      {pkg.price}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">per person</p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8">
                    {pkg.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#C4BDB0]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/packages"
                    className="w-full block text-center bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] font-bold py-3 rounded-lg hover:scale-[1.02] transition"
                  >
                    Explore Package →
                  </Link>
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