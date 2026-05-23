'use client'
import { motion } from 'framer-motion'

export default function TrustBadgeBar() {
  const badges = [
    { icon: '🛕', text: 'Local Varanasi Experts', subtitle: 'We live and work here' },
    { icon: '🌅', text: 'Ghats, Temples & Beyond', subtitle: 'All key Varanasi experiences' },
    { icon: '💬', text: 'WhatsApp-First Planning', subtitle: 'We respond personally' },
    { icon: '🔒', text: 'No Booking, No Payment', subtitle: 'Just a free expert call' },
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
              className="flex flex-col items-center gap-1 text-center text-xs md:text-sm font-semibold text-[var(--text-secondary)] hover:text-[#D97706] transition"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">{badge.icon}</span>
              <span>{badge.text}</span>
              <span className="text-[10px] text-[#8C7F6E]">{badge.subtitle}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}