'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="border-t border-[rgba(201,163,125,0.3)] bg-[var(--bg-surface)] py-16 text-[var(--text-secondary)]">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <motion.div
          className="grid gap-12 md:grid-cols-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-2xl font-bold text-[#D97706] mb-4">Varunaassi</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
              A Varanasi travel planning service. We help you plan a real, personalised trip to one of India's most extraordinary cities.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-2xl hover:text-[#D97706] transition">📱</a>
              <a href="#" className="text-2xl hover:text-[#D97706] transition">📧</a>
              <a href="#" className="text-2xl hover:text-[#D97706] transition">📍</a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'Experiences', href: '/experiences' },
                { label: 'Packages', href: '/packages' },
                { label: 'Build Itinerary', href: '/itinerary' },
              ].map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#402813] font-medium hover:text-[#D97706] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms & Conditions', href: '#' },
              ].map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#402813] font-medium hover:text-[#D97706] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-white mb-4">Connect With Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-[#C4BDB0]">WhatsApp</p>
                  <p className="text-[#FBBF24] font-semibold">+91 90535 38437</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="text-[#C4BDB0]">Email</p>
                  <p className="text-[#FBBF24] font-semibold">info@varunaassi.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-[#7A5A40]">Office</p>
                  <p className="text-[#D97706] font-semibold">Varanasi, India</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[#C4BDB0] text-center md:text-left">
            © {currentYear} Varunaassi. All rights reserved.
          </p>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10 text-center text-xs text-[#C4BDB0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            🔒 Your privacy is sacred to us. We never spam. We never share your data. 
            <br />
            Just genuine connections to the sacred city.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}