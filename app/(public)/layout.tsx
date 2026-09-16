import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Varanasi Travel Experiences and Itineraries',
  'Explore local Varanasi experiences, flexible trip formats, and practical travel planning for Kashi.',
  '/',
)

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return children
}
