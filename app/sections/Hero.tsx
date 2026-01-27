'use client'

import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown } from 'lucide-react'
import Button from '../components/Button'
import {
  heroTextContainer,
  heroTextItem,
  viewportSettings,
} from '@/lib/animations'

const storyLines = [
  { year: '2020', text: 'Watching Game of Thrones while farmers protested outside' },
  { year: '2024', text: 'Built $6.5M agritech company with zero knowledge' },
  { year: '2026', text: 'Learning AI to build products with agency' },
]

export default function Hero() {
  return (
    <section className="min-h-screen bg-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #1A1A1A 20px,
            #1A1A1A 21px
          )`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-160px)]">
          {/* Left column - Name and intro */}
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Meta info */}
            <motion.p
              variants={heroTextItem}
              className="font-heading text-sm uppercase tracking-wider text-charcoal/60 mb-4"
            >
              MS @ NYU · Graduating Dec 2026
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={heroTextItem}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold uppercase text-charcoal text-shadow-brutal mb-8"
            >
              Aryan
              <br />
              Thepade
            </motion.h1>

            {/* Pattern text */}
            <motion.div
              variants={heroTextItem}
              className="bg-charcoal text-cream p-4 border-3 border-black shadow-brutal mb-8 max-w-md"
            >
              <p className="font-accent text-xl sm:text-2xl">
                The pattern: See problem → Learn fast → Execute → Ship
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={heroTextItem}
              className="flex flex-wrap gap-4"
            >
              <Button href="/Aryan_Thepade_Resume.pdf" download>
                <Download size={18} />
                Download Resume
              </Button>
              <Button variant="outline" href="mailto:aryan.thepade@nyu.edu">
                <Mail size={18} />
                Email Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Timeline */}
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-black hidden sm:block" />

            {/* Story items */}
            <div className="space-y-8">
              {storyLines.map((line, index) => (
                <motion.div
                  key={line.year}
                  variants={heroTextItem}
                  className="relative pl-0 sm:pl-16"
                >
                  {/* Year dot */}
                  <div className="
                    hidden sm:flex
                    absolute left-0 top-1/2 -translate-y-1/2
                    w-12 h-12
                    bg-mango
                    border-3 border-black
                    shadow-brutal
                    items-center justify-center
                    font-heading font-bold text-sm
                    z-10
                  ">
                    {line.year}
                  </div>

                  {/* Content card */}
                  <div className={`
                    bg-cream
                    border-3 border-black
                    shadow-brutal
                    p-4 sm:p-6
                    ${index === 1 ? 'bg-lime/20' : ''}
                    ${index === 2 ? 'bg-watermelon/10' : ''}
                  `}>
                    <span className="sm:hidden font-heading font-bold text-sm text-mango block mb-2">
                      {line.year}
                    </span>
                    <p className="font-body text-lg text-charcoal">
                      {line.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-8 h-8 text-charcoal/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
