'use client'
// app/help/page.js

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

export default function HelpPage() {
  const [form, setForm] = useState({
    name: '', phone: '', location: '', urgency: 'urgent', message: '', document: null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500)) // Simulate API call
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-gradient pt-20 px-4">
        <div className="max-w-md w-full text-center card-warm p-10">
          <div className="text-5xl mb-4">🙏</div>
          <h2 className="font-serif text-3xl font-semibold text-earth-600 mb-3">Request Received</h2>
          <p className="font-body text-earth-400 mb-6">
            Our emergency team has been notified. We will contact you at <strong>{form.phone}</strong> within 30 minutes.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="font-sans text-sm font-semibold text-red-600 mb-1">For immediate assistance:</p>
            <a href={`tel:${siteConfig.emergencyPhone}`} className="font-serif text-2xl font-bold text-red-600">
              {siteConfig.emergencyPhone}
            </a>
          </div>
          <Link href="/" className="btn-primary w-full justify-center">Return Home</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white text-center py-3 px-4 pt-20">
        <p className="font-sans text-sm font-semibold">
          🚨 For immediate help, call our 24/7 emergency line:{' '}
          <a href={`tel:${siteConfig.emergencyPhone}`} className="underline font-bold text-lg">
            {siteConfig.emergencyPhone}
          </a>
        </p>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-0 bg-warm-gradient">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center py-14">
          <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 text-red-600 font-sans text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 emergency-pulse"></span>
            Emergency Cremation Request
          </div>
          <h1 className="heading-xl mb-4">We Are Here for You</h1>
          <div className="divider-gold"></div>
          <p className="font-body text-earth-400 text-lg max-w-xl mx-auto">
            Fill out this form and our team will reach you within 30–60 minutes. All services are completely free.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-max max-w-3xl">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar info */}
            <div className="space-y-6">
              <div className="card-warm p-6 border-l-4 border-red-400">
                <h3 className="font-sans font-semibold text-sm text-red-600 uppercase tracking-wider mb-2">Emergency Helpline</h3>
                <a href={`tel:${siteConfig.emergencyPhone}`} className="font-serif text-2xl font-bold text-earth-600 hover:text-gold-400 transition-colors block">
                  {siteConfig.emergencyPhone}
                </a>
                <p className="font-sans text-xs text-earth-400 mt-1">Available 24 hours, 7 days a week</p>
              </div>
              <div className="card-warm p-6">
                <h3 className="font-serif text-lg font-semibold text-earth-600 mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'You submit this form',
                    'Our team calls within 30 min',
                    'We dispatch volunteers',
                    'Services begin free of cost',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold-200 text-gold-500 font-sans font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="font-body text-sm text-earth-400">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="card-gold p-5 text-center">
                <div className="text-2xl mb-2">💛</div>
                <p className="font-body text-sm text-earth-500 italic">All Moksha Seva services are 100% free. You will never be charged.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-warm p-8">
                <h2 className="font-serif text-2xl font-semibold text-earth-600 mb-6">Emergency Request Form</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 00000 00000"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">
                      Location / Address *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                      placeholder="Full address where assistance is needed"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">
                      Urgency Level *
                    </label>
                    <select name="urgency" value={form.urgency} onChange={handleChange} className="input-field">
                      <option value="urgent">Immediate — Need help now</option>
                      <option value="today">Within today</option>
                      <option value="tomorrow">Within 24 hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">
                      Message / Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please share any details that will help us assist you better..."
                      className="input-field resize-none"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">
                      Upload Document (optional)
                    </label>
                    <div className="border-2 border-dashed border-cream-300 rounded-xl p-6 text-center cursor-pointer hover:border-gold-300 transition-colors">
                      <input type="file" name="document" onChange={handleChange} className="hidden" id="doc-upload" />
                      <label htmlFor="doc-upload" className="cursor-pointer">
                        <div className="text-2xl mb-2">📄</div>
                        <p className="font-sans text-sm text-earth-400">
                          {form.document ? form.document.name : 'Click to upload death certificate or ID proof'}
                        </p>
                        <p className="font-sans text-xs text-earth-300 mt-1">PDF, JPG, PNG up to 5MB</p>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-sans font-bold py-4 rounded-full transition-all duration-300 shadow-lg text-lg"
                  >
                    {loading ? 'Submitting...' : '🚨 Submit Emergency Request'}
                  </button>
                  <p className="font-sans text-xs text-center text-earth-400">
                    Our team will call you within 30 minutes. All services are completely free.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
