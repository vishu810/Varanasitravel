'use client'
import { motion } from 'framer-motion'

export default function UrgencyCTA() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80"
          alt="Varanasi"
          className="h-full w-full object-cover brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B08] via-[#0D0B08]/90 to-[#0D0B08]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Tagline */}
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full border border-[#D97706]/30 bg-[#D97706]/5 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[#FBBF24]">⏳ Limited Slots This Month</p>
          </motion.div>

          {/* Main Heading */}
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gold-shimmer">Varanasi Is Calling</span>
            <br />
            <span className="text-white">Will You Answer?</span>
          </h2>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-[#C4BDB0] mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We take only 15 trip requests per week to ensure every traveler gets our best attention, personalization, and care. Slots fill up 3-4 weeks in advance.
          </motion.p>

          {/* Feature List */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '🎯', label: 'Personalized Itinerary' },
              { icon: '📞', label: 'Expert Callback in 2 Hours' },
              { icon: '🛕', label: 'Local Guides & Experiences' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-[#C4BDB0]">
                <span className="text-3xl">{item.icon}</span>
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition inline-block shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: '0 0 40px rgba(217,119,6,0.6)' }}
          >
            Claim My Free Trip Plan →
          </motion.button>

          {/* Trust Badge */}
          <motion.p
            className="text-sm text-[#8C7F6E] mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            🔒 No credit card needed • 100% Free • No spam
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}