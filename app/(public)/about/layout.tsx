import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata('About Varunaassi', 'Learn how Varunaassi helps travelers plan thoughtful, locally informed trips to Varanasi.', '/about')

export default function AboutLayout({ children }: { children: React.ReactNode }) { return children }
