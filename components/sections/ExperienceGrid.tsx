'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ExperienceGrid() {
  const experiences = [
    {
      emoji: '🛕',
      title: 'Ganga Aarti at Dashashwamedh Ghat',
      tag: 'Evening Ritual',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arti-sMfc0kEwjxO8clkN7K00EhkC2Q9ilq.jpeg',
      description: 'The evening Aarti at Dashashwamedh Ghat is the most iconic ritual in Varanasi. Priests perform a coordinated fire ceremony on the banks of the Ganga every evening. We arrange front-row viewing, boat-side viewing, or ghat seating depending on your preference.',
    },
    {
      emoji: '🚣',
      title: 'Dawn Boat Ride on the Ganga',
      tag: 'Early Morning · Ghats',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boatride%20morning%20sunrise-8ffTrtO7fNt5vh4m5PFaGAfaGdglwr.jpeg',
      description: 'A slow boat ride along the ghats at dawn is the single best way to see Varanasi. You watch the city wake up — bathers, priests, morning rituals — all from the calm of the river. We arrange wooden rowboats with local boatmen.',
    },
    {
      emoji: '🍜',
      title: 'Old City Food Walk',
      tag: 'Street Food · Culture',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sweets-yPUJfFgNyhuNfk4WhNDIMTAaU3Lw9t.jpeg',
      description: 'Varanasi has one of India\'s most distinct food cultures — from kachori sabzi at dawn to the famous Banarasi paan. We arrange guided walks through the old city lanes with someone who knows which stalls are worth stopping at and why.',
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#D97706] font-bold mb-3 md:mb-4">WHAT WE ARRANGE</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="gold-shimmer">Real Varanasi Experiences</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            These are activities we personally know and arrange for travellers. Each one is led by someone who has done this hundreds of times.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer h-full"
              variants={itemVariants}
            >
              <div className="glass-card flex h-full flex-col overflow-hidden rounded-2xl hover:scale-[1.03] transition-all duration-300 hover:bg-[rgba(248,230,209,0.45)]">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[rgba(217,119,6,0.08)]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,11,8,0.95)] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#D97706]/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold">
                    {exp.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 md:mb-3">
                    <h3 className="font-display text-lg md:text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-[#D97706] font-semibold text-xs md:text-sm">{exp.tag}</p>
                  </div>

                  {/* Description */}
                  <p className="text-[#C4BDB0] mb-4 md:mb-6 text-xs sm:text-sm md:text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Action */}
                  <Link
                    href="#lead-form"
                    className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] px-4 py-2 rounded-lg font-bold hover:scale-105 transition text-sm"
                  >
                    Ask About This →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="#lead-form"
            className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] px-8 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            Plan My Trip →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
