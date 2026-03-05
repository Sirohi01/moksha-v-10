// app/not-found.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-gradient px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6 animate-float inline-block">🕯️</div>
        <h1 className="font-serif text-5xl font-semibold text-earth-600 mb-4">404</h1>
        <p className="font-body text-earth-400 text-lg mb-8">
          This page could not be found. Perhaps it has moved, or the path was mistaken.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/help" className="btn-outline-gold">Emergency Help</Link>
        </div>
      </div>
    </div>
  )
}
