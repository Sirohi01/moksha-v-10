// components/Footer.jsx
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-earth-600 text-cream-200 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-gold-300 via-gold-200 to-gold-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🕯️</span>
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-cream-100">{siteConfig.name}</div>
                <div className="font-sans text-[10px] tracking-widest uppercase text-gold-300 mt-0.5">{siteConfig.tagline}</div>
              </div>
            </div>
            <p className="font-body text-sm text-earth-200 leading-relaxed mb-5">
              Serving underprivileged families with free, dignified cremation services since 2010.
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="w-9 h-9 rounded-full border border-earth-400 flex items-center justify-center text-earth-300 hover:border-gold-300 hover:text-gold-300 transition-colors text-sm"
                >
                  {platform === 'facebook' && 'f'}
                  {platform === 'instagram' && 'in'}
                  {platform === 'twitter' && 'x'}
                  {platform === 'youtube' && 'yt'}
                  {platform === 'whatsapp' && 'wa'}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold tracking-widest uppercase text-xs text-gold-300 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-earth-200 hover:text-gold-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold tracking-widest uppercase text-xs text-gold-300 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <p className="font-sans text-xs text-earth-400 uppercase tracking-wider mb-1">Emergency Helpline</p>
                <a href={`tel:${siteConfig.emergencyPhone}`} className="font-serif text-lg text-gold-300 hover:text-gold-200 transition-colors">
                  {siteConfig.emergencyPhone}
                </a>
              </li>
              <li>
                <p className="font-sans text-xs text-earth-400 uppercase tracking-wider mb-1">General Enquiry</p>
                <a href={`tel:${siteConfig.phone}`} className="font-body text-sm text-earth-200 hover:text-cream-100 transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <p className="font-sans text-xs text-earth-400 uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="font-body text-sm text-earth-200 hover:text-cream-100 transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="font-sans text-xs text-earth-400 uppercase tracking-wider mb-1">Address</p>
                <p className="font-body text-sm text-earth-200 leading-relaxed">{siteConfig.address}</p>
              </li>
            </ul>
          </div>

          {/* Emergency CTA */}
          <div>
            <h3 className="font-sans font-semibold tracking-widest uppercase text-xs text-gold-300 mb-5">24/7 Emergency</h3>
            <div className="bg-earth-500 rounded-2xl p-5 mb-4">
              <p className="font-body text-sm text-cream-200 mb-4">Need immediate assistance? Our team responds within the hour.</p>
              <Link href="/help" className="block text-center btn-primary text-sm py-3 justify-center">
                Request Emergency Help
              </Link>
            </div>
            <Link href="/donation" className="block text-center border border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300">
              Donate & Support
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-earth-500 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-earth-400 text-center sm:text-left">
            © {year} {siteConfig.name} Foundation. Reg. No: {siteConfig.registrationNo} · PAN: {siteConfig.pan}
          </p>
          <p className="font-sans text-xs text-earth-400">
            80G Tax Exemption Available · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
