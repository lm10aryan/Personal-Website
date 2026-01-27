'use client'

import { motion } from 'framer-motion'
import Button from '../components/Button'
import { sectionFadeIn, viewportSettings } from '@/lib/animations'

const requirements = [
  'Python/PyTorch/Transformers',
  'React/Next.js/Tailwind',
  'Stakeholder alignment',
  '0→1 execution',
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          className="text-center space-y-6"
          variants={sectionFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <p className="font-heading text-lg uppercase tracking-[0.2em] text-mango">
            LET&apos;S BUILD SOMETHING
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-shadow-brutal">
            Summer 2026 AI roles: Ship to real users, Messy 0→1 spaces, Move fast
          </h2>
          <p className="font-body text-lg">
            Contact: <span className="font-heading">aryan.thepade@nyu.edu</span>
          </p>
          <div className="flex justify-center">
            <Button href="mailto:aryan.thepade@nyu.edu">
              Email Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 bg-cream text-charcoal border-3 border-black shadow-brutal p-6"
          variants={sectionFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          transition={{ delay: 0.2 }}
        >
          <p className="font-heading text-sm uppercase mb-4">Requirements.txt</p>
          <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap">{requirements.map((req) => `- ${req}`).join('\n')}</pre>
        </motion.div>
      </div>
    </footer>
  )
}
