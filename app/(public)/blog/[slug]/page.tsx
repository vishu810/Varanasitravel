export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Content Unavailable</h1>
        <p className="text-[var(--text-secondary)] mb-6">
          This blog post is not available. Please head back to our main pages or contact us to plan your journey.
        </p>
        <a href="/contact" className="inline-block rounded-lg bg-[var(--accent-saffron)] px-6 py-3 font-semibold text-[#0D0B08] shadow-[var(--shadow)] hover:scale-105 transition">
          Contact Us
        </a>
      </div>
    </div>
  );
}