'use client'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      emoji: '📝',
      title: 'Tell Us About Your Trip',
      description: "Fill our short form. Tell us when you are travelling, who is coming, and what kind of trip you want — spiritual, cultural, food-focused, or just to see Varanasi properly for the first time.",
      details: ['Travel month', 'Number of people', 'Interests', 'Any special requests'],
    },
    {
      num: '02',
      emoji: '✨',
      title: 'We Put Together a Plan',
      description: "Based on what you tell us, we put together a trip outline — which experiences, in what order, at what time of day, and why. We know what works and what does not.",
      details: ['Outline of days', 'Suggested timings', 'Activity notes'],
    },
    {
      num: '03',
      emoji: '🤝',
      title: 'You Review and We Adjust',
      description: 'We call you directly on WhatsApp. You can ask anything, change anything, and we will refine the plan together.',
      details: ['Live discussion', 'Adjustments made', 'Clarify logistics'],
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
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="gold-shimmer">Three Simple Steps</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg">
            From dream to reality — we make it effortless
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              variants={itemVariants}
            >
              {/* Connecting Line */}
              {i < steps.length - 1 && (
                <div className="absolute top-20 left-[60%] w-[40%] h-1 bg-gradient-to-r from-[#D97706] to-transparent hidden md:block" />
              )}

              {/* Card */}
              <div className="glass-card p-8 h-full hover:bg-[rgba(248,230,209,0.45)] transition relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 md:-top-6 left-4 md:left-6 w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-[#D97706] to-[#FBBF24] rounded-full flex items-center justify-center font-display font-bold text-[#0D0B08] text-sm md:text-lg shadow-lg">
                  {step.num}
                </div>

                {/* Emoji */}
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 mt-2">{step.emoji}</div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-4 md:mb-6 leading-relaxed text-xs md:text-sm">{step.description}</p>

                {/* Details Tags */}
                <div className="space-y-1.5 md:space-y-2">
                  {step.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs md:text-sm text-[var(--text-secondary)]">
                      <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#D97706]"></span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card inline-block p-8 max-w-2xl bg-[rgba(248,230,209,0.45)]">
            <h3 className="font-display text-2xl font-bold mb-4">
              It's Really This Simple!
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              No payment needed to start. No agency fees. Just a conversation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}