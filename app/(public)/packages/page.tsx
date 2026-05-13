'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Packages() {
  const packages = [
    {
      tier: 'Kashi Darshan',
      duration: '2 Nights / 3 Days',
      price: '₹6,999',
      description: 'Perfect for first-timers',
      color: 'from-[#D97706]/20 to-[#D97706]/5',
      includes: [
        '🛕 Ganga Aarti ceremony (2 times)',
        '🚣 Sacred boat ride at sunrise',
        '🍜 Street food walk',
        '🏨 3-star hotel stay',
        '🧭 Expert guide',
        '📱 24/7 WhatsApp support',
      ],
      highlight: false,
    },
    {
      tier: 'Benaras Soul',
      duration: '4 Nights / 5 Days',
      price: '₹14,999',
      description: 'Deep dive into Varanasi',
      color: 'from-[#FBBF24]/20 to-[#FBBF24]/5',
      includes: [
        '🛕 Daily Ganga Aarti + morning rituals',
        '🚣 Extended boat explorations',
        '🍜 Culinary heritage tour',
        '🧘 Yoga & meditation session',
        '🏺 Silk weaving workshop',
        '🏨 4-star hotel',
        '📸 Professional photography session',
        '🎁 Local artisan gifts',
      ],
      highlight: true,
    },
    {
      tier: 'Sacred & Luxe',
      duration: '3 Nights / 4 Days',
      price: '₹24,999',
      description: 'Premium spiritual experience',
      color: 'from-[#D97706]/20 to-[#D97706]/5',
      includes: [
        '🛕 Private Ganga Aarti experience',
        '🚣 Private boat with naturalist guide',
        '🍽️ Michelin-trained chef meals',
        '🧘 Private yoga sessions',
        '🏺 VIP artisan studio access',
        '5⭐ Luxury heritage hotel',
        '📸 Personal photographer',
        '🎁 Bespoke souvenir collection',
        '✈️ Airport transfers included',
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
            <span className="gold-shimmer">Curated Packages</span>
          </motion.h1>
          <motion.p
            className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            From spiritual seekers to luxury travelers — a package for every soul.
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
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${pkg.color}`} />

                <h3 className="font-display text-3xl font-bold mb-2">{pkg.tier}</h3>
                <p className="text-[#D97706] font-semibold mb-2">{pkg.duration}</p>
                <p className="text-sm text-[var(--text-secondary)] mb-6">{pkg.description}</p>

                <div className="mb-8 py-6 border-y border-[rgba(201,163,125,0.4)]">
                  <div className="font-display text-4xl font-bold text-[#FBBF24]">{pkg.price}</div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">per person</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                      <span className="flex-shrink-0">{item.substring(0, 1)}</span>
                      <span>{item.substring(1)}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#lead-form"
                  className="w-full block text-center bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] font-bold py-3 rounded-lg hover:scale-[1.02] transition"
                >
                  Customize This Package
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Why Our Packages?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Personalized', desc: 'Modify any package to match your needs' },
              { icon: '💰', title: 'Best Value', desc: 'More inclusions, better rates than competitors' },
              { icon: '🤝', title: 'Local Impact', desc: '30% commission goes to local guides' },
              { icon: '✨', title: 'Flexible', desc: 'Adjust dates, duration, or activities anytime' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-display text-4xl font-bold mb-4">Didn't Find Your Perfect Package?</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">We customize everything. Tell us your dream, budget, and timeline.</p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-8 py-3 rounded-lg font-bold text-[#0D0B08] hover:scale-105 transition"
            >
              Reach Out to Plan Together →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}