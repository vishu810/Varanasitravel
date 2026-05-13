'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ExperienceGrid() {
  const experiences = [
    {
      emoji: '🛕',
      title: 'Ganga Aarti Ceremony',
      subtitle: 'The Evening Ritual',
      image: 'https://images.unsplash.com/photo-1596040606112-bc8ab325146f?w=400&q=80',
      price: '₹599',
      rating: 4.9,
      reviews: 230,
    },
    {
      emoji: '🚣',
      title: 'Dawn Boat Ride',
      subtitle: 'Sacred Waters',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
      price: '₹799',
      rating: 4.8,
      reviews: 195,
    },
    {
      emoji: '🍜',
      title: 'Food Heritage Walk',
      subtitle: 'Street to Soul',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      price: '₹899',
      rating: 4.9,
      reviews: 312,
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shimmer">Experiences That Stay</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Curated moments designed to touch your soul, led by locals who know every secret.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
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
                  <div className="mb-3">
                    <h3 className="font-display text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-[#D97706] font-semibold text-sm">{exp.subtitle}</p>
                  </div>

                  {/* Rating */}
<div className="flex items-center gap-2 mb-4 pb-4 border-b border-[rgba(201,163,125,0.4)]">
                      <div className="flex items-center gap-1">
                        <span className="text-lg">⭐</span>
                        <span className="font-bold">{exp.rating}</span>
                      </div>
                      <span className="text-xs text-[var(--text-secondary)]">({exp.reviews} reviews)</span>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[var(--text-secondary)] mb-1">Starting from</p>
                      <p className="font-display text-2xl font-bold text-[#FBBF24]">{exp.price}</p>
                    </div>
                    <Link
                      href="/experiences"
                      className="bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] w-12 h-12 rounded-full flex items-center justify-center font-bold hover:scale-110 transition"
                    >
                      →
                    </Link>
                  </div>
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
          <Link
            href="/experiences"
            className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] px-8 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            Explore All Experiences →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}