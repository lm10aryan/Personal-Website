'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { staggerContainer, cardSlideUp, cardHover, viewportSettings } from '@/lib/animations'

const articles = [
  {
    title: 'What I Learned from Moving 50 Tons of Watermelon',
    description: 'Operations lessons that apply to AI systems',
    date: 'Jan 2026',
  },
  {
    title: 'Costco, Spinneys, and the Law of AI Justice',
    description: 'Why RAG evaluation matters in high-stakes domains',
    date: 'Dec 2025',
  },
  {
    title: 'From Last Semester: Building LLMs from Scratch',
    description: 'What implementing FlashAttention taught me about attention',
    date: 'Nov 2025',
  },
]

export default function Writing() {
  return (
    <section className="py-20 md:py-28 bg-watermelon/5 border-t-4 border-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Long-form thinking about AI systems and execution" align="center">
          Writing
        </SectionTitle>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              className="
                bg-cream
                border-3 border-black
                shadow-brutal
                hover:shadow-brutal-hover
                transition-shadow duration-200
                p-6
              "
              variants={cardSlideUp}
              whileHover={cardHover}
            >
              <p className="font-heading text-sm uppercase text-charcoal/60 mb-2">
                {article.date}
              </p>
              <h3 className="font-heading font-bold text-2xl uppercase text-shadow-brutal mb-3">
                {article.title}
              </h3>
              <p className="font-body text-charcoal/80">
                {article.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
