'use client'
import { motion } from 'framer-motion'

export default function TrustBadgeBar() {
  const badges = [
    { icon: '⭐', text: '4.9 / 5 Rating' },
    { icon: '🛕', text: '500+ Varanasi Trips' },
    { icon: '🌅', text: '30+ Local Experiences' },
    { icon: '📞', text: '2-Hour Expert Callback' },
    { icon: '🔒', text: '100% Free to Plan' },
  ]

  return (
    <div className="glass-card rounded-none py-6 md:py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 text-sm md:text-base font-semibold text-[var(--text-secondary)] hover:text-[#D97706] transition"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-xl">{badge.icon}</span>
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}