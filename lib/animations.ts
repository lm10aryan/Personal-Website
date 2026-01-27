import { Variants } from 'framer-motion'

// Custom easing
export const customEase = [0.16, 1, 0.3, 1]

// Hero text stagger animation
export const heroTextContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const heroTextItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
}

// Card slide up animation
export const cardSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
}

// Container for staggered children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Section fade in
export const sectionFadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
}

// Timeline stage animation
export const timelineStage: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: customEase,
    },
  },
}

// Timeline line grow
export const timelineLine: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: customEase,
      delay: 0.3,
    },
  },
}

// Button hover
export const buttonHover = {
  scale: 1.02,
  x: -4,
  y: -4,
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
}

export const buttonTap = {
  scale: 0.98,
  x: 0,
  y: 0,
}

// Card hover animation
export const cardHover = {
  x: -4,
  y: -4,
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
}

// Scroll-triggered viewport settings
export const viewportSettings = {
  once: true,
  amount: 0.2,
}
