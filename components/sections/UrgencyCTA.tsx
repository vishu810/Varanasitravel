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
            className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-[#D97706]/30 bg-[#D97706]/5 mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs md:text-sm font-semibold text-[#FBBF24]">GET IN TOUCH</p>
          </motion.div>

          {/* Main Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="gold-shimmer">Planning a Trip to Varanasi?</span>
          </h2>

          {/* Subheading */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#C4BDB0] mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tell us what you have in mind. We will put together a trip outline and call you on WhatsApp to go over it. No booking required. No payment upfront.
          </motion.p>

          {/* Feature List */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'We Know Varanasi Well' },
              { label: 'Personal WhatsApp Call' },
              { label: 'No Booking Pressure' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center text-[#C4BDB0]">
                <span className="font-semibold text-xs sm:text-sm md:text-base">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-sm md:text-lg hover:scale-105 transition inline-block shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: '0 0 40px rgba(217,119,6,0.6)' }}
          >
            Start Planning →
          </motion.button>

          {/* Trust Badge */}
          <motion.p
            className="text-xs md:text-sm text-[#8C7F6E] mt-4 md:mt-6 px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            No payment. No agency fee. Just a conversation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}