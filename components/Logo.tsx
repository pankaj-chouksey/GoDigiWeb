'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  // Placeholder logo - Replace with actual logo image
  // To use: Place your logo file in public/logo.png or public/logo.svg
  // Then uncomment the Image component and remove the placeholder div
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${sizeClasses[size]} ${className} rounded-2xl bg-gradient-to-br from-mint-200 to-mint-400 flex items-center justify-center glow-mint`}
    >
      {/* Placeholder - Replace with actual logo */}
      <span className="text-dark-900 font-bold text-xl font-display">GW</span>
      
      {/* Uncomment when you have the logo file:
      <Image
        src="/logo.png"
        alt="GoDigiWeb Logo"
        width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        className="object-contain"
        priority
      />
      */}
    </motion.div>
  )
}

