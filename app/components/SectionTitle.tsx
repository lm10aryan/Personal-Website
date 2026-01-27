'use client'

import { motion } from 'framer-motion'
import { sectionFadeIn, viewportSettings } from '@/lib/animations'

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({
  children,
  subtitle,
  className = '',
  align = 'left',
}: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 ${align === 'center' ? 'text-center' : ''} ${className}`}
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase text-charcoal text-shadow-brutal">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-charcoal/70 font-body max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
