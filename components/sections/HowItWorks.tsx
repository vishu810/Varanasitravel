'use client'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      emoji: '📝',
      title: 'Tell Us Your Dream',
      description: '60-second form about your interests, budget, and travel style',
      details: ['Budget', 'Duration', 'Interests', 'Pace'],
    },
    {
      num: '02',
      emoji: '✨',
      title: 'Expert Designs Your Plan',
      description: 'Our Varanasi experts craft a personalized itinerary just for you',
      details: ['Custom experiences', 'Best locations', 'Local guides', 'Hidden gems'],
    },
    {
      num: '03',
      emoji: '🤝',
      title: 'Expert Calls You Back',
      description: 'Within 2 hours, our team calls you on WhatsApp to refine details',
      details: ['Live discussion', 'Questions answered', 'Adjustments made', 'Support 24/7'],
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shimmer">Your Journey in 3 Simple Steps</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            From dream to reality — we make it effortless
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-4"
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
                <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r from-[#D97706] to-[#FBBF24] rounded-full flex items-center justify-center font-display font-bold text-[#0D0B08] text-lg shadow-lg">
                  {step.num}
                </div>

                {/* Emoji */}
                <div className="text-5xl mb-6 mt-2">{step.emoji}</div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{step.description}</p>

                {/* Details Tags */}
                <div className="space-y-2">
                  {step.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="w-2 h-2 rounded-full bg-[#D97706]"></span>
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
              No hidden charges, no spam, no pressure. Just genuine experts helping you create memories.
            </p>
            <button className="bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] px-8 py-3 rounded-lg font-bold hover:scale-105 transition">
              Let's Get Started →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}