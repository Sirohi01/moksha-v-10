'use client'
// app/contact/page.js

import { useState } from 'react'
import { siteConfig } from '@/config/siteConfig'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-warm-gradient relative overflow-hidden">
        <div className="absolute inset-0 lotus-bg"></div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">Get In Touch</p>
          <h1 className="heading-xl mb-4">Contact Moksha Seva</h1>
          <div className="divider-gold"></div>
          <p className="font-body text-earth-400 text-lg max-w-xl mx-auto">
            Reach out for partnerships, volunteer enquiries, media, or general information.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: '📞', label: 'Emergency Helpline', value: siteConfig.emergencyPhone, href: `tel:${siteConfig.emergencyPhone}`, highlight: true },
                { icon: '📱', label: 'General Enquiry', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                { icon: '✉️', label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: '📍', label: 'Address', value: siteConfig.address },
              ].map((item) => (
                <div key={item.label} className={`card-warm p-5 ${item.highlight ? 'border-l-4 border-red-400' : ''}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className={`font-sans text-xs font-semibold uppercase tracking-wider mb-1 ${item.highlight ? 'text-red-500' : 'text-gold-400'}`}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="font-body text-earth-600 hover:text-gold-400 transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-earth-500 text-sm leading-relaxed">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="card-warm overflow-hidden">
                <div className="bg-cream-200 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="font-sans text-sm text-earth-400">Google Maps Integration</p>
                    <p className="font-sans text-xs text-earth-300">Varanasi, Uttar Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="card-warm p-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-400 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {Object.entries(siteConfig.social).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-cream-200 hover:bg-gold-200 flex items-center justify-center text-earth-500 hover:text-earth-600 transition-colors text-xs font-bold">
                      {platform === 'facebook' ? 'f' : platform === 'instagram' ? 'in' : platform === 'twitter' ? 'x' : platform === 'youtube' ? 'yt' : 'wa'}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card-warm p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-5xl mb-4">🙏</div>
                  <h3 className="font-serif text-2xl font-semibold text-earth-600 mb-3">Message Received</h3>
                  <p className="font-body text-earth-400">Thank you for reaching out. We&apos;ll respond to your message within 24 hours.</p>
                </div>
              ) : (
                <div className="card-warm p-8">
                  <h2 className="font-serif text-2xl font-semibold text-earth-600 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="input-field" />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Email *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="input-field" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className="input-field" />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Subject *</label>
                        <select name="subject" value={form.subject} onChange={handleChange} required className="input-field">
                          <option value="">Select a subject</option>
                          <option>General Enquiry</option>
                          <option>Volunteer Application</option>
                          <option>Donation Query</option>
                          <option>Media / Press</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Write your message here..." className="input-field resize-none" />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base py-4">
                      {loading ? 'Sending...' : '✉️ Send Message'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
