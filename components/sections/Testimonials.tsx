'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Priya Sharma',
    city: 'Mumbai',
    quote: 'We had 3 days in Varanasi and had no idea where to start. Varunaassi planned everything — the dawn boat ride, Aarti, the food walk. Every moment felt personal. Highly recommend.',
    tripType: 'Family trip',
    nights: '3 nights'
  },
  {
    name: 'Rohan & Ananya',
    city: 'Bengaluru',
    quote: 'We chose Varunaassi for our anniversary trip. The team knew exactly what a couple would enjoy — quiet ghats, an evening on the river, a silk weaving visit. Perfect.',
    tripType: 'Couple',
    nights: '4 nights'
  },
  {
    name: 'Vikram Nair',
    city: 'Dubai (NRI)',
    quote: 'I hadn\'t visited Varanasi since childhood. I wanted something real, not a tourist package. The conversation on WhatsApp was genuinely helpful — they understood what I was looking for.',
    tripType: 'Solo',
    nights: '5 nights'
  },
  {
    name: 'The Mehta Family',
    city: 'Ahmedabad',
    quote: 'A spiritual trip for my parents\' 40th anniversary. Varunaassi arranged everything with care — the Aarti, temple visits, the river at sunrise. My parents were in tears. Thank you.',
    tripType: 'Family pilgrimage',
    nights: '4 nights'
  }
]

export default function Testimonials() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-[var(--bg-page)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D97706] mb-4">
            What Travellers Say
          </h2>
          <p className="text-lg text-[#C4BDB0]">
            Real trips, real people, real Varanasi
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 transition"
              variants={cardVariants}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl text-[#D97706]">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#C4BDB0] text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-bold text-lg mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#8C7F6E] mb-3">
                  {testimonial.city}
                </p>
                <p className="text-xs text-[#A0957F]">
                  {testimonial.tripType} • {testimonial.nights}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}