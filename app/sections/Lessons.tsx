'use client'

import { motion } from 'framer-motion'
import { Users, Zap, Cpu, TrendingUp } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import LessonCard from '../components/LessonCard'
import { staggerContainer, viewportSettings } from '@/lib/animations'

const lessons = [
  {
    number: 1,
    title: 'Stakeholder alignment is everything',
    description: "The old system failed because farmers, middlemen, and buyers had misaligned incentives. I didn't invent new technology - I created a system where everyone's incentives pointed in the same direction.",
    icon: <Users size={32} strokeWidth={2.5} />,
  },
  {
    number: 2,
    title: 'Execution beats ideas',
    description: 'I had zero domain knowledge, zero contacts, zero technical skills. But I kept executing. Built 4 supply chains in 2 months because someone needed watermelons.',
    icon: <Zap size={32} strokeWidth={2.5} />,
  },
  {
    number: 3,
    title: "The hard part isn't the tech",
    description: 'Building the ML model was 20% of the challenge. The other 80% was: How do you get farmers to trust AI? How do you make it work on 2G? Systems design > algorithm design.',
    icon: <Cpu size={32} strokeWidth={2.5} />,
  },
  {
    number: 4,
    title: 'Learning velocity > domain expertise',
    description: "I went from 'doesn't know anything about farming' to 'coordinating 2000 farmers across 5 states' in 4 years. Not because I'm special - because I learned fast and executed.",
    icon: <TrendingUp size={32} strokeWidth={2.5} />,
  },
]

export default function Lessons() {
  return (
    <section className="py-20 md:py-28 bg-mango/10 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="What FasalTech taught me about building things">
          Lessons Learned
        </SectionTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.number}
              number={lesson.number}
              title={lesson.title}
              description={lesson.description}
              icon={lesson.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
