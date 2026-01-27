'use client'

import { motion } from 'framer-motion'
import { cardSlideUp, cardHover } from '@/lib/animations'

interface ProjectCardProps {
  title: string
  tagline: string
  description: string
  tags: string[]
  color?: 'watermelon' | 'mango' | 'lime'
}

const colorMap = {
  watermelon: 'bg-watermelon',
  mango: 'bg-mango',
  lime: 'bg-lime',
}

export default function ProjectCard({
  title,
  tagline,
  description,
  tags,
  color = 'lime',
}: ProjectCardProps) {
  return (
    <motion.div
      className="
        bg-cream
        border-3 border-black
        shadow-brutal
        hover:shadow-brutal-hover
        transition-shadow duration-200
        h-full
        flex flex-col
      "
      variants={cardSlideUp}
      whileHover={cardHover}
    >
      {/* Color bar at top */}
      <div className={`h-2 ${colorMap[color]} border-b-3 border-black`} />

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-heading font-bold text-xl uppercase mb-2 text-shadow-brutal">
          {title}
        </h3>

        {/* Tagline - handwritten style */}
        <p className="font-accent text-xl text-watermelon mb-4">
          {tagline}
        </p>

        {/* Description */}
        <p className="font-body text-sm text-charcoal/80 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t-2 border-black/10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                px-2 py-1
                bg-charcoal text-cream
                font-heading text-xs uppercase
                border-2 border-black
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
