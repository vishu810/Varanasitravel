import type { Metadata } from 'next'
import {
  absoluteUrl,
  breadcrumbJsonLd,
  JsonLd,
  pageMetadata,
  serviceJsonLd,
} from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

function displayName(slug: string) {
  return decodeURIComponent(slug).replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const name = displayName(slug)
  return pageMetadata(
    `${name} in Varanasi`,
    `Plan the ${name.toLowerCase()} experience with local guidance in Varanasi, Kashi.`,
    `/experiences/${slug}`,
  )
}

export default async function ExperienceDetail({ params }: Props) {
  const { slug } = await params
  const name = displayName(slug)
  const path = `/experiences/${slug}`
  const description = `Plan the ${name.toLowerCase()} experience with local guidance in Varanasi, Kashi.`

  return (
    <main className="container mx-auto px-4 py-32">
      <JsonLd data={serviceJsonLd({ name, description, path })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Experiences', path: '/experiences' },
        { name, path },
      ])} />
      <h1 className="font-display text-5xl font-bold">{name}</h1>
      <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">{description}</p>
      <a className="mt-8 inline-block font-semibold text-[#D97706]" href={absoluteUrl('/contact')}>
        Ask about this experience
      </a>
    </main>
  )
}
