'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadFormValues } from '@/lib/validations'
import { motion } from 'framer-motion'

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiError, setApiError] = useState('')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { numberOfPax: 2 },
  })

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true)
    setApiError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, pageUrl: window.location.href }),
      })
      
      const responseData = await res.json()
      
      if (res.ok) {
        window.location.href = `/thank-you?name=${encodeURIComponent(data.fullName)}`
      } else {
        setApiError(responseData.error || 'Failed to submit form. Please try again.')
      }
    } catch (error) {
      console.error('[LeadForm] Submission error:', error)
      setApiError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="mx-auto max-w-4xl rounded-2xl glass-card p-4 md:p-8 lg:p-12 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="text-center mb-6 md:mb-4">
        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="gold-shimmer">Plan My Varanasi Trip</span>
        </motion.h2>
        <p className="text-xs sm:text-sm md:text-base text-[#C4BDB0]">Fill this in and we will call you on WhatsApp. No cost, no obligation.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#714e16]">From which date do you want to travel? *</label>
              <input
                type="date"
                {...register('travelDateFrom', { valueAsDate: true })}
                className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] focus:border-[#D97706] focus:outline-none transition"
              />
              {errors.travelDateFrom && <p className="mt-1 text-sm text-red-400">⚠️ {errors.travelDateFrom.message}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#714e16]">To which date do you want to travel? *</label>
              <input
                type="date"
                {...register('travelDateTo', { valueAsDate: true })}
                className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] focus:border-[#D97706] focus:outline-none transition"
              />
              {errors.travelDateTo && <p className="mt-1 text-sm text-red-400">⚠️ {errors.travelDateTo.message}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#714e16]">How many people are travelling? *</label>
              <input
                type="number"
                {...register('numberOfPax', { valueAsNumber: true })}
                min="1"
                className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[var(--text-primary)] focus:border-[#D97706] focus:outline-none transition"
              />
              {errors.numberOfPax && <p className="mt-1 text-sm text-red-400">⚠️ {errors.numberOfPax.message}</p>}
            </div>
          </div>
        </motion.div>

        {/* Step 3: Special Requests */}
        <motion.div
          className="space-y-4 pt-6 border-t border-[var(--border)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label className="mb-2 block text-sm font-semibold text-[#714e16]">Anything specific you want to do or avoid? (optional)</label>
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
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {apiError && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-800 text-sm">
              <p className="font-semibold">Error:</p>
              <p>{apiError}</p>
            </div>
          )}
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
              'Request a Free Call Back →'
            )}
          </button>

          <div className="text-center text-xs text-[#8C7F6E] space-y-3">
            <p>
              By submitting, you agree to our{' '}
              <a href="/privacy-policy" className="text-[#D97706] font-semibold hover:text-[#FBBF24] transition">
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex items-center justify-center gap-2">
              <span>🔒</span>
              <span>We do not spam. We do not share your details. One personal WhatsApp call — that is it.</span>
            </div>
          </div>
        </motion.div>
      </form>
    </motion.div>
  )
}
