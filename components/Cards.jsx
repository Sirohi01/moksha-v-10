// components/Cards.jsx

import Link from 'next/link'

export function ServiceCard({ service }) {
  return (
    <div className="card-warm p-6 hover:-translate-y-1 group">
      <div className="text-4xl mb-4 group-hover:animate-float transition-all">{service.icon}</div>
      <h3 className="heading-sm mb-3">{service.title}</h3>
      <p className="body-text text-sm">{service.description}</p>
    </div>
  )
}

export function ValueCard({ value }) {
  return (
    <div className="card-warm p-6 text-center hover:-translate-y-1 group">
      <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-gold-200 transition-colors">
        {value.icon}
      </div>
      <h3 className="heading-sm mb-2">{value.title}</h3>
      <p className="font-body text-sm text-earth-400 leading-relaxed">{value.description}</p>
    </div>
  )
}

export function TeamCard({ member }) {
  return (
    <div className="card-warm p-6 text-center hover:-translate-y-1 transition-all group">
      <div className="w-16 h-16 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="font-serif text-xl font-bold text-white">{member.avatar}</span>
      </div>
      <h3 className="font-serif text-lg font-semibold text-earth-600 mb-1">{member.name}</h3>
      <p className="font-sans text-xs font-semibold tracking-wider uppercase text-gold-400 mb-3">{member.role}</p>
      <p className="font-body text-sm text-earth-400 leading-relaxed">{member.bio}</p>
    </div>
  )
}

export function TestimonialCard({ item }) {
  return (
    <div className="card-warm p-8 relative overflow-hidden">
      <div className="testimonial-quote">&ldquo;</div>
      <p className="font-body text-earth-500 leading-relaxed mb-6 relative z-10 italic">
        &ldquo;{item.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 flex items-center justify-center">
          <span className="font-serif font-bold text-white text-sm">{item.avatar}</span>
        </div>
        <div>
          <p className="font-sans font-semibold text-earth-600 text-sm">{item.name}</p>
          <p className="font-sans text-xs text-earth-400">{item.location}</p>
        </div>
      </div>
    </div>
  )
}

export function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0
  return (
    <div className={`flex gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'} items-start`}>
      <div className="flex-1 hidden md:block">
        {!isEven && (
          <div className="card-warm p-5">
            <p className="font-body text-sm text-earth-500 leading-relaxed">{item.event}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-200 to-gold-300 flex items-center justify-center shadow-warm flex-shrink-0">
          <span className="font-serif font-bold text-white text-xs">{item.year.slice(2)}</span>
        </div>
        <div className="w-0.5 h-12 bg-gradient-to-b from-gold-200 to-transparent mt-2"></div>
      </div>
      <div className="flex-1">
        <div className="mb-1">
          <span className="font-sans font-bold text-gold-400 text-sm">{item.year}</span>
        </div>
        <div className="card-warm p-5 md:block">
          <p className="font-body text-sm text-earth-500 leading-relaxed">{item.event}</p>
        </div>
      </div>
    </div>
  )
}
