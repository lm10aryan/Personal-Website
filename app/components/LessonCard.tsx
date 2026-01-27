'use client'

import { motion } from 'framer-motion'
import { cardSlideUp, cardHover } from '@/lib/animations'

interface LessonCardProps {
  number: number
  title: string
  description: string
  icon?: React.ReactNode
}

export default function LessonCard({
  number,
  title,
  description,
  icon,
}: LessonCardProps) {
  return (
    <motion.div
      className="
        relative
        bg-cream
        border-3 border-black
        shadow-brutal
        hover:shadow-brutal-hover
        transition-shadow duration-200
        p-6
        h-full
      "
      variants={cardSlideUp}
      whileHover={cardHover}
    >
      {/* Number badge */}
      <div className="
        absolute -top-3 -right-3
        w-8 h-8
        bg-mango
        border-3 border-black
        shadow-[2px_2px_0_black]
        flex items-center justify-center
        font-heading font-bold text-sm
      ">
        {number}
      </div>

      {/* Icon */}
      {icon && (
        <div className="mb-4 text-lime">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="font-heading font-bold text-lg uppercase mb-3 text-shadow-brutal leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-charcoal/80 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
