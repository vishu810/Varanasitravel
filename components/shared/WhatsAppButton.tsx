'use client'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Varunaassi on WhatsApp"
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 md:bottom-6 md:right-6"
    >
      <FaWhatsapp className="h-7 w-7 text-white" />
    </a>
  )
}
