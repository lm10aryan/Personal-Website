'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Brain, Users, Rocket } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import {
  staggerContainer,
  cardSlideUp,
  viewportSettings,
  cardHover,
} from '@/lib/animations'

const courses = [
  {
    name: 'Building LLM Reasoners',
    topics: 'Transformers, FlashAttention, RLHF, Chain-of-thought, Agentic systems',
    status: 'Currently implementing FlashAttention from scratch',
    icon: <Brain size={24} strokeWidth={2.5} />,
    color: 'bg-watermelon',
  },
  {
    name: 'Leadership & Stakeholder Management',
    topics: 'Aligning misaligned parties',
    icon: <Users size={24} strokeWidth={2.5} />,
    color: 'bg-lime',
  },
  {
    name: 'Lean Launch Pad',
    topics: 'Ship fast, validate faster',
    icon: <Rocket size={24} strokeWidth={2.5} />,
    color: 'bg-mango',
  },
]

export default function Now() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <GraduationCap size={40} className="text-watermelon" strokeWidth={2.5} />
          <SectionTitle className="!mb-0">
            Now @ NYU
          </SectionTitle>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left - Why AI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-2xl uppercase text-shadow-brutal mb-6">
              Why AI
            </h3>

            <div className="space-y-6">
              <div className="bg-lime/20 p-6 border-3 border-black shadow-brutal">
                <p className="font-body text-lg leading-relaxed">
                  AI is creating the same opportunity I had with FasalTech.
                </p>
              </div>

              <div className="space-y-4 font-body text-charcoal/80">
                <p>
                  <span className="font-heading font-bold text-charcoal">Then:</span> Agriculture had high barriers. I found a way around it by building win-win systems.
                </p>
                <p>
                  <span className="font-heading font-bold text-charcoal">Now:</span> Building products has high barriers. AI is lowering them.
                </p>
              </div>

              <div className="bg-charcoal text-cream p-6 border-3 border-black shadow-brutal">
                <p className="font-accent text-xl">
                  The goal: Learn AI at a foundational level so I can build products with agency.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Courses */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h3 className="font-heading font-bold text-2xl uppercase text-shadow-brutal mb-6">
              Current Courses
            </h3>

            <div className="space-y-4">
              {courses.map((course) => (
                <motion.div
                  key={course.name}
                  className="
                    bg-cream
                    border-3 border-black
                    shadow-brutal
                    hover:shadow-brutal-hover
                    transition-shadow duration-200
                    overflow-hidden
                  "
                  variants={cardSlideUp}
                  whileHover={cardHover}
                >
                  {/* Color bar */}
                  <div className={`h-1 ${course.color}`} />

                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`
                        p-2
                        ${course.color}
                        border-2 border-black
                        text-charcoal
                      `}>
                        {course.icon}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-lg uppercase">
                          {course.name}
                        </h4>
                        <p className="font-body text-sm text-charcoal/70 mt-1">
                          {course.topics}
                        </p>
                        {course.status && (
                          <p className="font-accent text-lg text-watermelon mt-2">
                            {course.status}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
