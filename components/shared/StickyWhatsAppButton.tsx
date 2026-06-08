'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function StickyWhatsAppButton() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  
  // Don't show on thank-you page
  const isThankYouPage = pathname === '/thank-you'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isThankYouPage) return null

  const whatsappLink = 'https://wa.me/919319974438'

  const bounceVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2,
      }
    }
  }

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 md:bottom-10 right-6 md:right-8 z-30 flex items-center gap-2 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition"
      variants={bounceVariants}
      animate="animate"
      whileHover={{ scale: 1.1 }}
    >
      {/* Mobile: Icon only */}
      <div className="md:hidden flex items-center justify-center h-14 w-14 rounded-full">
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.393-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.915 1.515c-1.428.823-2.566 1.988-2.982 3.357-.418 1.37-.313 2.832.287 4.129.898 1.934 2.594 3.406 4.666 4.079.829.276 1.64.423 2.43.431a9.91 9.91 0 004.867-1.261c1.325-.783 2.42-1.902 3.048-3.237.629-1.334.808-2.837.422-4.33-.734-2.943-3.277-5.149-6.36-5.526-.895-.12-1.814-.047-2.663.181z"/>
        </svg>
      </div>

      {/* Desktop: Icon + Text */}
      <div className="hidden md:flex items-center gap-3 px-5 py-4">
        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.413-2.393-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.915 1.515c-1.428.823-2.566 1.988-2.982 3.357-.418 1.37-.313 2.832.287 4.129.898 1.934 2.594 3.406 4.666 4.079.829.276 1.64.423 2.43.431a9.91 9.91 0 004.867-1.261c1.325-.783 2.42-1.902 3.048-3.237.629-1.334.808-2.837.422-4.33-.734-2.943-3.277-5.149-6.36-5.526-.895-.12-1.814-.047-2.663.181z"/>
        </svg>
        <span className="text-white font-semibold">Chat on WhatsApp</span>
      </div>
    </motion.a>
  )
}
