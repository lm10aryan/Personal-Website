'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { staggerContainer, viewportSettings } from '@/lib/animations'

const projects = [
  {
    title: 'H-1B Immigration RAG',
    tagline: 'Legal Q&A where 99% accuracy with 1% hallucination is worthless',
    description: 'Built deterministic evaluation with 100-question benchmark. Must-include token matching. Tested 5 RAG strategies.',
    tags: ['RAG', 'Legal AI', 'Evaluation'],
    color: 'watermelon' as const,
  },
  {
    title: 'Pico LLM Interpretability',
    tagline: 'How do small language models form internal representations?',
    description: 'Mechanistic interpretability on 10M parameter models. Early layers: syntax. Late layers: semantics.',
    tags: ['Interpretability', 'Mechanistic', 'Small Models'],
    color: 'mango' as const,
  },
  {
    title: 'FasalTech ML Production',
    tagline: '72% accuracy vs 65% expert agronomists, available 24/7 on 2G networks',
    description: "Disease prediction for low-connectivity environments. The challenge wasn't the model—it was trust, bandwidth, and usability.",
    tags: ['ML Production', 'Agriculture', 'Low-Resource'],
    color: 'lime' as const,
  },
]

export default function Projects() {
  return (
    <section className="py-20 md:py-28 bg-lime/10 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Shipping AI systems built for real constraints" align="center">
          Projects
        </SectionTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tagline={project.tagline}
              description={project.description}
              tags={project.tags}
              color={project.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
