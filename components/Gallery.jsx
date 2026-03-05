'use client'
// components/Gallery.jsx

import { useState } from 'react'
import Image from 'next/image'

export default function Gallery({ photos, categories }) {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active)

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-sans text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
              active === cat ? 'tab-active' : 'tab-inactive'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((photo, i) => (
          <div
            key={photo.id}
            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-soft"
            onClick={() => setSelected(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-600/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-cream-100 font-sans text-xs font-semibold">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-earth-600/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-cream-200 hover:text-white font-sans text-sm font-semibold"
            >
              ✕ Close
            </button>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image src={selected.src} alt={selected.alt} fill className="object-cover" />
            </div>
            <p className="text-center font-body text-cream-200 mt-4 text-sm">{selected.caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function VideoGallery({ videos, categories }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? videos : videos.filter((v) => v.category === active)

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-sans text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
              active === cat ? 'tab-active' : 'tab-inactive'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block card-warm overflow-hidden hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image src={video.thumbnail} alt={video.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-earth-600/40 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-warm-lg">
                  <span className="text-gold-400 text-xl ml-1">▶</span>
                </div>
              </div>
              <span className="absolute bottom-3 right-3 bg-earth-600/80 text-cream-100 font-sans text-xs px-2 py-1 rounded-md">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <span className="font-sans text-xs font-semibold text-gold-400 uppercase tracking-wider">{video.category}</span>
              <h3 className="font-serif text-base font-semibold text-earth-600 mt-1 group-hover:text-gold-400 transition-colors">
                {video.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
