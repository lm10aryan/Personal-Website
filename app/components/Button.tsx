'use client'

import { motion } from 'framer-motion'
import { buttonHover, buttonTap } from '@/lib/animations'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
  download?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  download = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-6 py-3
    font-heading font-bold uppercase tracking-wide
    text-sm
    border-3 border-black
    transition-shadow duration-200
    cursor-pointer
  `

  const variants = {
    primary: `
      bg-watermelon text-charcoal
      shadow-brutal
      hover:shadow-brutal-hover
    `,
    outline: `
      bg-transparent text-charcoal
      shadow-brutal
      hover:bg-mango hover:shadow-brutal-hover
    `,
  }

  const buttonContent = (
    <motion.span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={buttonHover}
      whileTap={buttonTap}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} download={download}>
        {buttonContent}
      </a>
    )
  }

  return (
    <button onClick={onClick} type="button">
      {buttonContent}
    </button>
  )
}
