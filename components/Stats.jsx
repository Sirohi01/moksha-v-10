'use client'
// components/Stats.jsx

import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const numericTarget = parseInt(target.toString().replace(/[^0-9]/g, ''))
    if (!numericTarget) return

    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericTarget))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatItem({ stat, animate }) {
  const numericValue = parseInt(stat.value.toString().replace(/[^0-9]/g, ''))
  const count = useCountUp(numericValue, 2000, animate)

  const displayValue = stat.value.toString().includes('/')
    ? stat.value
    : isNaN(numericValue) || !animate
    ? stat.value
    : count.toLocaleString('en-IN') + (stat.suffix || '')

  return (
    <div className="text-center group">
      <div className="text-4xl mb-3 group-hover:animate-float transition-all">{stat.icon}</div>
      <div className="stat-number font-serif text-4xl sm:text-5xl font-bold mb-2">
        {displayValue}
      </div>
      <div className="font-sans text-sm text-earth-400 uppercase tracking-wider">{stat.label}</div>
    </div>
  )
}

export default function Stats({ stats, badge, title }) {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-padding lotus-bg">
      <div className="container-max">
        {(badge || title) && (
          <div className="text-center mb-16">
            {badge && <p className="section-label">{badge}</p>}
            {title && <h2 className="heading-lg">{title}</h2>}
            <div className="divider-gold"></div>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  )
}
