// app/blog/[slug]/page.js
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/config/blogConfig'
import { generateMetadata as genMeta } from '@/seo/meta'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return genMeta({
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    path: `/blog/${post.slug}`,
  })
}

// JSON-LD structured data
function BlogJsonLd({ post }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author.name },
    publisher: { '@type': 'Organization', name: 'Moksha Seva' },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <>
      <BlogJsonLd post={post} />

      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="relative h-72 sm:h-96 lg:h-[480px]">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-600/80 via-earth-600/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block bg-gold-300 text-white font-sans text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-cream-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 flex items-center justify-center">
                    <span className="font-serif text-xs font-bold text-white">{post.author.avatar}</span>
                  </div>
                  <span className="font-sans text-sm font-semibold text-earth-600">{post.author.name}</span>
                </div>
                <span className="font-sans text-sm text-earth-400">{post.date}</span>
                <span className="font-sans text-sm text-earth-400">{post.readTime}</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-cream-200 text-earth-500 font-sans text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Excerpt */}
              <p className="font-body text-xl text-earth-500 leading-relaxed italic mb-8 border-l-4 border-gold-300 pl-6">
                {post.excerpt}
              </p>

              {/* Content */}
              <div
                className="prose-custom font-body text-earth-500 leading-relaxed space-y-4 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-earth-600 [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-lg [&_p]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share */}
              <div className="mt-10 pt-8 border-t border-cream-200">
                <p className="font-sans text-sm font-semibold text-earth-600 mb-4">Share this story</p>
                <div className="flex gap-3">
                  {['Facebook', 'Twitter', 'WhatsApp'].map((s) => (
                    <button key={s} className="font-sans text-xs font-semibold px-4 py-2 bg-cream-200 hover:bg-gold-100 text-earth-500 rounded-full transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Back to blog */}
              <Link href="/blog" className="btn-outline-gold text-sm w-full justify-center">
                ← All Stories
              </Link>

              {/* Related */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-serif text-lg font-semibold text-earth-600 mb-4">Related Stories</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.id} href={`/blog/${r.slug}`} className="block group">
                        <div className="card-warm p-4 hover:-translate-y-0.5 transition-all">
                          <span className="font-sans text-xs text-gold-400 font-semibold">{r.category}</span>
                          <h4 className="font-serif text-sm font-semibold text-earth-600 mt-1 group-hover:text-gold-400 transition-colors">{r.title}</h4>
                          <p className="font-sans text-xs text-earth-400 mt-1">{r.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="card-gold p-6 text-center">
                <div className="text-3xl mb-3">🕯️</div>
                <h3 className="font-serif text-lg font-semibold text-earth-600 mb-2">Support Our Mission</h3>
                <p className="font-body text-sm text-earth-400 mb-4">Your donation helps us serve more families.</p>
                <Link href="/donation" className="btn-primary text-sm w-full justify-center">Donate Now</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
