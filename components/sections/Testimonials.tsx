'use client'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      text: "The planning was flawless. My father actually wept at Dashashwamedh Ghat. This wasn't just a trip—it was a pilgrimage.",
      author: 'Vishu',
      role: 'Traveler, Bangalore',
      avatar: '👩',
      rating: 5,
    },
    {
      text: "As a solo female traveler, I was nervous. But from the moment I landed, the team made me feel safe and welcomed. The experiences were authentic, not touristy.",
      author: 'Anonymous',
      role: 'Solo Traveler',
      avatar: '👩',
      rating: 5,
    },
    {
      text: "We booked a customized 5-day package for our family. They accommodated our elderly parents perfectly. The silk workshop, food tour, and boat rides were unforgettable.",
      author: 'Naveen',
      role: 'Family Traveler',
      avatar: '👨',
      rating: 5,
    },
    {
      text: "I came for spirituality and stayed for the people. The early morning yoga sessions, ghat walks with monks, and conversations with locals changed my perspective on life.",
      author: 'Vishu',
      role: 'Yoga Practitioner',
      avatar: '👩',
      rating: 5,
    },
    {
      text: "Best ₹15,000 I ever spent. The Benaras Soul package gave me experiences money can't usually buy. Their guides are more like friends now.",
      author: 'Anonymous',
      role: 'Student',
      avatar: '👨',
      rating: 5,
    },
    {
      text: "Skeptical at first, but their personalized itinerary was exactly what I needed. The photography session, temple visits, and conversations with locals—all perfect.",
      author: 'Naveen',
      role: 'Photographer',
      avatar: '👩',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="bg-gradient-to-b from-[#1A1510] to-[#0D0B08] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shimmer">Words From Travelers</span>
          </h2>
          <p className="text-[#C4BDB0] text-lg">
            Real people. Real transformations. Real Varanasi.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 hover:bg-[rgba(248,230,209,0.45)] transition flex flex-col h-full group"
              variants={itemVariants}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-lg">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#C4BDB0] italic mb-6 flex-grow leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="h-0.5 bg-gradient-to-r from-[#D97706] to-transparent mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-display font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-[#C4BDB0]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          className="mt-16 glass-card p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-display text-4xl font-bold text-[#D97706] mb-2">98%</div>
              <p className="text-[#C4BDB0]">Recommend Us to Friends</p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-[#D97706] mb-2">4.9★</div>
              <p className="text-[#C4BDB0]">Average Rating</p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-[#D97706] mb-2">500+</div>
              <p className="text-[#C4BDB0]">Happy Travelers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}