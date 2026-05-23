'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-20 md:py-0 md:min-h-screen">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80"
          alt="Ganga Aarti"
          className="h-full w-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#402813]/70 via-[#7A5A40]/40 to-[#F8E6D1]/20" />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(217,119,6,0.08)] via-transparent to-[rgba(217,119,6,0.08)] animate-pulse-glow" />
      </div>

      <div className="w-full px-4 py-10 md:py-0 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-block rounded-full border border-[#D97706]/40 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#FBBF24] backdrop-blur-sm mb-6"
        >
          🕯 Varanasi — The Oldest Living City on Earth
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-white mb-4 md:mb-6"
        >
          Experience
          <br />
          <motion.span
            className="gold-shimmer inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Varanasi
          </motion.span>
          <br />
          As It Truly Is
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-[#C4BDB0] max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2"
        >
          We plan personalised trips to Varanasi — connecting you with the ghats, the rituals, the food, and the stories that most visitors never find. Tell us what you are looking for. We will take care of the rest.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-2"
        >
          <button
            onClick={scrollToForm}
            className="rounded-lg bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-[#0D0B08] transition hover:scale-105 hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] shadow-lg whitespace-nowrap"
          >
            Start Planning My Trip →
          </button>
          <button className="rounded-lg border border-[var(--border)] bg-[rgba(248,230,209,0.85)] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-[var(--text-primary)] backdrop-blur-sm transition hover:bg-[rgba(248,230,209,0.95)] hover:border-[var(--accent-saffron)] whitespace-nowrap">
            See What We Cover
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-8 md:mt-12 flex flex-col items-center gap-2 absolute bottom-4 md:bottom-8 left-0 right-0"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xs text-[#7A5A40]">Scroll to discover</p>
          <svg className="w-5 h-5 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}