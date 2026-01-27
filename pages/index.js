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
              <h1 className="text-hero">ARYAN THEPADE</h1>

              <p className="text-body" style={{ marginTop: '24px', maxWidth: '600px' }}>
                I didn&apos;t know anything about farming or coding.
                Built $4M in 4 years anyway.
                Now learning frontier AI the same way.
              </p>

              <div style={{ marginTop: '32px' }}>
                <div style={{
                  background: 'var(--sage-green)',
                  border: '6px solid black',
                  padding: '24px',
                  transform: 'rotate(2deg)',
                  boxShadow: '8px 8px 0 black',
                  display: 'inline-block'
                }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '18px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    margin: 0
                  }}>
                    MS @ NYU · DEC 2026<br />
                    $4M · 2000 FARMERS · ML IN PRODUCTION
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '32px' }}>
                <RetroButton href="/resume.pdf">RESUME ↓</RetroButton>
              </div>
            </WindowCard>
          </div>
        </section>

        {/* Proof Section */}
        <section>
          <div className="container-narrow">
            <p className="text-body">
              <strong>September 2021.</strong>
            </p>

            <p className="text-body" style={{ marginTop: '16px' }}>
              Lulu Hypermarket wanted 50 tons of watermelons. I said yes.
              Then Maharashtra started flooding. My contacts couldn&apos;t deliver.
              I&apos;d never been to Karnataka. I didn&apos;t know anyone there.
            </p>

            <p className="text-h2" style={{ margin: '32px 0', fontWeight: 700 }}>
              I went anyway.
            </p>

            <p className="text-body">
              Built 4 supply chains in 2 months. Across Karnataka, Andhra Pradesh,
              Telangana, Tamil Nadu. Delivered to Lulu. Then to Reliance. Then to Namdari.
            </p>

            <WindowCard title="RESULTS.json" colorDot="teal" rotate={2} style={{ marginTop: '32px' }}>
              <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', margin: 0 }}>
{`{
  "year": "2023",
  "metrics": {
    "revenue": "$4M",
    "farmers": 2000,
    "monopoly": "seedless watermelon",
    "ml": "production"
  }
}`}
              </pre>
            </WindowCard>

            <p className="text-body" style={{ marginTop: '32px' }}>
              The business worked because I saw what everyone else missed:
              the incentive structure was broken. Farmers couldn&apos;t make money
              on quality because the middlemen didn&apos;t care. I redesigned the system
              so quality became profitable for everyone.
            </p>

            <p className="text-body" style={{ marginTop: '24px' }}>
              AI is having the same problem right now. Powerful tools, broken incentive
              structures, massive coordination failures. I want to build AI systems that
              actually work for the people using them—not just demos that look good.
            </p>

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
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="text-body" style={{ marginBottom: '16px' }}>
                  ⚡ Build products that ship to real users
                </li>
                <li className="text-body" style={{ marginBottom: '16px' }}>
                  🚜 Work in messy 0→1 problem spaces
                </li>
                <li className="text-body">
                  🤖 Move fast
                </li>
              </ul>
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
