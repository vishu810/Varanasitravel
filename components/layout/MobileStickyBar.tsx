'use client'
import { useEffect, useState } from 'react'

export default function MobileStickyBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000)
    return () => clearTimeout(timer)
  }, [])
  if (!show) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gold-500 py-3 text-center text-night-950 md:hidden">
      <button onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
        🎒 Plan My Varanasi Trip — Free
      </button>
    </div>
  )
}