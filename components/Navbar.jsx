'use client'
// components/Navbar.jsx

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/siteConfig'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-warm border-b border-cream-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-300 to-gold-400 rounded-full flex items-center justify-center shadow-warm group-hover:shadow-warm-lg transition-all">
              <span className="text-white text-lg">🕯️</span>
            </div>
            <div>
              <div className="font-serif text-xl font-semibold text-earth-600 leading-none">{siteConfig.name}</div>
              <div className="font-sans text-[10px] tracking-widest uppercase text-gold-400 mt-0.5">{siteConfig.tagline}</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-sans text-sm font-semibold transition-colors duration-200 ${
                  pathname === link.href ? 'text-gold-400 active' : 'text-earth-500 hover:text-earth-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/help"
              className="font-sans text-sm font-semibold text-red-600 border border-red-200 px-4 py-2 rounded-full hover:bg-red-50 transition-all duration-200 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 emergency-pulse"></span>
              Emergency Help
            </Link>
            <Link
              href="/donation"
              className="btn-primary text-sm px-6 py-2.5"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-earth-600 hover:bg-cream-200 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="border-t border-cream-200 pt-4 flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans font-semibold px-3 py-2 rounded-lg transition-colors ${
                  pathname === link.href ? 'bg-gold-100 text-gold-400' : 'text-earth-500 hover:bg-cream-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-2">
              <Link href="/help" className="flex-1 text-center font-sans text-sm font-semibold text-red-600 border border-red-200 px-4 py-2.5 rounded-full hover:bg-red-50 transition-all">
                Emergency Help
              </Link>
              <Link href="/donation" className="flex-1 text-center btn-primary text-sm py-2.5 justify-center">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
