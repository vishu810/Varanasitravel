import Link from 'next/link'
import { breadcrumbJsonLd, JsonLd, serviceJsonLd } from '@/lib/seo'

export type SeoLandingPageProps = {
  name: string
  description: string
  path: string
  eyebrow: string
  sections: Array<{ heading: string; body: string }>
  related: Array<{ label: string; href: string }>
}

export default function SeoLandingPage({ name, description, path, eyebrow, sections, related }: SeoLandingPageProps) {
  return (
    <main className="container mx-auto px-4 py-24 md:py-32">
      <JsonLd data={serviceJsonLd({ name, description, path })} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name, path }])} />
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97706]">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">{name}</h1>
        <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">{description}</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#D97706] px-6 py-3 font-semibold text-white">Plan this with a local expert</Link>
      </header>
      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <section key={section.heading} className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">{section.body}</p>
          </section>
        ))}
      </div>
      <nav aria-label="Related Varanasi travel pages" className="mt-20 border-t border-black/10 pt-8 dark:border-white/10">
        <h2 className="font-display text-2xl font-bold">Continue planning</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {related.map((item) => <Link key={item.href} href={item.href} className="rounded-full border border-[#D97706] px-4 py-2 text-sm font-semibold text-[#D97706]">{item.label}</Link>)}
        </div>
      </nav>
    </main>
  )
}

export function seoPageMetadata(title: string, description: string, path: string) {
  return { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, type: 'website' as const }, twitter: { card: 'summary_large_image' as const, title, description } }
}

