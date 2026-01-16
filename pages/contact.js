import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Aryan Thepade</title>
      </Head>
      
      <Navigation />
      
      <main className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h1 className="font-serif text-display font-bold mb-12">
                  Let's Talk
                </h1>
                
                <p className="text-body text-warmgray mb-12">
                  I'm looking for Summer 2026 internships where I can learn 
                  applied AI at scale.
                </p>
                
                <p className="text-body text-warmgray mb-16">
                  If you're building something ambitious and need someone who 
                  executes in chaos, combines technical depth with business thinking, 
                  and ships relentlessly—let's connect.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <a
                    href="mailto:aryan@fasaltech.com"
                    className="p-8 bg-charcoal text-cream hover:bg-accent transition-colors group"
                  >
                    <div className="text-4xl mb-4">✉️</div>
                    <h3 className="font-serif text-h3 font-semibold mb-2">Email</h3>
                    <p className="text-sm opacity-80 group-hover:opacity-100">
                      aryan@fasaltech.com
                    </p>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/aryan-thepade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 bg-charcoal text-cream hover:bg-accent transition-colors group"
                  >
                    <div className="text-4xl mb-4">💼</div>
                    <h3 className="font-serif text-h3 font-semibold mb-2">LinkedIn</h3>
                    <p className="text-sm opacity-80 group-hover:opacity-100">
                      /in/aryan-thepade
                    </p>
                  </a>
                  
                  <a
                    href="https://github.com/lm10aryan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 bg-charcoal text-cream hover:bg-accent transition-colors group"
                  >
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="font-serif text-h3 font-semibold mb-2">GitHub</h3>
                    <p className="text-sm opacity-80 group-hover:opacity-100">
                      /lm10aryan
                    </p>
                  </a>
                  
                  <div className="p-8 bg-warmgray/5 border-2 border-warmgray/20">
                    <div className="text-4xl mb-4">📅</div>
                    <h3 className="font-serif text-h3 font-semibold mb-2 text-warmgray">
                      Calendar
                    </h3>
                    <p className="text-sm text-warmgray/70">
                      Coming soon
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-charcoal/10 pt-12">
                  <h3 className="font-serif text-h2 font-semibold mb-6">
                    Location & Availability
                  </h3>
                  <div className="space-y-2 text-warmgray">
                    <p>
                      <strong>Currently based in:</strong> New York, NY
                    </p>
                    <p>
                      <strong>Open to:</strong> San Francisco, Remote, Relocation
                    </p>
                    <p>
                      <strong>Available:</strong> May - August 2026 (Summer Internship)
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
