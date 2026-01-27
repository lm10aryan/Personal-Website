import Head from 'next/head'
import Link from 'next/link'
import WindowCard from '../components/WindowCard'
import RetroButton from '../components/RetroButton'

export default function Story() {
  return (
    <>
      <Head>
        <title>My Story - Aryan Thepade</title>
      </Head>

      {/* Navigation */}
      <nav className="retro-nav">
        <Link href="/" className="retro-nav-logo">
          ARYAN THEPADE
        </Link>
        <div className="retro-nav-links">
          <Link href="/story" className="retro-nav-link">
            [STORY]
          </Link>
          <Link href="/now" className="retro-nav-link">
            [NOW]
          </Link>
          <a href="/resume.pdf" className="retro-nav-link">
            [RESUME]
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section style={{ paddingTop: '80px', paddingBottom: '60px' }}>
          <div className="container-narrow">
            <WindowCard title="STORY.exe" rotate={-1}>
              <h1 className="text-hero">HOW I BUILT $4M WITHOUT KNOWING FARMING OR CODING</h1>
            </WindowCard>
          </div>
        </section>

        {/* Act 1: The Guilt */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">ACT 1: THE GUILT</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <p className="text-body"><strong>June 2020.</strong></p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                I was in my dorm room watching Game of Thrones. Outside, thousands of farmers
                were marching to the state capital. Drought. Crop failures. Suicides.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                I kept watching the show.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                The next day, the guilt wouldn&apos;t leave. I&apos;m an engineer. I should be able to help.
                I submitted a project proposal to help farmers. I had zero knowledge about agriculture.
                Zero connections in the industry. Just guilt and a vague idea that technology could help.
              </p>

              <WindowCard title="STATUS.log" colorDot="orange" rotate={2} style={{ marginTop: '32px' }}>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', margin: 0 }}>
{`> proposal.submit()
STATUS: APPROVED

knowledge_farming = 0
knowledge_coding = "basics"
connections = []

// They approved it.
// Now I had to actually do something.`}
                </pre>
              </WindowCard>
            </div>
          </div>
        </section>

        {/* Act 2: Everything Failed */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">ACT 2: EVERYTHING FAILED</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <WindowCard title="ATTEMPT_1.js" colorDot="pink" rotate={-1}>
                <h3 className="text-h2">First Attempt: Build an App</h3>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Farmers can use it to get better prices.
                </p>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginTop: '16px', color: '#c41e3a' }}>
{`ERROR: Most farmers don't have smartphones.
ERROR: The ones who do don't trust apps
       from random engineering students.

downloads = 12  // 7 were my friends testing it`}
                </pre>
              </WindowCard>

              <WindowCard title="ATTEMPT_2.js" colorDot="teal" rotate={1} style={{ marginTop: '32px' }}>
                <h3 className="text-h2">Second Attempt: Sell Pesticides</h3>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Better pesticides = more profit for farmers.
                </p>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginTop: '16px', color: '#c41e3a' }}>
{`ERROR: Incentive structure broken.
ERROR: Local agents made money on volume,
       not outcomes.
ERROR: Farmers couldn't afford to experiment.

sales = 0`}
                </pre>
              </WindowCard>

              <p className="text-h2" style={{ marginTop: '32px', textAlign: 'center' }}>
                I was failing in a domain I didn&apos;t understand,<br/>
                with people who had no reason to trust me.
              </p>
            </div>
          </div>
        </section>

        {/* Act 3: The Muskmelon Moment */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">ACT 3: THE MUSKMELON MOMENT</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <p className="text-body"><strong>Summer 2021.</strong></p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                I saw a farmer on TV. He grew muskmelons. Sold them for 10x what other farmers
                got for regular crops. The reporter asked him why.
              </p>

              <WindowCard title="INSIGHT.md" colorDot="green" rotate={-1} style={{ marginTop: '32px' }}>
                <p className="text-body" style={{ fontStyle: 'italic' }}>
                  &quot;Premium crops need premium buyers. I found a buyer who cares about quality.
                  Now quality is profitable.&quot;
                </p>
              </WindowCard>

              <p className="text-body" style={{ marginTop: '32px' }}>
                <strong>That&apos;s when I understood.</strong>
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                The problem wasn&apos;t that farmers didn&apos;t have technology. The problem was that
                the entire incentive structure made quality unprofitable. Middlemen bought by volume.
                Retailers wanted cheap. Farmers had no reason to grow better crops.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                I needed to redesign the system so everyone won.
              </p>

              <div style={{
                marginTop: '32px',
                background: 'var(--sage-green)',
                border: '6px solid black',
                padding: '24px',
                transform: 'rotate(1deg)',
                boxShadow: '8px 8px 0 black'
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '16px',
                  fontWeight: 700,
                  margin: 0
                }}>
                  FIRST DEAL: 5 TONS OF MUSKMELONS → LOCAL RETAILER<br/>
                  STATUS: ✓ IT WORKED
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Act 4: Seedless Watermelon Monopoly */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">ACT 4: SEEDLESS WATERMELON MONOPOLY</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <p className="text-body">
                The muskmelon model proved something: premium crops + premium buyers + direct
                relationships = profitable for everyone.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                <strong>Next step: Scale it.</strong>
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                I learned about seedless watermelons. India didn&apos;t have them at scale. Every grocery
                store imported them or didn&apos;t stock them. The farmers who tried to grow them failed
                because they didn&apos;t know the technique.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                I spent 3 months learning seedless watermelon cultivation. I found farmers willing
                to experiment. I taught them the technique. I built relationships with Reliance,
                Namdari, and other premium retailers who wanted consistent supply.
              </p>

              <WindowCard title="RESULTS.json" colorDot="teal" rotate={2} style={{ marginTop: '32px' }}>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', margin: 0 }}>
{`{
  "year": "late_2021",
  "achievement": "India's first seedless watermelon supply at scale",
  "farmer_earnings": "3x regular watermelons",
  "retailer_satisfaction": "consistent quality",
  "competition": "none - we had the monopoly",
  "reason": "no one else figured out the full system"
}`}
                </pre>
              </WindowCard>
            </div>
          </div>
        </section>

        {/* Act 5: The Do-or-Die Moment */}
        <section style={{ background: 'var(--text-black)', color: 'var(--bg-cream)' }}>
          <div className="container-narrow">
            <h2 className="text-h1" style={{ color: 'var(--peach-orange)' }}>ACT 5: THE DO-OR-DIE MOMENT</h2>
            <div style={{ height: '8px', width: '200px', background: 'var(--peach-orange)', marginTop: '16px' }}></div>

            <div style={{ marginTop: '32px' }}>
              <p className="text-body"><strong style={{ color: 'var(--peach-orange)' }}>September 2021.</strong></p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                Phone rings. Lulu Hypermarket. They want 50 tons of watermelons.
                Massive order. Could change everything for FasalTech.
              </p>

              <p className="text-h2" style={{ marginTop: '24px', color: 'var(--peach-orange)' }}>
                I said yes.
              </p>

              <p className="text-body" style={{ marginTop: '24px' }}>
                Then Maharashtra started flooding. My farmers couldn&apos;t harvest. My usual contacts
                in other states couldn&apos;t deliver the volume. I had never been to Karnataka.
                I didn&apos;t know anyone there.
              </p>

              <div style={{
                marginTop: '32px',
                background: 'var(--bg-cream)',
                color: 'var(--text-black)',
                border: '6px solid var(--peach-orange)',
                padding: '24px',
                boxShadow: '8px 8px 0 var(--peach-orange)'
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, margin: 0 }}>
                  OPTION 1: Tell Lulu I can&apos;t deliver. Lose credibility. Maybe lose the business.<br/><br/>
                  OPTION 2: Go to Karnataka and figure it out.
                </p>
              </div>

              <p className="text-h2" style={{ marginTop: '32px', color: 'var(--peach-orange)' }}>
                I went to Karnataka.
              </p>

              <p className="text-body" style={{ marginTop: '24px' }}>
                Cold called farmers. Showed up at farms. Explained what I needed. Built trust in days,
                not months. Found farmers in Andhra Pradesh. Then Telangana. Then Tamil Nadu.
              </p>

              <div style={{
                marginTop: '32px',
                background: 'var(--sage-green)',
                border: '6px solid var(--bg-cream)',
                padding: '24px',
                boxShadow: '8px 8px 0 var(--bg-cream)'
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 700, margin: 0, color: 'var(--text-black)' }}>
                  IN 2 MONTHS: BUILT 4 SUPPLY CHAINS ACROSS 4 STATES I&apos;D NEVER WORKED IN<br/><br/>
                  DELIVERED 50 TONS TO LULU. ON TIME. CONSISTENT QUALITY.
                </p>
              </div>

              <p className="text-body" style={{ marginTop: '32px' }}>
                They kept ordering. Then Reliance started ordering more. Then Namdari.
              </p>
            </div>
          </div>
        </section>

        {/* Act 6: The Outcome */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">ACT 6: THE OUTCOME</h2>
            <div className="accent-bar"></div>

            <WindowCard title="FINAL_METRICS.json" colorDot="green" rotate={-1} style={{ marginTop: '32px' }}>
              <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', margin: 0 }}>
{`{
  "year": "2023",
  "revenue": "$4M",
  "farmers_impacted": 2000,
  "states": ["Maharashtra", "Karnataka", "AP", "Telangana", "TN"],
  "clients": ["Lulu Hypermarket Dubai", "Reliance Fresh", "Namdari"],
  "tech": "ML disease prediction in production",
  "monopoly": "seedless watermelon at scale"
}`}
              </pre>
            </WindowCard>

            <p className="text-body" style={{ marginTop: '32px' }}>
              The business worked because I understood something most people missed:
            </p>

            <p className="text-h2" style={{ marginTop: '24px' }}>
              The problem wasn&apos;t farming techniques. It was incentive misalignment.
            </p>

            <p className="text-body" style={{ marginTop: '24px' }}>
              Make quality profitable for everyone, and everyone wins.
            </p>
          </div>
        </section>

        {/* Act 7: What This Taught Me About AI */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">ACT 7: WHAT THIS TAUGHT ME ABOUT AI</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <p className="text-body">
                AI is in the same place agriculture was in 2020.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                Powerful tools exist. Most implementations fail. Not because the technology
                doesn&apos;t work. Because the incentive structures are broken.
              </p>

              <WindowCard title="PARALLELS.md" colorDot="teal" rotate={1} style={{ marginTop: '32px' }}>
                <p className="text-body" style={{ marginBottom: '16px' }}><strong>I see the same coordination failures:</strong></p>
                <ul style={{ marginLeft: '24px' }} className="text-body">
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Misaligned incentives</strong> — builders optimize for demos, users need reliability
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <strong>Broken trust</strong> — users burned by AI hype, hesitant to adopt
                  </li>
                  <li>
                    <strong>System design problems</strong> — AI tools that don&apos;t fit into actual workflows
                  </li>
                </ul>
              </WindowCard>

              <p className="text-body" style={{ marginTop: '32px' }}>
                This is why I&apos;m learning AI from first principles. Not to build demos.
                To build systems that actually work for the people using them.
              </p>

              <p className="text-h2" style={{ marginTop: '24px' }}>
                I did it with farmers who had no reason to trust me.
              </p>

              <p className="text-h2" style={{ marginTop: '16px' }}>
                I can do it with AI.
              </p>
            </div>
          </div>
        </section>

        {/* Epilogue */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">EPILOGUE</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <p className="text-body">
                I graduated in 2024. Came to NYU for my MS in Computer Engineering.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                Now I&apos;m learning how frontier AI models actually work. Transformers. RLHF.
                Chain-of-thought reasoning. RAG systems. Interpretability.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                From first principles.
              </p>

              <p className="text-body" style={{ marginTop: '16px' }}>
                Same velocity I learned farming. Same method I built supply chains.
              </p>

              <div style={{
                marginTop: '32px',
                background: 'var(--peach-orange)',
                border: '6px solid black',
                padding: '24px',
                boxShadow: '8px 8px 0 black'
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '18px',
                  fontWeight: 700,
                  margin: 0
                }}>
                  SUMMER 2026: LOOKING FOR AI ROLES WHERE I CAN BUILD PRODUCTS THAT SHIP TO REAL USERS,
                  WORK IN MESSY 0→1 PROBLEM SPACES, AND MOVE FAST.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <RetroButton href="/resume.pdf">DOWNLOAD RESUME</RetroButton>
              <RetroButton href="mailto:aryan@aryanthepade.com" color="teal">EMAIL ME</RetroButton>
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <a href="https://linkedin.com/in/aryanthepade" className="retro-link">
                [LINKEDIN]
              </a>
              <a href="https://github.com/lm10aryan" className="retro-link">
                [GITHUB]
              </a>
            </div>

            <div style={{ marginTop: '48px' }}>
              <RetroButton href="/" color="green">← BACK HOME</RetroButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '4px solid var(--text-black)',
        padding: '32px 24px',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px'
        }}>
          © 2026 ARYAN THEPADE · BUILT WITH NEXT.JS
        </p>
      </footer>
    </>
  )
}
