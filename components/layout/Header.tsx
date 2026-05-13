'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[rgba(201,163,125,0.3)] bg-[rgba(236,209,184,0.92)] backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-2xl font-bold text-[#B45309]">
          Varunaassi
        </Link>
        <nav className="hidden gap-8 md:flex">
          <Link href="/experiences" className="text-[#402813] font-medium hover:text-[#D97706] transition">Experiences</Link>
          <Link href="/packages" className="text-[#402813] font-medium hover:text-[#D97706] transition">Packages</Link>
          <Link href="/itinerary" className="text-[#402813] font-medium hover:text-[#D97706] transition">Build Itinerary</Link>
          <Link href="/about" className="text-[#402813] font-medium hover:text-[#D97706] transition">About</Link>
          <Link href="/contact" className="text-[#402813] font-medium hover:text-[#D97706] transition">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col space-y-4 bg-[rgba(217,119,6,0.06)] p-4 md:hidden">
          <Link href="/experiences" className="text-[#402813] font-medium hover:text-[#D97706] transition">Experiences</Link>
          <Link href="/packages" className="text-[#402813] font-medium hover:text-[#D97706] transition">Packages</Link>
          <Link href="/itinerary" className="text-[#402813] font-medium hover:text-[#D97706] transition">Build Itinerary</Link>
          <Link href="/about" className="text-[#402813] font-medium hover:text-[#D97706] transition">About</Link>
          <Link href="/contact" className="text-[#402813] font-medium hover:text-[#D97706] transition">Contact</Link>
        </div>
      )}
    </header>
  )
}