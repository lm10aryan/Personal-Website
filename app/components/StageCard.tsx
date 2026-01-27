'use client'

import { motion } from 'framer-motion'
import { timelineStage, cardHover } from '@/lib/animations'

interface StageCardProps {
  number: number
  year: string
  title: string
  subtitle: string
  description: string
  color: 'watermelon' | 'mango' | 'lime'
}

const colorMap = {
  watermelon: 'bg-watermelon',
  mango: 'bg-mango',
  lime: 'bg-lime',
}

const accentMap = {
  watermelon: 'text-watermelon',
  mango: 'text-mango',
  lime: 'text-lime',
}

export default function StageCard({
  number,
  year,
  title,
  subtitle,
  description,
  color,
}: StageCardProps) {
  return (
    <motion.div
      className="relative"
      variants={timelineStage}
      whileHover={cardHover}
    >
      {/* Stage number indicator */}
      <div className={`
        absolute -top-4 -left-2
        w-10 h-10
        ${colorMap[color]}
        border-3 border-black
        shadow-brutal
        flex items-center justify-center
        font-heading font-bold text-lg
        z-10
      `}>
        {number}
      </div>

      {/* Card */}
      <div className="
        bg-cream
        border-3 border-black
        shadow-brutal
        hover:shadow-brutal-hover
        transition-shadow duration-200
        p-6 pt-8
        h-full
      ">
        {/* Year badge */}
        <span className={`
          inline-block
          px-3 py-1
          ${colorMap[color]}
          border-2 border-black
          font-heading font-bold text-xs uppercase
          mb-3
        `}>
          {year}
        </span>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl uppercase mb-1 text-shadow-brutal">
          {title}
        </h3>

        {/* Subtitle - handwritten accent */}
        <p className={`font-accent text-2xl ${accentMap[color]} mb-3`}>
          {subtitle}
        </p>

        {/* Description */}
        <p className="font-body text-sm text-charcoal/80 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
