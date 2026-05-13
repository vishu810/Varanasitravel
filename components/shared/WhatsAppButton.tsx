'use client'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 md:bottom-6 md:right-6"
    >
      <FaWhatsapp className="h-7 w-7 text-white" />
    </a>
  )
}