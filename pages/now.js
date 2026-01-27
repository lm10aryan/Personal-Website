import Head from 'next/head'
import Link from 'next/link'
import WindowCard from '../components/WindowCard'
import RetroButton from '../components/RetroButton'

export default function Now() {
  return (
    <>
      <Head>
        <title>Now - Aryan Thepade</title>
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
        {/* Header */}
        <section style={{ paddingTop: '80px', paddingBottom: '60px' }}>
          <div className="container-narrow">
            <h1 className="text-hero">WHAT I&apos;M DOING NOW</h1>
            <div className="accent-bar" style={{ marginTop: '24px' }}></div>
            <p className="text-small" style={{ marginTop: '16px', fontFamily: 'var(--font-mono)' }}>
              Last updated: January 2026
            </p>
          </div>
        </section>

        {/* This Week */}
        <section style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div className="container-narrow">
            <WindowCard title="THIS_WEEK.log" colorDot="pink" rotate={-1}>
              <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', margin: 0, whiteSpace: 'pre-wrap' }}>
{`$ tail -f progress.log

[2026-01-26 20:00]
Implementing FlashAttention from scratch.
6 hours debugging positional encoding.
Finally works. ✓

[2026-01-25 14:30]
Reading "Attention Is All You Need" for
the 5th time. Finally understanding why
layer normalization placement matters.

[2026-01-24 09:00]
Started Building LLM Reasoners course.
Greg Durrett is incredible.

█`}
              </pre>
            </WindowCard>
          </div>
        </section>

        {/* Current Focus */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">CURRENT FOCUS</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <WindowCard title="COURSE.md" colorDot="green">
                <h3 className="text-h2">Building LLM Reasoners</h3>
                <p className="text-small" style={{ marginTop: '8px', fontFamily: 'var(--font-mono)', opacity: 0.7 }}>
                  Spring 2026 · Professor Greg Durrett · NYU
                </p>
                <ul style={{ marginTop: '24px', marginLeft: '24px' }} className="text-body">
                  <li style={{ marginBottom: '12px' }}>Learning transformer architecture from first principles</li>
                  <li style={{ marginBottom: '12px' }}>Implementing RLHF and chain-of-thought reasoning</li>
                  <li style={{ marginBottom: '12px' }}>Understanding how frontier models actually think</li>
                  <li>Not just API calls—the real mechanics</li>
                </ul>
              </WindowCard>
            </div>

            <div style={{ marginTop: '32px' }}>
              <WindowCard title="PROJECTS.json" colorDot="teal" rotate={1}>
                <h3 className="text-h2">Active Projects</h3>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', marginTop: '16px' }}>
{`{
  "h1b_rag": {
    "status": "ongoing",
    "desc": "Deterministic eval for legal Q&A"
  },
  "pico_interp": {
    "status": "ongoing",
    "desc": "10M param model interpretability"
  },
  "transformers": {
    "status": "ongoing",
    "desc": "Building from scratch, no libs"
  }
}`}
                </pre>
              </WindowCard>
            </div>

            <div style={{ marginTop: '32px' }}>
              <WindowCard title="READING.txt" colorDot="orange" rotate={-1}>
                <h3 className="text-h2">Currently Reading</h3>
                <ul style={{ marginTop: '16px', marginLeft: '24px' }} className="text-body">
                  <li style={{ marginBottom: '12px' }}>&quot;Attention Is All You Need&quot; - Vaswani et al.</li>
                  <li style={{ marginBottom: '12px' }}>&quot;Language Models are Few-Shot Learners&quot; - GPT-3 paper</li>
                  <li>&quot;Constitutional AI&quot; - Anthropic</li>
                </ul>
              </WindowCard>
            </div>
          </div>
        </section>

        {/* Internship Search */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">INTERNSHIP SEARCH</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <WindowCard title="TARGET_ROLES.txt" colorDot="green">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="text-body">
                  <li style={{ marginBottom: '16px' }}>→ Forward Deployment Engineer (Palantir-style)</li>
                  <li style={{ marginBottom: '16px' }}>→ AI Product Engineer (0→1 products)</li>
                  <li>→ Technical roles at AI startups</li>
                </ul>
              </WindowCard>
            </div>

            <div style={{ marginTop: '32px' }}>
              <WindowCard title="REQUIREMENTS.txt" colorDot="pink" rotate={1}>
                <h3 className="text-h2">What I&apos;m Looking For</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: '16px' }} className="text-body">
                  <li style={{ marginBottom: '16px' }}>⚡ Build products that ship to real users</li>
                  <li style={{ marginBottom: '16px' }}>🚜 Work in messy 0→1 problem spaces</li>
                  <li>🤖 Move fast</li>
                </ul>
              </WindowCard>
            </div>

            <div style={{
              marginTop: '32px',
              background: 'var(--sage-green)',
              border: '6px solid black',
              padding: '24px',
              boxShadow: '8px 8px 0 black'
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
                fontWeight: 700,
                textTransform: 'uppercase',
                margin: 0
              }}>
                STATUS: ACTIVELY LOOKING FOR SUMMER 2026
              </p>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section>
          <div className="container-narrow">
            <h2 className="text-h1">GOALS THIS MONTH</h2>
            <div className="accent-bar"></div>

            <div style={{ marginTop: '32px' }}>
              <WindowCard title="GOALS.md" colorDot="teal">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="text-body">
                  <li style={{ marginBottom: '16px' }}>[ ] Complete FlashAttention implementation</li>
                  <li style={{ marginBottom: '16px' }}>[ ] Finish H-1B RAG evaluation framework</li>
                  <li style={{ marginBottom: '16px' }}>[ ] Submit 10 internship applications</li>
                  <li>[ ] Write technical blog post on transformer internals</li>
                </ul>
              </WindowCard>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="container-narrow" style={{ textAlign: 'center' }}>
            <p className="text-body">
              This page updates every Sunday.
            </p>
            <div style={{ marginTop: '32px' }}>
              <RetroButton href="/">← BACK HOME</RetroButton>
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
