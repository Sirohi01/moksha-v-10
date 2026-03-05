// components/CTA.jsx
import Link from 'next/link'

export function EmergencyCTA({ data }) {
  return (
    <section className="bg-earth-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-earth-500 to-earth-600"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold-400/5 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold-400/5 translate-y-1/2 -translate-x-1/2"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-400/30 text-red-300 font-sans text-xs font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-red-400 emergency-pulse"></span>
          24/7 Emergency Response
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream-100 mb-4">
          {data.title}
        </h2>
        <p className="font-body text-earth-200 max-w-2xl mx-auto mb-8 text-lg">
          {data.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`tel:${data.phone}`}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            📞 {data.phone}
          </a>
          <Link
            href={data.cta.href}
            className="border-2 border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-earth-600 font-sans font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            {data.cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function DonationCTA({ data }) {
  return (
    <section className="section-padding bg-warm-gradient relative overflow-hidden">
      <div className="absolute inset-0 lotus-bg"></div>
      <div className="relative container-max text-center">
        <p className="section-label">{data.title}</p>
        <h2 className="heading-lg mb-4">{data.title}</h2>
        <div className="divider-gold"></div>
        <p className="font-body text-earth-400 max-w-2xl mx-auto mb-10 text-lg">
          {data.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {data.amounts.map((amount) => (
            <Link
              key={amount}
              href={`${data.cta.href}?amount=${amount}`}
              className="bg-cream-50 border-2 border-gold-200 hover:border-gold-300 hover:bg-gold-100 text-earth-600 font-sans font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              ₹{amount.toLocaleString('en-IN')}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link href={data.cta.href} className="btn-primary text-base px-10 py-4">
            {data.cta.label}
          </Link>
          <Link href={data.ctaSecondary.href} className="btn-secondary text-base px-10 py-4">
            {data.ctaSecondary.label}
          </Link>
        </div>
        <p className="font-sans text-xs text-earth-400">{data.note}</p>
      </div>
    </section>
  )
}
