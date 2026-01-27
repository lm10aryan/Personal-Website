'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import StageCard from '../components/StageCard'
import {
  staggerContainer,
  timelineLine,
  viewportSettings,
} from '@/lib/animations'

const stages = [
  {
    number: 1,
    year: '2020',
    title: 'GUILT',
    subtitle: 'STARTED ANYWAY',
    description: 'Game of Thrones ending. Farmers walking 200km for prices. Felt guilty watching TV.',
    color: 'watermelon' as const,
  },
  {
    number: 2,
    year: '2020-2022',
    title: 'FAILURES',
    subtitle: 'EVERYTHING FAILED',
    description: 'App: 12 downloads. Manufacturing: 0 sales. Influencer: No traction. Shopify: No buyers. Total: $10K in 3 years.',
    color: 'mango' as const,
  },
  {
    number: 3,
    year: 'Feb 2022',
    title: 'BREAKTHROUGH',
    subtitle: 'TV MOMENT',
    description: 'Farmer on TV selling muskmelons at 10x. THE INSIGHT: Not technology. Economics.',
    color: 'lime' as const,
  },
  {
    number: 4,
    year: 'Sep 2021',
    title: 'EXECUTION',
    subtitle: 'THE TEST',
    description: 'Lulu needs 50 tons. Maharashtra flooding. Karnataka with zero contacts. Built 4 supply chains in 2 months.',
    color: 'mango' as const,
  },
  {
    number: 5,
    year: '2024',
    title: 'SCALE',
    subtitle: 'THE RESULT',
    description: "$6.5M · 2000 farmers · 5 states · 72% ML accuracy · India's first seedless watermelons at commercial scale",
    color: 'lime' as const,
  },
]

export default function FasalTechStory() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="How I went from zero knowledge to $6.5M in 4 years">
          The FasalTech Story
        </SectionTitle>

        {/* Horizontal timeline line - desktop */}
        <motion.div
          className="hidden lg:block relative h-1 bg-black mb-8 mx-8"
          variants={timelineLine}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {/* Stage dots */}
          {stages.map((_, index) => (
            <div
              key={index}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-mango border-3 border-black rounded-full"
              style={{ left: `${(index / (stages.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
            />
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {stages.map((stage) => (
            <StageCard
              key={stage.number}
              number={stage.number}
              year={stage.year}
              title={stage.title}
              subtitle={stage.subtitle}
              description={stage.description}
              color={stage.color}
            />
          ))}
        </motion.div>

        {/* Key insight callout */}
        <motion.div
          className="mt-12 bg-charcoal text-cream p-6 md:p-8 border-3 border-black shadow-brutal max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="font-accent text-2xl md:text-3xl text-center">
            &ldquo;The old system failed because incentives were misaligned. I didn&apos;t invent new technology—I created a system where everyone wins.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
