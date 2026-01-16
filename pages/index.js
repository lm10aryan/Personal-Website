import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aryan Thepade - Builder, Founder, AI Engineer</title>
      </Head>
      
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              <h1 className="font-serif text-display font-bold mb-8 leading-tight">
                I build businesses that solve impossible problems.
              </h1>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-serif text-h1 text-warmgray mb-12"
              >
                Now I'm learning AI to solve harder ones.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-body text-warmgray max-w-2xl mb-12"
              >
                <p className="mb-4">I'm Aryan Thepade.</p>
                <p>
                  I scaled a $4M agriculture business by executing in chaos. 
                  At NYU, I'm learning how AI can solve problems 10x bigger.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex gap-6"
              >
                <Link
                  href="/story"
                  className="px-8 py-4 bg-charcoal text-cream font-medium hover:bg-accent transition-colors duration-300"
                >
                  Read My Story
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-4 border-2 border-charcoal text-charcoal font-medium hover:bg-charcoal hover:text-cream transition-colors duration-300"
                >
                  See My Work
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-12">
              <FadeIn>
                <div className="text-center md:text-left">
                  <div className="text-6xl font-serif font-bold mb-4 text-accent">
                    $0 → $4M
                  </div>
                  <div className="text-body opacity-80">
                    in 4 years
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="text-center md:text-left">
                  <div className="text-6xl font-serif font-bold mb-4 text-accent">
                    2,000+
                  </div>
                  <div className="text-body opacity-80">
                    farmers impacted<br />
                    600 acres, 4 states
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="text-center md:text-left">
                  <div className="text-6xl font-serif font-bold mb-4 text-accent">
                    First
                  </div>
                  <div className="text-body opacity-80">
                    Seedless watermelons<br />
                    at scale in India
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Preview Section */}
        <section className="section-padding">
          <div className="container-custom">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-h1 font-bold mb-8">
                  From Failure to $4M
                </h2>
                <p className="text-body text-warmgray mb-12">
                  I failed my first year of college. Started a company with no coding skills 
                  and zero farming knowledge. Spent 2 years failing. Then flew to an unfamiliar 
                  state with no contacts and built a supply chain in 10 days.
                </p>
                <Link
                  href="/story"
                  className="inline-block text-accent font-medium hover:opacity-70 transition-opacity"
                >
                  Read the full story →
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
