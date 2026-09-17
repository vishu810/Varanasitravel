import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata('Varanasi Experiences', 'Discover Ganga Aarti, dawn boat rides, food walks, silk weaving, temple walks, and other local Varanasi experiences.', '/experiences')

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) { return children }
