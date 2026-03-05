// app/page.js
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import { ServiceCard, TestimonialCard } from '@/components/Cards'
import { EmergencyCTA, DonationCTA } from '@/components/CTA'
import BlogCard from '@/components/BlogCard'
import {
  hero,
  about,
  stats,
  services,
  emergencyCta,
  galleryPreview,
  blogs,
  testimonials,
  donationCta,
} from '@/config/homeConfig'
import { blogPosts } from '@/config/blogConfig'
import { generateMetadata as genMeta } from '@/seo/meta'

export const metadata = genMeta({
  title: 'Home',
  description: 'Moksha Seva provides free cremation services to underprivileged families across India with dignity, compassion and respect.',
})

export default function HomePage() {
  const recentBlogs = blogPosts.slice(0, 3)

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={hero.image}
            alt="Peaceful spiritual landscape"
            fill
            priority
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-200/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-gold-300/8 blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 text-gold-400 font-sans text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fade-up">
              <span className="flame-icon">🕯️</span>
              {hero.badge}
            </div>

            {/* Heading */}
            <h1 className="heading-xl mb-6 animate-fade-up stagger-1 whitespace-pre-line">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg text-earth-400 mb-8 max-w-xl leading-relaxed animate-fade-up stagger-2">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up stagger-3">
              <Link href={hero.cta.href} className="btn-primary text-base">
                {hero.cta.label}
              </Link>
              <Link href={hero.ctaSecondary.href} className="btn-secondary text-base">
                {hero.ctaSecondary.label}
              </Link>
            </div>

            {/* Hero stats */}
            <div className="flex flex-wrap gap-8 animate-fade-up stagger-4">
              {hero.stats.map((s, i) => (
                <div key={i}>
                  <div className="font-serif text-2xl font-bold text-earth-600">{s.value}</div>
                  <div className="font-sans text-xs text-earth-400 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-earth-400 animate-float">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-300 to-transparent"></div>
        </div>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">{about.badge}</p>
              <h2 className="heading-lg mb-6 whitespace-pre-line">{about.title}</h2>
              <div className="divider-gold-left"></div>
              <p className="font-body text-earth-400 text-lg leading-relaxed mb-8">{about.body}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                {about.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gold-100 border border-gold-200 px-4 py-2 rounded-full">
                    <span>{h.icon}</span>
                    <span className="font-sans text-sm font-semibold text-earth-600">{h.text}</span>
                  </div>
                ))}
              </div>
              <Link href={about.cta.href} className="btn-primary">{about.cta.label}</Link>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-warm-lg aspect-[4/5]">
                <Image src={about.image} alt="Moksha Seva volunteers" fill className="object-cover" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-cream-50 rounded-2xl p-5 shadow-warm-lg border border-cream-200 max-w-[200px]">
                <div className="stat-number font-serif text-3xl font-bold">12,400+</div>
                <p className="font-sans text-xs text-earth-400 mt-1">Families served since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ──────────────────────────────────────────── */}
      <div className="bg-cream-100 border-y border-cream-200">
        <Stats stats={stats} />
      </div>

      {/* ─── SERVICES ───────────────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-label">{services.badge}</p>
            <h2 className="heading-lg mb-4">{services.title}</h2>
            <div className="divider-gold"></div>
            <p className="font-body text-earth-400 max-w-xl mx-auto">{services.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.items.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY CTA ──────────────────────────────────── */}
      <EmergencyCTA data={emergencyCta} />

      {/* ─── GALLERY PREVIEW ────────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-label">{galleryPreview.badge}</p>
            <h2 className="heading-lg mb-4">{galleryPreview.title}</h2>
            <div className="divider-gold"></div>
            <p className="font-body text-earth-400">{galleryPreview.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {galleryPreview.images.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl group shadow-soft ${i === 0 || i === 3 ? 'row-span-1' : ''}`}>
                <div className="aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-earth-600/0 group-hover:bg-earth-600/20 transition-all duration-300 flex items-end p-3">
                    <span className="text-white font-sans text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-earth-600/60 px-2 py-1 rounded-full">
                      {img.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href={galleryPreview.cta.href} className="btn-outline-gold">{galleryPreview.cta.label}</Link>
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ───────────────────────────────────── */}
      <section className="section-padding bg-cream-100">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14 gap-4">
            <div>
              <p className="section-label">{blogs.badge}</p>
              <h2 className="heading-lg">{blogs.title}</h2>
            </div>
            <Link href={blogs.cta.href} className="btn-outline-gold text-sm px-6 py-2.5 whitespace-nowrap">{blogs.cta.label}</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-label">{testimonials.badge}</p>
            <h2 className="heading-lg">{testimonials.title}</h2>
            <div className="divider-gold"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.items.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── DONATION CTA ───────────────────────────────────── */}
      <DonationCTA data={donationCta} />
    </>
  )
}
