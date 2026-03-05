'use client'
// app/blog/page.js

import { useState } from 'react'
import BlogCard from '@/components/BlogCard'
import { blogHero, blogCategories, blogPosts } from '@/config/blogConfig'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  const featuredPost = blogPosts.find((p) => p.featured)
  const regularPosts = filtered.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-warm-gradient overflow-hidden">
        <div className="absolute inset-0 lotus-bg"></div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">{blogHero.badge}</p>
          <h1 className="heading-xl mb-4">{blogHero.title}</h1>
          <div className="divider-gold"></div>
          <p className="font-body text-earth-400 text-lg max-w-xl mx-auto">{blogHero.subtitle}</p>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-max">
          {/* Featured post */}
          {activeCategory === 'All' && featuredPost && (
            <div className="mb-12">
              <p className="section-label mb-4">Featured Story</p>
              <BlogCard post={featuredPost} featured={true} />
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm font-semibold px-5 py-2 rounded-full transition-all ${
                  activeCategory === cat ? 'tab-active' : 'tab-inactive'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === 'All' ? blogPosts.filter(p => !p.featured) : filtered).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
