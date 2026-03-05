// app/about/page.js
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import { ValueCard, TeamCard, TimelineItem } from '@/components/Cards'
import { aboutHero, story, missionVision, founderMessage, values, team, timeline } from '@/config/aboutConfig'
import { stats } from '@/config/homeConfig'
import { generateMetadata as genMeta } from '@/seo/meta'

export const metadata = genMeta({
  title: 'About Us',
  description: 'Learn about Moksha Seva — our story, mission, vision, and the people behind 14 years of free cremation services across India.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-warm-gradient">
        <div className="absolute inset-0 lotus-bg"></div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">{aboutHero.badge}</p>
          <h1 className="heading-xl mb-6 whitespace-pre-line">{aboutHero.title}</h1>
          <div className="divider-gold"></div>
          <p className="font-body text-earth-400 text-lg max-w-2xl mx-auto">{aboutHero.subtitle}</p>
        </div>
      </section>

      {/* ─── STORY ────────────────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">{story.badge}</p>
              <h2 className="heading-lg mb-6">{story.title}</h2>
              <div className="divider-gold-left"></div>
              <div className="space-y-5">
                {story.paragraphs.map((p, i) => (
                  <p key={i} className="font-body text-earth-400 leading-relaxed text-lg">{p}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg aspect-[4/5]">
                <Image src={story.image} alt="Moksha Seva founder" fill className="object-cover" />
              </div>
              <div className="absolute -top-5 -right-5 bg-gold-300 text-white rounded-2xl p-5 max-w-[160px] shadow-warm-lg text-center">
                <div className="font-serif text-3xl font-bold">2010</div>
                <p className="font-sans text-xs mt-1">Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─────────────────────────────── */}
      <section className="section-padding bg-cream-100">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {[missionVision.mission, missionVision.vision].map((item) => (
              <div key={item.title} className="card-warm p-8 lg:p-10">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h2 className="heading-md mb-4">{item.title}</h2>
                <div className="divider-gold-left"></div>
                <p className="font-body text-earth-400 text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPACT STATS ─────────────────────────────────── */}
      <div className="bg-earth-600">
        <Stats stats={stats} />
      </div>

      {/* ─── FOUNDER MESSAGE ──────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <p className="section-label">{founderMessage.badge}</p>
            <h2 className="heading-lg">A Word from Our Founder</h2>
            <div className="divider-gold"></div>
          </div>
          <div className="card-gold p-8 lg:p-12 relative">
            <div className="testimonial-quote">&ldquo;</div>
            <div className="relative z-10">
              <div className="space-y-5 mb-8">
                {founderMessage.message.map((p, i) => (
                  <p key={i} className="font-body text-earth-500 text-lg leading-relaxed italic">{p}</p>
                ))}
              </div>
              <div className="font-serif text-earth-600 font-semibold">{founderMessage.signature}</div>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gold-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-300 to-gold-400 flex items-center justify-center shadow-warm">
                  <span className="font-serif text-white text-xl font-bold">{founderMessage.avatar}</span>
                </div>
                <div>
                  <p className="font-serif text-earth-600 font-semibold text-lg">{founderMessage.name}</p>
                  <p className="font-sans text-xs text-gold-400 font-semibold tracking-wider uppercase">{founderMessage.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────── */}
      <section className="section-padding bg-cream-100">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-label">What We Stand For</p>
            <h2 className="heading-lg">Our Core Values</h2>
            <div className="divider-gold"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ValueCard key={i} value={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-label">The People Behind The Mission</p>
            <h2 className="heading-lg">Our Team</h2>
            <div className="divider-gold"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────── */}
      <section className="section-padding bg-cream-100">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-14">
            <p className="section-label">Our Journey</p>
            <h2 className="heading-lg">14 Years of Seva</h2>
            <div className="divider-gold"></div>
          </div>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="section-padding bg-warm-gradient text-center">
        <div className="container-max max-w-2xl">
          <h2 className="heading-lg mb-4">Join Our Mission</h2>
          <p className="font-body text-earth-400 text-lg mb-8">
            Whether you donate, volunteer, or simply share our story — you become part of Moksha Seva.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donation" className="btn-primary">Donate Now</Link>
            <Link href="/contact" className="btn-secondary">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
