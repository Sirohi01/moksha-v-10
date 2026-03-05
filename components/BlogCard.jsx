// components/BlogCard.jsx
import Link from 'next/link'
import Image from 'next/image'

export default function BlogCard({ post, featured = false }) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="card-warm overflow-hidden flex flex-col md:flex-row h-full hover:-translate-y-1 transition-all duration-300">
          <div className="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden flex-shrink-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover blog-img transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-600/20 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-gold-300 text-white font-sans text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-sans text-xs text-earth-400">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-earth-300"></span>
                <span className="font-sans text-xs text-earth-400">{post.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-earth-600 mb-3 group-hover:text-gold-400 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="font-body text-sm text-earth-400 leading-relaxed">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-cream-200">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 flex items-center justify-center">
                  <span className="font-serif text-xs font-bold text-white">{post.author.avatar}</span>
                </div>
                <span className="font-sans text-xs text-earth-400">{post.author.name}</span>
              </div>
              <span className="font-sans text-xs font-semibold text-gold-400 group-hover:gap-2 transition-all">
                Read More →
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="card-warm overflow-hidden h-full hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover blog-img transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-600/20 to-transparent"></div>
          <span className="absolute top-3 left-3 bg-gold-300 text-white font-sans text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-xs text-earth-400">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-earth-300"></span>
            <span className="font-sans text-xs text-earth-400">{post.readTime}</span>
          </div>
          <h3 className="font-serif text-lg font-semibold text-earth-600 mb-2 group-hover:text-gold-400 transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="font-body text-sm text-earth-400 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-2 pt-4 border-t border-cream-200">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 flex items-center justify-center">
              <span className="font-serif text-xs font-bold text-white">{post.author.avatar}</span>
            </div>
            <span className="font-sans text-xs text-earth-400">{post.author.name}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
