'use client'
import { motion } from 'framer-motion'

export default function AboutThisService() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-3xl font-bold mb-8">What This Service Actually Is</h3>
          
          <div className="space-y-6 text-[#C4BDB0] leading-relaxed">
            <p>
              We are not a travel agency. We do not sell fixed packages at set prices. What we do is plan your Varanasi trip personally — based on who you are, how long you have, and what matters to you.
            </p>

            <p>
              When you fill our form, we call you on WhatsApp. We talk through your trip. We suggest what to do, in what order, for how long. We connect you with the right local guides, boat operators, and drivers we have worked with.
            </p>

            <p>
              You get a real conversation with someone who knows Varanasi — not a booking form and a confirmation email.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
