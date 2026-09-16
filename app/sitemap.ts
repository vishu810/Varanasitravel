import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const publicRoutes = ['/', '/about', '/contact', '/experiences', '/packages', '/itinerary']

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
