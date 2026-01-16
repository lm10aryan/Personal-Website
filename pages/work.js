import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

export default function Work() {
  return (
    <>
      <Head>
        <title>My Work - Aryan Thepade</title>
      </Head>
      
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <FadeIn>
              <h1 className="font-serif text-display font-bold mb-12 text-center">
                What I've Built
              </h1>
            </FadeIn>
          </div>
        </section>
        
        {/* FasalTech */}
        <section className="section-padding bg-warmgray/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="font-serif text-h1 font-bold mb-2">
                      FasalTech
                    </h2>
                    <p className="text-warmgray">
                      Agriculture Technology Platform | 2020 - 2025
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">
                      $0 → $4M
                    </div>
                    <p className="text-sm text-warmgray">in 4 years</p>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">
                      2,000+
                    </div>
                    <p className="text-sm text-warmgray">farmers impacted</p>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">
                      600
                    </div>
                    <p className="text-sm text-warmgray">acres, 4 states</p>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">
                      5+
                    </div>
                    <p className="text-sm text-warmgray">major contracts</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-body text-warmgray">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    What I Built
                  </h3>
                  
                  <div className="pl-6 border-l-2 border-accent space-y-6">
                    <div>
                      <p className="font-semibold mb-2">ML & Product</p>
                      <ul className="space-y-2 text-sm leading-relaxed">
                        <li>• CNN-based crop disease prediction (72% accuracy, 30% loss reduction)</li>
                        <li>• 15-day weather forecasting with crop phenology for disease onset prediction</li>
                        <li>• Improved yields 30-40% on average</li>
                        <li>• Full-stack mobile app (Flutter/Django/MySQL) serving 10,000+ users</li>
                        <li>• Real-time weather alerts, SMS notifications, personalized advisory</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2">Business & Operations</p>
                      <ul className="space-y-2 text-sm leading-relaxed">
                        <li>• Pioneered seedless watermelon cultivation in India at commercial scale (25 → 600 acres)</li>
                        <li>• Doubled farmer incomes through premium varieties and guaranteed pricing</li>
                        <li>• Built multi-state supply chain from scratch in 8 months</li>
                        <li>• Secured contracts: Lulu Dubai, Reliance, Namdhari's, Zepto, Swiggy</li>
                        <li>• Selected as youngest participant in Maharashtra Government VJTI Incubation Program</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 p-6 mt-8">
                    <p className="font-semibold mb-2">Key Lesson</p>
                    <p className="text-sm">
                      Execution in chaos. I built supply chains across unfamiliar regions 
                      with no language skills, no contacts, and no established roadmap. 
                      When others said impossible, I figured it out.
                    </p>
                  </div>
                  
                  <p className="text-sm text-warmgray/70 mt-6">
                    <strong>Tech Stack:</strong> Flutter • Django • MySQL • Python • CNNs • 
                    Weather API • Real-time notifications
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* H-1B RAG System */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="font-serif text-h1 font-bold mb-2">
                      H-1B Immigration RAG System
                    </h2>
                    <p className="text-warmgray">
                      Production ML Evaluation | Fall 2025
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 text-body text-warmgray">
                  <p>
                    Evaluated 5 RAG retrieval architectures on a curated 100-question 
                    immigration law benchmark. Designed deterministic evaluation 
                    methodology to ensure legal correctness in regulated domains.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    Key Findings
                  </h3>
                  <ul className="space-y-2 pl-6">
                    <li>• Hybrid retrieval (Dense + BM25) achieves 76% accuracy at 11.4s latency</li>
                    <li>• Captures 90% of enhanced pipeline gains at 60% lower response time</li>
                    <li>• Revealed systematic failure modes where simpler retrievers miss disqualifying conditions</li>
                    <li>• Published technical report documenting accuracy-latency tradeoffs for production deployment</li>
                  </ul>
                  
                  <div className="bg-accent/10 p-6 mt-8">
                    <p className="font-semibold mb-2">What This Shows</p>
                    <p className="text-sm">
                      I don't just build ML systems—I evaluate them rigorously. Production AI 
                      requires understanding tradeoffs: accuracy vs latency, complexity vs reliability, 
                      enhanced vs practical.
                    </p>
                  </div>
                  
                  <p className="text-sm text-warmgray/70 mt-6">
                    <strong>Tech Stack:</strong> Python • LangChain • FAISS • Claude API • 
                    sentence-transformers • rank fusion • query expansion • reranking
                  </p>
                  
                  <div className="flex gap-4 mt-8">
                    <a
                      href="https://github.com/lm10aryan/RAG-Visa-LLM-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-charcoal text-cream text-sm font-medium hover:bg-accent transition-colors"
                    >
                      View on GitHub
                    </a>
                    <a
                      href="https://github.com/lm10aryan/RAG-Visa-LLM-Project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-charcoal text-charcoal text-sm font-medium hover:bg-charcoal hover:text-cream transition-colors"
                    >
                      Read Technical Paper
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Transformer Interpretability */}
        <section className="section-padding bg-warmgray/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="font-serif text-h1 font-bold mb-2">
                      Transformer Architecture Interpretability
                    </h2>
                    <p className="text-warmgray">
                      ML Research | Fall 2025
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 text-body text-warmgray">
                  <p>
                    Analyzed attention patterns and layer specialization in a 12-layer 
                    transformer trained on TinyStories dataset. Discovered distinct 
                    functional roles across network depth.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    Key Findings
                  </h3>
                  <ul className="space-y-2 pl-6">
                    <li>• Early layers encode syntax and positional information</li>
                    <li>• Late layers perform semantic reasoning and task-specific optimization</li>
                    <li>• Implemented causal intervention experiments revealing emergent geometric structure</li>
                    <li>• Connected findings to Anthropic and DeepSeek interpretability research</li>
                  </ul>
                  
                  <div className="bg-accent/10 p-6 mt-8">
                    <p className="font-semibold mb-2">What This Shows</p>
                    <p className="text-sm">
                      I'm building foundational understanding of how AI systems work 
                      internally—not just using them as black boxes.
                    </p>
                  </div>
                  
                  <p className="text-sm text-warmgray/70 mt-6">
                    <strong>Tech Stack:</strong> PyTorch • Matplotlib • Attention visualization • 
                    Embedding analysis • Causal interventions
                  </p>
                  
                  <div className="flex gap-4 mt-8">
                    <a
                      href="https://github.com/lm10aryan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-charcoal text-cream text-sm font-medium hover:bg-accent transition-colors"
                    >
                      View on GitHub
                    </a>
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
