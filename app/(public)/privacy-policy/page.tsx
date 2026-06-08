'use client'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'What Information We Collect',
      content: 'When you fill out our form or contact us, we collect: your full name, WhatsApp number, email address (optional), and your travel dates. We ask for this information to help us plan and discuss your Varanasi trip with you.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use your information solely to plan and discuss your Varanasi trip. We\'ll call you on WhatsApp, understand your travel preferences, and suggest personalized experiences. Your information helps us create a trip that\'s perfect for you.'
    },
    {
      title: 'What We Don\'t Do',
      content: 'We never sell your data to anyone. We never share your information with third parties. We never spam you. You\'ll only hear from us about your Varanasi trip — and we respect your privacy completely.'
    },
    {
      title: 'Cookies and Analytics',
      content: 'We use cookies to improve your browsing experience and to help us understand how people use our website. We also use Google Analytics and Meta Pixel for advertising purposes. These tools help us show you relevant information about Varanasi travel.'
    },
    {
      title: 'Your Privacy is Sacred',
      content: 'We believe your personal information is sacred. Just as Varanasi is sacred to millions, your trust in us is sacred to our team. We\'ll never misuse it. If you have any concerns, please reach out to us directly.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-[var(--bg-page)] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#D97706] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#C4BDB0]">
            Last updated: June 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
              variants={itemVariants}
            >
              <h2 className="font-display text-2xl font-bold text-[#D97706] mb-4">
                {section.title}
              </h2>
              <p className="text-[#C4BDB0] leading-relaxed text-lg">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-lg p-8"
            variants={itemVariants}
          >
            <h2 className="font-display text-2xl font-bold text-[#D97706] mb-4">
              Questions or Concerns?
            </h2>
            <p className="text-[#C4BDB0] leading-relaxed text-lg mb-4">
              If you have any questions about our privacy practices or how we handle your information, please don't hesitate to reach out to us.
            </p>
            <div className="space-y-3 text-[#C4BDB0]">
              <p>
                <span className="font-semibold text-[#D97706]">Email: </span>
                info@varunaassi.com
              </p>
              <p>
                <span className="font-semibold text-[#D97706]">WhatsApp: </span>
                +91 90535 38437
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="mt-12 text-center text-[#8C7F6E] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>
            🔒 Your privacy is sacred to us. We never spam. We never share your data.
            <br />
            Just genuine connections to the sacred city.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
