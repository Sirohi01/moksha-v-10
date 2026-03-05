'use client'
// app/gallery/page.js

import { useState } from 'react'
import Gallery, { VideoGallery } from '@/components/Gallery'
import { galleryHero, photoGallery, videoGallery, galleryCategories } from '@/config/galleryConfig'

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('photos')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-warm-gradient overflow-hidden">
        <div className="absolute inset-0 lotus-bg"></div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">{galleryHero.badge}</p>
          <h1 className="heading-xl mb-4">{galleryHero.title}</h1>
          <div className="divider-gold"></div>
          <p className="font-body text-earth-400 text-lg max-w-xl mx-auto">{galleryHero.subtitle}</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="flex gap-3 mb-10 border-b border-cream-200 pb-4">
            <button
              onClick={() => setActiveTab('photos')}
              className={`font-sans font-semibold px-6 py-2.5 rounded-full transition-all text-sm ${activeTab === 'photos' ? 'tab-active' : 'tab-inactive'}`}
            >
              📷 Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`font-sans font-semibold px-6 py-2.5 rounded-full transition-all text-sm ${activeTab === 'videos' ? 'tab-active' : 'tab-inactive'}`}
            >
              🎬 Video Gallery
            </button>
          </div>

          {activeTab === 'photos' ? (
            <Gallery photos={photoGallery} categories={galleryCategories.photos} />
          ) : (
            <VideoGallery videos={videoGallery} categories={galleryCategories.videos} />
          )}
        </div>
      </section>
    </>
  )
}
