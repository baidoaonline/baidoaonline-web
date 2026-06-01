'use client'
import { useEffect } from 'react'

export default function ScrollTracker({ title }: { title: string }) {
  useEffect(() => {
    const thresholds = [25, 50, 75, 100]
    const fired = new Set<number>()

    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const pct = Math.round((scrolled / total) * 100)

      thresholds.forEach(t => {
        if (pct >= t && !fired.has(t)) {
          fired.add(t)
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'Article',
              event_label: title,
              value: t
            })
          }
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [title])

  return null
}
