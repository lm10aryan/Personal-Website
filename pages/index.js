import Head from 'next/head'
import Link from 'next/link'
import WindowCard from '../components/WindowCard'
import RetroButton from '../components/RetroButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aryan Thepade - Builder, Founder, AI Engineer</title>
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
        {/* Hero Section */}
        <section style={{ paddingTop: '80px', paddingBottom: '120px' }}>
          <div className="container-narrow">
            <WindowCard title="ARYAN_THEPADE.exe" rotate={-1}>
              <p className="text-small" style={{ fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                MS Computer Engineering &amp; Innovation @ NYU · Graduating December 2026
              </p>

              <h1 className="text-hero">ARYAN THEPADE</h1>

              <div style={{ marginTop: '32px', borderTop: '2px solid var(--text-black)', borderBottom: '2px solid var(--text-black)', padding: '24px 0' }}>
                <p className="text-h2" style={{ margin: 0 }}>
                  I ship AI products that solve real business problems.
                </p>
              </div>

              <div style={{ marginTop: '32px' }}>
                <p className="text-body">
                  <strong>Proof:</strong> Built $4M agritech business. Deployed ML in production for 2000 farmers. Coordinated 100+ stakeholders. Built 4 supply chains in 2 months across unfamiliar states.
                </p>

                <p className="text-body" style={{ marginTop: '16px' }}>
                  <strong>Learning:</strong> Frontier AI at NYU. Transformers from scratch. RLHF. Agents. Production systems.
                </p>

                <p className="text-body" style={{ marginTop: '16px' }}>
                  <strong>By May 2026:</strong> Can understand messy problems → build custom AI systems → coordinate stakeholders → ship to production.
                </p>
              </div>

              <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <RetroButton href="/resume.pdf">RESUME ↓</RetroButton>
                <RetroButton href="mailto:aryan@aryanthepade.com" color="teal">EMAIL ME</RetroButton>
              </div>

              <div style={{ marginTop: '32px' }}>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', margin: 0, background: 'rgba(0,0,0,0.05)', padding: '16px', borderRadius: '4px' }}>
{`$ cat metrics.json
{
  "revenue": "$4M",
  "farmers": 2000,
  "ml_accuracy": "72%",
  "supply_chains": "4 states in 2 months"
}`}
                </pre>
              </div>
            </WindowCard>
          </div>
        </section>

        {/* Proof Section: The FasalTech Story */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">THE FASALTECH STORY</h2>
            <div className="accent-bar"></div>

            {/* The Problem */}
            <div style={{ marginTop: '32px' }}>
              <h3 className="text-h2">The Problem Everyone Missed</h3>
              <p className="text-body" style={{ marginTop: '16px' }}>
                Agriculture in India has 100+ stakeholders per transaction. Farmers, agents, middlemen, retailers, exporters. Everyone wants different things. Most tech solutions focus on ONE stakeholder and fail.
              </p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                I built a business by redesigning the incentive structure so everyone wins.
              </p>
            </div>

            {/* The Muskmelon Moment */}
            <WindowCard title="THE_MUSKMELON_MOMENT.md" colorDot="orange" rotate={1} style={{ marginTop: '48px' }}>
              <p className="text-body"><strong>Summer 2021.</strong></p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                I saw a farmer on TV selling muskmelons for 10x what regular farmers earned. The reporter asked why.
              </p>

              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(0,0,0,0.05)', borderLeft: '4px solid var(--peach-orange)' }}>
                <p className="text-body" style={{ fontStyle: 'italic', margin: 0 }}>
                  &quot;Premium crops need premium buyers. I found buyers who pay for quality. Now quality is profitable.&quot;
                </p>
              </div>

              <p className="text-body" style={{ marginTop: '24px' }}>
                <strong>That&apos;s when I understood.</strong>
              </p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                The problem wasn&apos;t farming technology. <strong>It was economics.</strong>
              </p>

              <div style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
                <div style={{ padding: '16px', background: 'rgba(0,0,0,0.05)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
                  <p style={{ margin: '0 0 8px 0', fontWeight: 700 }}>OLD_SYSTEM.json</p>
                  <pre style={{ margin: 0 }}>{`{
  "middlemen": "buy by volume, not quality",
  "retailers": "want cheap, not good",
  "farmers": "no incentive for quality"
}
→ Quality unprofitable`}</pre>
                </div>

                <div style={{ padding: '16px', background: 'var(--sage-green)', border: '2px solid var(--text-black)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
                  <p style={{ margin: '0 0 8px 0', fontWeight: 700 }}>NEW_SYSTEM.json</p>
                  <pre style={{ margin: 0 }}>{`{
  "farmers": "premium prices + direct access",
  "buyers": "consistent quality",
  "me": "coordination margin"
}
→ Everyone wins`}</pre>
                </div>
              </div>

              <p className="text-body" style={{ marginTop: '24px' }}>
                <strong>First deal:</strong> 5 tons of muskmelons to a local retailer. It worked.
              </p>
            </WindowCard>

            {/* Seedless Watermelons */}
            <div style={{ marginTop: '48px' }}>
              <h3 className="text-h2">Scaling to Seedless Watermelons</h3>
              <p className="text-body" style={{ marginTop: '16px' }}>
                The muskmelon model proved: <strong>Premium crops + premium buyers + direct relationships = everyone wins.</strong>
              </p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                Seedless watermelons. India didn&apos;t have them at scale. Premium market existed but no one could supply consistently.
              </p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                I spent 3 months learning cultivation. Found farmers willing to experiment. Built relationships with Lulu, Reliance, Namdari.
              </p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                <strong>By late 2021:</strong> India&apos;s first seedless watermelon supply at commercial scale. Farmers made 3x more. We had a monopoly because no one else figured out the full system.
              </p>
            </div>

            {/* The Do-or-Die Moment */}
            <WindowCard title="DO_OR_DIE.log" colorDot="pink" rotate={-1} style={{ marginTop: '48px' }}>
              <p className="text-body"><strong>September 2021.</strong> Phone rings. Lulu Hypermarket Dubai.</p>
              <p className="text-h2" style={{ marginTop: '16px' }}>&quot;We need 50 tons of watermelons.&quot;</p>
              <p className="text-body" style={{ marginTop: '16px' }}>I said yes.</p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                Then Maharashtra started flooding. My farmers couldn&apos;t harvest. I had never worked in Karnataka. Didn&apos;t know anyone. Didn&apos;t speak Kannada.
              </p>

              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(0,0,0,0.05)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
                <pre style={{ margin: 0 }}>{`OPTIONS:
[1] Tell Lulu I can't deliver. Lose credibility.
[2] Go to Karnataka and figure it out.

> Selected: [2]`}</pre>
              </div>

              <p className="text-body" style={{ marginTop: '24px' }}>
                Cold called farmers. Showed up at farms. Built trust in days, not months.
              </p>

              <div style={{ marginTop: '24px', background: 'var(--sage-green)', border: '4px solid var(--text-black)', padding: '20px' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, margin: 0 }}>
                  IN 2 MONTHS: Built 4 complete supply chains across Karnataka, Andhra Pradesh, Telangana, Tamil Nadu.
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 700, margin: '12px 0 0 0' }}>
                  Delivered 50 tons to Lulu. On time. Consistent quality.
                </p>
              </div>

              <p className="text-body" style={{ marginTop: '24px' }}>
                They kept ordering. Then Reliance. Then Namdari. Then Zepto. Then Swiggy.
              </p>
            </WindowCard>

            {/* ML Technical Challenge */}
            <WindowCard title="ML_PRODUCTION.py" colorDot="teal" rotate={1} style={{ marginTop: '48px' }}>
              <h3 className="text-h2">The Technical Challenge: ML at Scale</h3>
              <p className="text-body" style={{ marginTop: '16px' }}>
                By 2023, we had 2000+ farmers across 5 states. New problem: <strong>quality inconsistency at scale.</strong>
              </p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                2000 farmers = 2000 different farming practices. Visual inspection wasn&apos;t enough.
              </p>

              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(0,0,0,0.05)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: 700 }}>$ cat ml_system.json</p>
                <pre style={{ margin: 0 }}>{`{
  "model": "CNN disease prediction",
  "accuracy": "72%",
  "stack": ["TensorFlow", "Django", "AWS"],
  "scale": "500+ images/day in peak season",
  "users": 2000
}`}</pre>
              </div>

              <p className="text-body" style={{ marginTop: '24px' }}>
                <strong>The hard part wasn&apos;t the ML. It was:</strong>
              </p>
              <ul style={{ marginTop: '16px', marginLeft: '24px' }} className="text-body">
                <li style={{ marginBottom: '8px' }}><strong>2G networks</strong> — Most farmers had terrible connectivity. Had to compress images without losing diagnostic quality.</li>
                <li style={{ marginBottom: '8px' }}><strong>Low-quality cameras</strong> — Inconsistent lighting, focus, angles. Model had to work despite this.</li>
                <li><strong>Farmer training</strong> — Many had never used AI. Made it simple: &quot;Take a photo like WhatsApp.&quot;</li>
              </ul>

              <div style={{ marginTop: '24px', padding: '16px', background: 'var(--soft-teal)', border: '4px solid var(--text-black)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', margin: 0 }}>
                  <strong>BENCHMARK:</strong><br/>
                  Our model: 72% accuracy<br/>
                  Expert agronomists (from photos): 65% accuracy<br/>
                  <br/>
                  Our system: Available 24/7 to 2000 farmers<br/>
                  Agronomist: Maybe 10 farm visits per day
                </p>
              </div>

              <p className="text-body" style={{ marginTop: '24px' }}>
                <strong>Scale changes what &quot;good enough&quot; means.</strong>
              </p>
            </WindowCard>

            {/* Results */}
            <WindowCard title="RESULTS.json" colorDot="green" rotate={-1} style={{ marginTop: '48px' }}>
              <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', margin: 0 }}>
{`{
  "year": "2025",
  "revenue": "$4M",
  "farmers": 2000,
  "states": 5,
  "clients": ["Lulu Dubai", "Reliance", "Namdari", "Zepto", "Swiggy"],
  "monopoly": "seedless watermelon at commercial scale",
  "ml_system": "deployed in production"
}`}
              </pre>
            </WindowCard>

            {/* AI Connection */}
            <div style={{ marginTop: '48px' }}>
              <h3 className="text-h2">What This Taught Me About AI</h3>
              <p className="text-body" style={{ marginTop: '16px' }}>
                I&apos;m now learning frontier AI—transformers, RLHF, reasoning systems, production ML. Because I see the same patterns emerging.
              </p>

              <WindowCard title="AI_PARALLELS.md" colorDot="pink" style={{ marginTop: '24px' }}>
                <p className="text-body"><strong>Concrete example:</strong></p>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Legal AI can draft documents 10x faster. But courts have fixed capacity. When everyone files faster, the bottleneck just moves. The &quot;productivity gain&quot; becomes a coordination problem.
                </p>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Same pattern I saw in agriculture: powerful tools, broken incentive structures, system-level failures that pure tech can&apos;t solve.
                </p>
              </WindowCard>

              <p className="text-body" style={{ marginTop: '24px' }}>
                FasalTech taught me to see misalignment before building solutions. Design for real constraints. Execute fast in chaos. Prove it works at small scale before scaling.
              </p>
              <p className="text-body" style={{ marginTop: '16px' }}>
                <strong>That&apos;s what I&apos;m bringing to AI product work.</strong> Not just the ability to code, but the ability to see what breaks when systems change—and build things that work anyway.
              </p>
            </div>

            <div style={{ marginTop: '32px' }}>
              <RetroButton href="/story" color="teal">READ THE FULL STORY →</RetroButton>
            </div>
          </div>
        </section>

        {/* Current Work Section */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">WHAT I&apos;M LEARNING NOW</h2>
            <div className="accent-bar"></div>

            <p className="text-body" style={{ marginTop: '32px' }}>
              Building LLM Reasoners with Greg Durrett at NYU.
            </p>

            <p className="text-body" style={{ marginTop: '16px' }}>
              I&apos;m learning how frontier models actually think—transformers,
              attention mechanisms, RLHF, chain-of-thought reasoning.
              From first principles. Not just API calls.
            </p>

            <WindowCard title="THIS_WEEK.log" colorDot="pink" style={{ marginTop: '32px' }}>
              <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', margin: 0 }}>
{`$ tail -f progress.log

[2026-01-26 20:00]
Implementing FlashAttention from scratch.
6 hours debugging positional encoding.
Finally works. ✓

█`}
              </pre>
            </WindowCard>

            <div style={{ marginTop: '32px' }}>
              <p className="text-body"><strong>Recent projects:</strong></p>
              <ul style={{ marginTop: '16px', marginLeft: '24px' }}>
                <li className="text-body">RAG Visa LLM with deterministic evaluation</li>
                <li className="text-body">Pico LLM interpretability (understanding how small models form representations)</li>
                <li className="text-body">Transformers from scratch</li>
              </ul>
            </div>

            <div style={{ marginTop: '32px' }}>
              <RetroButton href="/now" color="green">WEEKLY UPDATES →</RetroButton>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="container-wide">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px'
            }}>
              {/* Project 1 */}
              <WindowCard title="H1B_RAG.py" colorDot="orange" rotate={-2}>
                <h3 className="text-h2">H-1B RAG SYSTEM</h3>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Deterministic evaluation of retrieval strategies for legal Q&A.
                </p>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Built 100-question benchmark with must-include token matching.
                  Research-quality work on RAG reliability in regulated domains where
                  hallucinations aren&apos;t acceptable.
                </p>
                <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
                  <a href="#" className="retro-link">
                    [GITHUB →]
                  </a>
                  <a href="#" className="retro-link">
                    [PAPER →]
                  </a>
                </div>
              </WindowCard>

              {/* Project 2 */}
              <WindowCard title="PICO_INTERP.py" colorDot="teal" rotate={2}>
                <h3 className="text-h2">PICO LLM INTERPRETABILITY</h3>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Understanding how small language models form representations.
                </p>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Mechanistic interpretability on 10M parameter models.
                  Similar approach to Anthropic&apos;s interpretability research but
                  on models small enough to actually understand completely.
                </p>
                <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
                  <a href="#" className="retro-link">
                    [GITHUB →]
                  </a>
                  <a href="#" className="retro-link">
                    [NOTES →]
                  </a>
                </div>
              </WindowCard>

              {/* Project 3 */}
              <WindowCard title="FASALTECH_ML.py" colorDot="green" rotate={-1}>
                <h3 className="text-h2">FASALTECH ML SYSTEM</h3>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  Disease prediction for 2000 farmers on 2G networks.
                </p>
                <p className="text-body" style={{ marginTop: '16px' }}>
                  72% accuracy vs 65% for expert agronomists. The challenge wasn&apos;t model accuracy—it was making AI work with terrible connectivity, low-quality cameras, and farmers who&apos;d never used apps.
                </p>
                <p className="text-small" style={{ marginTop: '16px', fontFamily: 'var(--font-mono)' }}>
                  TensorFlow · Django · AWS · Flutter
                </p>
              </WindowCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <p className="text-body">
              I&apos;m looking for summer 2026 AI roles where I can:
            </p>

            <WindowCard title="REQUIREMENTS.txt" colorDot="green" style={{ marginTop: '32px', textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}>
                <p className="text-body" style={{ margin: 0 }}>
                  🚀 <strong>Build products that ship to real users</strong>
                </p>
                <p className="text-small" style={{ margin: '4px 0 0 28px', opacity: 0.8 }}>
                  Not demos. Not research papers. Products people actually use.
                </p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <p className="text-body" style={{ margin: 0 }}>
                  🛠️ <strong>Work in messy 0→1 problem spaces</strong>
                </p>
                <p className="text-small" style={{ margin: '4px 0 0 28px', opacity: 0.8 }}>
                  Where requirements are unclear and you have to figure it out.
                </p>
              </div>
              <div>
                <p className="text-body" style={{ margin: 0 }}>
                  ⚡ <strong>Move fast</strong>
                </p>
                <p className="text-small" style={{ margin: '4px 0 0 28px', opacity: 0.8 }}>
                  Prototype → test → iterate → ship. Weeks, not months.
                </p>
              </div>
            </WindowCard>

            <div style={{ marginTop: '48px' }}>
              <RetroButton href="/resume.pdf">DOWNLOAD RESUME</RetroButton>
            </div>

            <div style={{ marginTop: '32px' }}>
              <p className="text-body">aryan@aryanthepade.com</p>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <a href="https://linkedin.com/in/aryanthepade" className="retro-link">
                  [LINKEDIN]
                </a>
                <a href="https://github.com/lm10aryan" className="retro-link">
                  [GITHUB]
                </a>
              </div>
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
