import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata('Contact Varunaassi', 'Tell us about your Varanasi trip and get help shaping a practical, locally informed plan.', '/contact')

export default function ContactLayout({ children }: { children: React.ReactNode }) { return children }
