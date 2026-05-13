'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadFormValues } from '@/lib/validations'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const interestsList = [
  { emoji: '🛕', label: 'Ganga Aarti' },
  { emoji: '🚣', label: 'Boat Ride' },
  { emoji: '🍜', label: 'Food Walk' },
  { emoji: '🧘', label: 'Yoga & Meditation' },
  { emoji: '🏺', label: 'Silk & Crafts' },
  { emoji: '📸', label: 'Photography' },
]

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStep, setFormStep] = useState(1)
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { interests: [], numberOfPax: 2 },
  })

  const selectedInterests = watch('interests')

  const toggleInterest = (interest: string) => {
    const current = selectedInterests || []
    if (current.includes(interest)) {
      setValue('interests', current.filter(i => i !== interest))
    } else {
      setValue('interests', [...current, interest])
    }
  }

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, pageUrl: window.location.href }),
      })
      if (res.ok) {
        window.location.href = `/thank-you?name=${encodeURIComponent(data.fullName)}`
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="mx-auto max-w-4xl rounded-2xl glass-card p-6 md:p-12 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gold-shimmer">Plan My Varanasi Trip</span>
        </motion.h2>
        <p className="text-lg text-[#C4BDB0]">60 seconds • Expert call in 2 hours • Free forever</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Step 1: Basic Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#714e16]">Full Name *</label>
              <input
                {...register('fullName')}
                className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[#D97706] focus:outline-none transition"
                placeholder="Your name"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-400">⚠️ {errors.fullName.message}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#714e16]">WhatsApp Number *</label>
              <input
                {...register('whatsapp')}
                placeholder="9876543210"
                className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[#D97706] focus:outline-none transition"
              />
              {errors.whatsapp && <p className="mt-1 text-sm text-red-400">⚠️ {errors.whatsapp.message}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#714e16]">Email (optional)</label>
              <input
                {...register('email')}
                type="email"
                className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[#D97706] focus:outline-none transition"
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">⚠️ {errors.email.message}</p>}
            </div>
          </div>
        </motion.div>

        {/* Step 2: Trip Details */}
        <motion.div
          className="space-y-6 pt-6 border-t border-[var(--border)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#714e16]">When do you want to travel? *</label>
              <select
                {...register('travelMonth')}
                className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] focus:border-[#D97706] focus:outline-none transition"
              >
                <option value="">Select Month</option>
                <option>Jan-Mar 2025</option>
                <option>Apr-Jun 2025</option>
                <option>Jul-Sep 2025</option>
                <option>Oct-Dec 2025</option>
              </select>
              {errors.travelMonth && <p className="mt-1 text-sm text-red-400">⚠️ {errors.travelMonth.message}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#714e16]">How many travelers? *</label>
              <input
                type="number"
                {...register('numberOfPax', { valueAsNumber: true })}
                min="1"
                className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] focus:border-[#D97706] focus:outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#714e16]">What's your budget per person? *</label>
            <select
              {...register('budgetRange')}
              className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] focus:border-[#D97706] focus:outline-none transition"
            >
              <option value="">Select Budget</option>
              <option>₹5,000 - ₹10,000</option>
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000 - ₹35,000</option>
              <option>₹35,000+</option>
            </select>
          </div>
        </motion.div>

        {/* Step 3: Interests */}
        <motion.div
          className="space-y-4 pt-6 border-t border-[var(--border)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label className="block text-sm font-semibold text-[#714e16]">What interests you most?</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interestsList.map(({ emoji, label }) => (
              <motion.button
                key={label}
                type="button"
                onClick={() => toggleInterest(label)}
                className={cn(
                  'rounded-lg px-4 py-2.5 text-sm font-semibold transition-all border',
                  selectedInterests?.includes(label)
                    ? 'bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] border-[#FBBF24] shadow-lg'
                    : 'border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[#D97706] hover:bg-[rgba(217,119,6,0.1)]'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{emoji}</span> {label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Step 4: Special Requests */}
        <motion.div
          className="space-y-4 pt-6 border-t border-[var(--border)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label className="mb-2 block text-sm font-semibold text-[#714e16]">Any special requests? (optional)</label>
          <textarea
            {...register('specialRequests')}
            rows={3}
            placeholder="e.g., dietary preferences, accessibility needs, specific guide requirements..."
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[#D97706] focus:outline-none transition resize-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          className="space-y-4 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-lg bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] text-lg font-bold transition hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-xl"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span> Submitting...
              </span>
            ) : (
              'Get My Free Varanasi Plan →'
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-[#8C7F6E]">
            <span>🔒</span>
            <span>Your privacy is sacred. No spam, ever. One expert call guaranteed.</span>
          </div>
        </motion.div>
      </form>
    </motion.div>
  )
}