'use client'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true })

  const stats = [
    { emoji: '🧭', num: 500, label: 'Trips Planned', suffix: '+' },
    { emoji: '⭐', num: 4.9, label: 'Average Rating', suffix: '★', decimals: 1 },
    { emoji: '🛕', num: 30, label: 'Experiences', suffix: '+' },
    { emoji: '⏱️', num: 2, label: 'Avg Response', suffix: ' hrs' },
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
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shimmer">Trusted by Hundreds</span>
          </h2>
          <p className="text-[#C4BDB0] text-lg">Real numbers from real travelers</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 text-center hover:bg-[rgba(248,230,209,0.45)] transition group"
              variants={itemVariants}
            >
              {/* Emoji */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition">
                {stat.emoji}
              </div>

              {/* Number */}
              <div className="mb-3">
                <div className="font-display text-5xl font-bold text-[#D97706] mb-1">
                  {inView && (
                    <CountUp
                      end={stat.num}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                    />
                  )}
                  <span className="text-4xl">{stat.suffix}</span>
                </div>
              </div>

              {/* Label */}
              <p className="text-[#C4BDB0] font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          className="mt-16 glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '👥', label: 'Travelers from 40+ Countries' },
              { icon: '🏅', label: '98% Would Recommend' },
              { icon: '🎯', label: '100% Custom Itineraries' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-4xl">{item.icon}</div>
                <p className="text-[#C4BDB0] font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}