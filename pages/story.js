import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

export default function Story() {
  return (
    <>
      <Head>
        <title>My Journey - Aryan Thepade</title>
      </Head>
      
      <Navigation />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-display font-bold mb-12 text-center">
                My Journey
              </h1>
              
              <div className="text-body prose-custom space-y-6 text-warmgray">
                <p className="text-h3 font-serif leading-relaxed">
                  The phone rang at 2 PM.
                </p>
                <p>
                  Lulu Hypermarket Dubai needed watermelons. During monsoon season. 
                  The entire state of Maharashtra was flooded.
                </p>
                <p>
                  After the meeting, I knew: deliver or die.
                </p>
                <p>
                  I bought a flight ticket to Andhra Pradesh that night. No contacts. 
                  Didn't speak the language. Didn't know where to look.
                </p>
                <p className="font-medium">
                  10-15% chance of finding anything. But I had to try.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Chapter 1: The Beginning */}
        <section className="section-padding bg-warmgray/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-serif text-h1 font-bold mb-8">
                  The Beginning
                </h2>
                <p className="text-warmgray/60 mb-8">2017-2020</p>
                
                <div className="space-y-6 text-body text-warmgray">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    Failed and Found Purpose
                  </h3>
                  <p>
                    I failed my first year of college. Depression hit hard. 
                    I had to repeat the entire year.
                  </p>
                  <p>
                    During that time, I saw something that changed everything: 
                    150,000 farmers marching 200 kilometers from Nashik to Mumbai 
                    in scorching heat. They were protesting for loan relief, fighting 
                    for their lives.
                  </p>
                  <p>
                    I had privilege. They were fighting for survival. I knew I had 
                    to do something.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The Selection
                  </h3>
                  <p>
                    Second year, I applied to Maharashtra Government's VJTI Technology 
                    Incubation Program. My idea: help farmers detect crop diseases 
                    through an app.
                  </p>
                  <p>
                    The interview was brutal. 15 minutes turned into 45. Three VCs 
                    grilled me on validation, technical constraints, everything. 
                    I walked out knowing I'd bombed it.
                  </p>
                  <p>
                    But I couldn't let it end there.
                  </p>
                  <p>
                    I spent the entire next week answering every question they'd asked, 
                    researching deeper, building a better case. Then I emailed them 
                    everything.
                  </p>
                  <p className="font-medium">
                    I was selected. Youngest participant. The only active student. 
                    Against 100+ applicants.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Chapter 2: The Learning */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-serif text-h1 font-bold mb-8">
                  The Learning
                </h2>
                <p className="text-warmgray/60 mb-8">2020-2022</p>
                
                <div className="space-y-6 text-body text-warmgray">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    COVID and the Crash Course
                  </h3>
                  <p>
                    March 2020: I launched FasalTech. Then COVID hit.
                  </p>
                  <p>
                    Stuck in my hometown Jalgaon, surrounded by farms. 
                    Blessing in disguise.
                  </p>
                  <p>
                    I knew nothing about coding (beyond basics) or farming. 
                    So I learned both simultaneously.
                  </p>
                  <p>
                    No ChatGPT. No easy answers. Just documentation, Stack Overflow, 
                    and conversations with expert farmers and agronomists across 
                    Maharashtra.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The App That Crashed
                  </h3>
                  <p>
                    I built the first version of the app. Launched it on Google 
                    Play Store.
                  </p>
                  <p>
                    Clicked login. It crashed.
                  </p>
                  <p>
                    Tried again. Crashed.
                  </p>
                  <p>
                    Third time. Crashed.
                  </p>
                  <p className="font-medium">
                    But I kept shipping. Version after version. I didn't wait 
                    for perfect. I knew: you've got to keep shipping and evolving. 
                    No perfect recipe. Just iterate.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    Building Mental Models
                  </h3>
                  <p>
                    For one year, I did nothing but learn: Talked to expert farmers 
                    across different regions. Contacted agronomists from top companies 
                    (Syngenta, Bayer, Nuziveedu Seeds). Met with agriculture 
                    researchers and professors.
                  </p>
                  <p>
                    Everyone had different approaches. Organic vs. chemical. 
                    Disease prevention vs. pest control. Budget-focused vs. 
                    yield-focused.
                  </p>
                  <p>
                    My job: synthesize it all into something farmers could actually use.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Chapter 3: The Breakthrough */}
        <section className="section-padding bg-warmgray/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-serif text-h1 font-bold mb-8">
                  The Breakthrough
                </h2>
                <p className="text-warmgray/60 mb-8">2022-2023</p>
                
                <div className="space-y-6 text-body text-warmgray">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The Moment It Clicked
                  </h3>
                  <p>
                    I helped a farmer named Tatya grow muskmelons using our 
                    advisory system.
                  </p>
                  <p>
                    His yield improved by 50%. We got him double the usual market rate.
                  </p>
                  <p className="font-medium">
                    We were featured on ABP Majha News. Signups increased 5x overnight.
                  </p>
                  <p>
                    This is when I knew it could work.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The Pivot
                  </h3>
                  <p>
                    But I realized: we were taking money from farmers who barely 
                    had any. That didn't feel right.
                  </p>
                  <p className="font-medium">
                    New strategy: What if we GAVE farmers money instead?
                  </p>
                  <p>
                    I contacted Syngenta Thailand and Malaysia. Imported seedless 
                    watermelon seeds—varieties that had never been grown commercially 
                    in India.
                  </p>
                  <p>
                    Contract farming. We provide seeds, expertise, guaranteed premium 
                    pricing. Farmers take the risk with our support.
                  </p>
                  <p>
                    First pilot: 25 acres. High-stakes. If it failed, we were done.
                  </p>
                  <p className="font-medium">
                    It succeeded. Massively.
                  </p>
                  <p>
                    Lulu Hypermarket Dubai loved the quality. We secured our first 
                    major export contract.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Chapter 4: The Challenge - THE CENTERPIECE */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-serif text-h1 font-bold mb-8 text-accent">
                  The Challenge
                </h2>
                <p className="opacity-60 mb-8">2023</p>
                
                <div className="space-y-6 text-body">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The Phone Call
                  </h3>
                  <p>
                    June 2023. Lulu called again.
                  </p>
                  <p>
                    "Can you supply regular watermelons? We need them now."
                  </p>
                  <p>
                    I looked outside. Monsoon everywhere. Every farm in Maharashtra 
                    underwater.
                  </p>
                  <p>
                    Impossible.
                  </p>
                  <p className="font-medium text-accent">
                    But if I didn't deliver, we'd lose our biggest client. 
                    The business would be over.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The Journey Begins
                  </h3>
                  <p>
                    I booked a flight to Andhra Pradesh that night.
                  </p>
                  <p>
                    No contacts there. Didn't speak Telugu. Didn't know which 
                    district even grew watermelons.
                  </p>
                  <p>
                    All I knew: it's not raining there. Maybe 10-15% chance 
                    I'd find something.
                  </p>
                  <p className="text-h3 font-serif font-medium mt-8 mb-8 text-accent">
                    Do or die.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    10 Days of Chaos
                  </h3>
                  <p>
                    Rented a car. Drove everywhere.
                  </p>
                  <p>
                    My strategy: Find logistics companies shipping produce to 
                    Mumbai—those are the export players. Work backwards to their 
                    suppliers.
                  </p>
                  <p>
                    Talk to shopkeepers. Find second and third-degree contacts. 
                    Inspect farms. Hit and miss. Day after day.
                  </p>
                  <p>
                    Challenges everywhere:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Vegetarian food hard to find in rural villages</li>
                    <li>No hotels—slept wherever I could</li>
                    <li>Communication barrier—had to figure out who to trust without language</li>
                    <li>Some people helped. Some duped me.</li>
                  </ul>
                  <p className="font-medium text-accent mt-8">
                    After 10 days: Found my first supplier.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The Breakthrough
                  </h3>
                  <p>
                    Then the confidence came.
                  </p>
                  <p>
                    For the next 1.5 months, I lived across Andhra Pradesh, Karnataka, 
                    Telangana. Visited almost every major district.
                  </p>
                  <p>
                    Built the entire supply chain from scratch. Farm to logistics 
                    to Mumbai to Dubai.
                  </p>
                  <p>
                    The established cartels—people who'd controlled this market 
                    for 20 years—were shocked. A "kid from Mumbai" was disrupting 
                    their network.
                  </p>
                  <p>
                    Better rates. Better quality. Direct farmer relationships.
                  </p>
                  <p className="font-medium text-accent">
                    We saved the business.
                  </p>
                  <p className="text-h3 font-serif mt-8">
                    More importantly: My team learned we could do anything.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Chapter 5: The Scale */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-serif text-h1 font-bold mb-8">
                  The Scale
                </h2>
                <p className="text-warmgray/60 mb-8">2023-2025</p>
                
                <div className="space-y-6 text-body text-warmgray">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    Going Big
                  </h3>
                  <p>
                    We expanded to 300 acres of seedless watermelons. Then 600 acres.
                  </p>
                  <p>
                    Built supply chain across 4 states: Maharashtra, Madhya Pradesh, 
                    Karnataka, Andhra Pradesh.
                  </p>
                  <p>
                    Secured contracts with: Lulu Hypermarket Dubai, Reliance Fresh, 
                    Namdhari's, Zepto, Swiggy Instamart.
                  </p>
                  <p>
                    Impacted 2,000+ farmers. Doubled their incomes through premium crops.
                  </p>
                  <p className="font-medium">
                    Grew from $2,000 in 2023 to $4M by 2024.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The Realization
                  </h3>
                  <p>
                    But I started to see the limits.
                  </p>
                  <p>
                    Agriculture innovation is SLOW: 3-6 months per crop cycle. 
                    Weather dependency—you can do everything right and still fail. 
                    Limited scalability without massive capital. Hard to iterate 
                    and learn fast.
                  </p>
                  <p className="font-medium">
                    I wanted to solve problems at 10x the speed.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Chapter 6: The Turning Point */}
        <section className="section-padding bg-warmgray/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-serif text-h1 font-bold mb-8">
                  The Turning Point
                </h2>
                <p className="text-warmgray/60 mb-8">2024</p>
                
                <div className="space-y-6 text-body text-warmgray">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The ChatGPT Moment
                  </h3>
                  <p>
                    November 2022: ChatGPT launched.
                  </p>
                  <p>
                    I was blown away. We'd spent YEARS building manual advisory 
                    systems, SOPs, custom recommendations.
                  </p>
                  <p className="font-medium">
                    AI could do this 10x better. 100x faster.
                  </p>
                  <p>
                    The future wasn't about manual processes. It was about building 
                    intelligent systems that could scale infinitely.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    Walking in Norway
                  </h3>
                  <p>
                    I was in Norway, walking through a garden, when it hit me:
                  </p>
                  <p className="italic">
                    "This isn't my future. I've built a successful business, 
                    but I'm not solving problems at the scale I want."
                  </p>
                  <p>
                    I didn't know exactly what I'd do next. But I knew I needed 
                    to learn from the best.
                  </p>
                  <p className="font-medium">
                    I decided to come to America. To NYU. To learn AI from the 
                    ground up.
                  </p>
                  <p>
                    Not just theory. But how to build systems that solve real 
                    problems at massive scale.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Chapter 7: The Present */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-serif text-h1 font-bold mb-8">
                  The Present
                </h2>
                <p className="text-warmgray/60 mb-8">2025-2026</p>
                
                <div className="space-y-6 text-body text-warmgray">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    Learning to Build the Future
                  </h3>
                  <p>
                    At NYU, I'm getting systematic depth in AI/ML: Understanding 
                    transformer architectures from first principles. Learning how 
                    to evaluate ML systems rigorously. Building production-quality 
                    AI applications.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    What I've Built So Far
                  </h3>
                  <div className="pl-6 border-l-2 border-accent space-y-4 my-8">
                    <div>
                      <p className="font-semibold">H-1B Immigration RAG System:</p>
                      <p>
                        Evaluated 5 different RAG architectures. Designed deterministic 
                        evaluation methodology. Published technical report. Achieved 
                        76% accuracy with hybrid retrieval at 60% lower latency.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Transformer Interpretability:</p>
                      <p>
                        Analyzed layer specialization. Discovered distinct functional 
                        roles. Connected findings to Anthropic and DeepSeek research.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    The Goal
                  </h3>
                  <p className="font-medium">
                    I'm not here just to learn theory.
                  </p>
                  <p>
                    I'm here to learn how world-class teams build and ship AI at scale. 
                    Then take that knowledge to solve 10x bigger problems.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Chapter 8: What's Next */}
        <section className="section-padding bg-charcoal text-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-serif text-h1 font-bold mb-8 text-accent">
                  What's Next
                </h2>
                
                <div className="space-y-6 text-body">
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    Summer 2026
                  </h3>
                  <p>
                    I'm looking for an internship where I can learn applied AI at 
                    a startup solving hard problems.
                  </p>
                  <p>
                    I want to see how great teams: Ship AI products fast. Make 
                    tradeoffs between accuracy and latency. Build systems that 
                    work in production, not just papers. Scale from prototype to 
                    millions of users.
                  </p>
                  
                  <h3 className="font-serif text-h2 font-semibold mt-12 mb-4">
                    What I Bring
                  </h3>
                  <p>
                    If you're building something ambitious and need someone who:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 my-6">
                    <li>Diagnoses problems at a systems level</li>
                    <li>Executes in chaos</li>
                    <li>Combines technical depth with business thinking</li>
                    <li>Ships relentlessly until breakthrough</li>
                  </ul>
                  <p className="text-h3 font-serif font-medium mt-12 mb-8 text-accent">
                    Let's talk.
                  </p>
                  
                  <div className="flex gap-6 mt-8">
                    <a
                      href="mailto:aryan@fasaltech.com"
                      className="px-8 py-4 bg-accent text-charcoal font-medium hover:opacity-80 transition-opacity"
                    >
                      Email Me
                    </a>
                    <a
                      href="https://linkedin.com/in/aryan-thepade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 border-2 border-cream text-cream font-medium hover:bg-cream hover:text-charcoal transition-colors"
                    >
                      LinkedIn
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
