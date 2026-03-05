'use client'
// app/donation/page.js

import { useState, useRef } from 'react'
import Link from 'next/link'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { donationHero, donationAmounts, donationPurposes, donationTrustBadges, receiptConfig } from '@/config/donationConfig'
import { generateTransactionId } from '@/lib/helpers'

function DonationReceipt({ donor, txnId, onClose }) {
  const receiptRef = useRef(null)
  const date = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })

  const handlePrint = () => {
    if (!receiptRef.current) return
    // open a new window and clone the head to inherit styles
    const printWindow = window.open('', '_blank', 'width=800,height=600')
    printWindow.document.write(`<!DOCTYPE html><html><head>${document.head.innerHTML}</head><body>${receiptRef.current.innerHTML}</body></html>`)
    printWindow.document.close()
    printWindow.focus()
    // allow some time for styles to load before printing
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 500)
  }

  const handleDownload = async () => {
    if (!receiptRef.current) return
    const canvas = await html2canvas(receiptRef.current)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'pt', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('receipt.pdf')
  }

  return (
    <div ref={receiptRef} className="fixed inset-0 z-50 bg-earth-600/80 flex items-center justify-center p-4 overflow-y-auto receipt-printable">
      <div className="bg-cream-50 rounded-3xl max-w-lg w-full shadow-warm-lg my-4">
        {/* Receipt Header */}
        <div className="bg-gradient-to-br from-gold-300 to-gold-400 rounded-t-3xl p-8 text-white text-center">
          <div className="text-3xl mb-2">🕯️</div>
          <h2 className="font-serif text-2xl font-bold">{receiptConfig.orgName}</h2>
          <p className="font-sans text-xs opacity-80 tracking-wider mt-1">{receiptConfig.orgAddress}</p>
          <div className="mt-4 bg-white/20 rounded-xl px-4 py-2 inline-block">
            <p className="font-sans text-xs font-bold tracking-widest uppercase">Donation Receipt</p>
          </div>
        </div>

        {/* Receipt Body */}
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="text-4xl font-serif font-bold stat-number mb-1">
              ₹{Number(donor.amount).toLocaleString('en-IN')}
            </div>
            <p className="font-body text-earth-400 text-sm italic">{receiptConfig.thankYouMessage}</p>
          </div>

          <div className="space-y-3 border-t border-b border-cream-200 py-5 mb-5">
            {[
              { label: 'Donor Name', value: donor.name },
              { label: 'Phone', value: donor.phone },
              { label: 'Email', value: donor.email },
              { label: 'Purpose', value: donor.purpose },
              { label: 'Transaction ID', value: txnId },
              { label: 'Date', value: date },
            ].map(({ label, value }) => value && (
              <div key={label} className="flex justify-between gap-4">
                <span className="font-sans text-xs text-earth-400 uppercase tracking-wider flex-shrink-0">{label}</span>
                <span className="font-body text-sm text-earth-600 text-right">{value}</span>
              </div>
            ))}
          </div>

          <div className="bg-gold-100 rounded-xl p-4 mb-6 text-center">
            <p className="font-sans text-xs font-semibold text-gold-400">{receiptConfig.section80G}</p>
            <p className="font-sans text-xs text-earth-400 mt-1">PAN: {receiptConfig.orgPan} · Reg: {receiptConfig.orgRegNo}</p>
          </div>

          <div className="flex gap-3">
            {/* <button
              onClick={handlePrint}
              className="flex-1 btn-primary text-sm justify-center"
            >
              🖨️ Print Receipt
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 btn-outline-gold text-sm justify-center"
            >
              📥 Download PDF
            </button> */}
            <button
              onClick={onClose}
              className="flex-1 btn-secondary text-sm justify-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '', pan: '', purpose: 'General Fund', message: '',
  })
  const [receipt, setReceipt] = useState(null)
  const [loading, setLoading] = useState(false)

  const amount = selectedAmount || customAmount

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!amount) return alert('Please select or enter a donation amount.')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    const txnId = generateTransactionId()
    setLoading(false)
    setReceipt({ donor: { ...form, amount }, txnId })
  }

  return (
    <>
      {receipt && (
        <DonationReceipt
          donor={receipt.donor}
          txnId={receipt.txnId}
          onClose={() => { setReceipt(null); setForm({ name: '', phone: '', email: '', address: '', pan: '', purpose: 'General Fund', message: '' }); setSelectedAmount(null); setCustomAmount('') }}
        />
      )}

      {/* Hero */}
      <section className="pt-32 pb-16 bg-warm-gradient relative overflow-hidden">
        <div className="absolute inset-0 lotus-bg"></div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">{donationHero.badge}</p>
          <h1 className="heading-xl mb-4 whitespace-pre-line">{donationHero.title}</h1>
          <div className="divider-gold"></div>
          <p className="font-body text-earth-400 text-lg max-w-xl mx-auto">{donationHero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {donationTrustBadges.map((b) => (
              <span key={b} className="bg-gold-100 border border-gold-200 text-gold-500 font-sans text-xs font-semibold px-4 py-2 rounded-full">
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-max max-w-4xl">
          <div className="card-warm p-8 lg:p-12">
            <h2 className="heading-md mb-8 text-center">Choose Your Contribution</h2>

            {/* Amount selector */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
              {donationAmounts.map((a) => (
                <button
                  key={a.value}
                  onClick={() => { setSelectedAmount(a.value); setCustomAmount('') }}
                  className={`p-3 rounded-xl border-2 font-sans font-bold text-sm transition-all ${
                    selectedAmount === a.value
                      ? 'border-gold-300 bg-gold-100 text-gold-500'
                      : 'border-cream-300 text-earth-500 hover:border-gold-200 hover:bg-gold-100/50'
                  }`}
                >
                  <div>₹{a.value.toLocaleString('en-IN')}</div>
                  <div className="font-sans font-normal text-[10px] text-earth-400 mt-0.5 hidden sm:block">{a.description}</div>
                </button>
              ))}
            </div>

            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-earth-400 font-semibold">₹</span>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
                className="input-field pl-8"
                min="1"
              />
            </div>

            <div className="border-t border-cream-200 pt-8">
              <h3 className="font-serif text-xl font-semibold text-earth-600 mb-6">Donor Details</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="input-field" />
                  </div>
                  <div>
                    <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Phone *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 00000 00000" className="input-field" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="input-field" />
                  </div>
                  <div>
                    <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">PAN (for 80G)</label>
                    <input type="text" name="pan" value={form.pan} onChange={handleChange} placeholder="ABCDE1234F" className="input-field" maxLength={10} />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Address</label>
                  <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Your full address" className="input-field" />
                </div>
                <div>
                  <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Donation Purpose</label>
                  <select name="purpose" value={form.purpose} onChange={handleChange} className="input-field">
                    {donationPurposes.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-sans text-xs font-semibold text-earth-500 uppercase tracking-wider block mb-2">Message (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="A message for the families we serve..." className="input-field resize-none" />
                </div>

                {amount && (
                  <div className="bg-gold-100 border border-gold-200 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <p className="font-sans text-xs text-earth-400">Total Donation</p>
                      <p className="font-serif text-2xl font-bold text-earth-600">₹{Number(amount).toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-sans text-xs text-gold-400 font-semibold">Payment via Razorpay</p>
                      <p className="font-sans text-xs text-earth-400">Secure & encrypted</p>
                    </div>
                  </div>
                )}

                <button type="submit" disabled={loading} className="w-full btn-primary text-base py-4 justify-center">
                  {loading ? 'Processing...' : `💛 Donate ₹${amount ? Number(amount).toLocaleString('en-IN') : '___'}`}
                </button>
                <p className="font-sans text-xs text-center text-earth-400">
                  Razorpay payment gateway integration ready · 80G receipt generated automatically
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
