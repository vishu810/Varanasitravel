import { z } from 'zod'

export const leadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  whatsapp: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email().optional().or(z.literal('')),
  travelDateFrom: z.date().optional(),
  travelDateTo: z.date().optional(),
  numberOfPax: z.number().min(1).max(50),
  specialRequests: z.string().max(500).optional(),
  source: z.string().optional(),
  pageUrl: z.string().optional(),
})

export type LeadFormValues = z.infer<typeof leadSchema>
