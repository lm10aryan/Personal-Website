import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import RetroButton from '../components/RetroButton'

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const sections = document.querySelectorAll('.section-full')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target)
            setActiveSection(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Aryan Thepade - Builder, Founder, AI Engineer</title>
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <Link href="/" className="nav-logo">
          ARYAN THEPADE
        </Link>
        <div className="nav-indicators">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`nav-dot ${activeSection === i ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="nav-links">
          <Link href="/story" className="nav-link">[STORY]</Link>
          <Link href="/now" className="nav-link">[NOW]</Link>
          <a href="/Aryan_Thepade_Resume.pdf" className="nav-link" download>[RESUME]</a>
        </div>
      </nav>

      <main>
        {/* ============================================
            SECTION 1: HERO
            ============================================ */}
        <section className="section-full hero-section">
          {/* Decorative elements */}
          <div className="deco deco-1">✦</div>
          <div className="deco deco-2">●</div>
          <div className="deco deco-3">▲</div>
          <div className="deco deco-4">◆</div>
          <div className="deco deco-5">○</div>

          <div className="hero-wrapper">
            {/* Left side - Text content */}
            <div className="hero-content">
              <div className="hero-badge">
                <span>MS @ NYU</span>
                <span>·</span>
                <span>Dec 2026</span>
              </div>

              <h1 className="hero-title">
                ARYAN<br/>THEPADE
              </h1>

              <div className="hero-tagline">
                <span className="tagline-highlight">I ship AI products</span>
                <span> that solve real business problems.</span>
              </div>

              <div className="hero-proof">
                <div className="proof-item">
                  <span className="proof-num">$4M</span>
                  <span className="proof-label">Revenue</span>
                </div>
                <div className="proof-divider"></div>
                <div className="proof-item">
                  <span className="proof-num">2000</span>
                  <span className="proof-label">Farmers</span>
                </div>
                <div className="proof-divider"></div>
                <div className="proof-item">
                  <span className="proof-num">72%</span>
                  <span className="proof-label">ML Accuracy</span>
                </div>
              </div>

              <div className="hero-ctas">
                <RetroButton href="/Aryan_Thepade_Resume.pdf" download>RESUME ↓</RetroButton>
                <RetroButton href="mailto:aryan@aryanthepade.com" color="teal">EMAIL ME</RetroButton>
              </div>
            </div>

            {/* Right side - Visual window */}
            <div className="hero-visual">
              <div className="retro-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span style={{ background: 'var(--retro-coral)' }}></span>
                    <span style={{ background: 'var(--retro-yellow)' }}></span>
                    <span style={{ background: 'var(--retro-mint)' }}></span>
                  </div>
                  <span className="window-title">PROFILE.exe</span>
                </div>
                <div className="window-body">
                  <div className="profile-grid">
                    <div className="profile-box" style={{ background: 'var(--retro-peach)' }}>
                      <span className="profile-icon">🚀</span>
                      <span className="profile-text">PROOF</span>
                      <p>Built $4M agritech. 4 supply chains in 2 months.</p>
                    </div>
                    <div className="profile-box" style={{ background: 'var(--retro-teal)' }}>
                      <span className="profile-icon">🧠</span>
                      <span className="profile-text">LEARNING</span>
                      <p>Frontier AI @ NYU. Transformers. RLHF. Agents.</p>
                    </div>
                    <div className="profile-box" style={{ background: 'var(--retro-pink)' }}>
                      <span className="profile-icon">⚡</span>
                      <span className="profile-text">BY 2026</span>
                      <p>Build AI systems. Coordinate. Ship to production.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-hint">
            <span>Scroll</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </section>

        {/* ============================================
            SECTION 2: FASALTECH STORY
            ============================================ */}
        <section className="section-full story-section">
          <div className="deco deco-s1">◆</div>
          <div className="deco deco-s2">✦</div>

          <div className="section-header">
            <span className="section-num">02</span>
            <h2>THE FASALTECH STORY</h2>
            <div className="header-line" style={{ background: 'var(--retro-mint)' }}></div>
          </div>

          <div className="story-container">
            {/* Card 1 */}
            <div className="story-card" style={{ '--accent': 'var(--retro-peach)' }}>
              <div className="card-header">
                <span className="card-num">01</span>
                <span className="card-title">THE INSIGHT</span>
              </div>
              <div className="card-body">
                <p className="card-date">Summer 2021</p>
                <p className="card-text">
                  A farmer on TV selling muskmelons for 10x normal prices.
                </p>
                <div className="card-callout">
                  The problem wasn&apos;t technology. It was economics.
                </div>
              </div>
              <div className="card-icon">🍈</div>
            </div>

            {/* Card 2 */}
            <div className="story-card" style={{ '--accent': 'var(--retro-mint)' }}>
              <div className="card-header">
                <span className="card-num">02</span>
                <span className="card-title">THE MODEL</span>
              </div>
              <div className="card-body">
                <div className="model-list">
                  <div className="model-item">
                    <span className="model-who">FARMERS</span>
                    <span className="model-what">Premium prices</span>
                  </div>
                  <div className="model-item">
                    <span className="model-who">BUYERS</span>
                    <span className="model-what">Quality supply</span>
                  </div>
                  <div className="model-item">
                    <span className="model-who">ME</span>
                    <span className="model-what">Coordination</span>
                  </div>
                </div>
                <div className="card-callout" style={{ background: 'var(--retro-mint)' }}>
                  Everyone wins.
                </div>
              </div>
              <div className="card-icon">🤝</div>
            </div>

            {/* Card 3 */}
            <div className="story-card" style={{ '--accent': 'var(--retro-coral)' }}>
              <div className="card-header">
                <span className="card-num">03</span>
                <span className="card-title">THE EXECUTION</span>
              </div>
              <div className="card-body">
                <p className="card-date">September 2021</p>
                <p className="card-text">
                  Lulu Dubai: &quot;50 tons of watermelons.&quot; Maharashtra flooding.
                </p>
                <div className="card-callout" style={{ background: 'var(--retro-coral)', color: 'white' }}>
                  4 supply chains. 4 states. 2 months.
                </div>
              </div>
              <div className="card-icon">🍉</div>
            </div>

            {/* Card 4 */}
            <div className="story-card" style={{ '--accent': 'var(--retro-teal)' }}>
              <div className="card-header">
                <span className="card-num">04</span>
                <span className="card-title">THE RESULT</span>
              </div>
              <div className="card-body">
                <div className="result-grid">
                  <div className="result-item">
                    <span className="result-val">$4M</span>
                    <span className="result-lbl">Revenue</span>
                  </div>
                  <div className="result-item">
                    <span className="result-val">2000</span>
                    <span className="result-lbl">Farmers</span>
                  </div>
                  <div className="result-item">
                    <span className="result-val">5</span>
                    <span className="result-lbl">States</span>
                  </div>
                  <div className="result-item">
                    <span className="result-val">72%</span>
                    <span className="result-lbl">ML Acc</span>
                  </div>
                </div>
              </div>
              <div className="card-icon">📈</div>
            </div>
          </div>

          <div className="story-cta">
            <RetroButton href="/story" color="green">READ FULL STORY →</RetroButton>
          </div>
        </section>

        {/* ============================================
            SECTION 3: WHAT I'M BUILDING NOW
            ============================================ */}
        <section className="section-full current-section" style={{ background: 'var(--bg-lavender)' }}>
          <div className="deco deco-c1">○</div>
          <div className="deco deco-c2">▲</div>

          <div className="section-header">
            <span className="section-num">03</span>
            <h2>WHAT I&apos;M BUILDING NOW</h2>
            <div className="header-line" style={{ background: 'var(--retro-purple)' }}></div>
          </div>

          <div className="current-wrapper">
            <div className="current-main">
              <div className="retro-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span style={{ background: 'var(--retro-coral)' }}></span>
                    <span style={{ background: 'var(--retro-yellow)' }}></span>
                    <span style={{ background: 'var(--retro-mint)' }}></span>
                  </div>
                  <span className="window-title">THIS_WEEK.log</span>
                </div>
                <div className="window-body">
                  <pre className="terminal-text">
{`$ tail -f progress.log

[2026-01-26]
Building LLM Reasoners @ NYU
with Greg Durrett.

Transformers. Attention. RLHF.
Chain-of-thought reasoning.

From first principles.
Not just API calls.

█`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="current-projects">
              <h3>Recent Projects</h3>
              <div className="project-list">
                <div className="project-item">
                  <span className="project-dot" style={{ background: 'var(--retro-peach)' }}></span>
                  <span>RAG Visa LLM with deterministic evaluation</span>
                </div>
                <div className="project-item">
                  <span className="project-dot" style={{ background: 'var(--retro-teal)' }}></span>
                  <span>Pico LLM interpretability</span>
                </div>
                <div className="project-item">
                  <span className="project-dot" style={{ background: 'var(--retro-pink)' }}></span>
                  <span>Transformers from scratch</span>
                </div>
              </div>
              <RetroButton href="/now" color="purple">WEEKLY UPDATES →</RetroButton>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: PROJECTS
            ============================================ */}
        <section className="section-full projects-section">
          <div className="deco deco-p1">✦</div>
          <div className="deco deco-p2">●</div>

          <div className="section-header">
            <span className="section-num">04</span>
            <h2>SELECTED PROJECTS</h2>
            <div className="header-line" style={{ background: 'var(--retro-teal)' }}></div>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-card-header" style={{ background: 'var(--retro-peach)' }}>
                <span>H1B_RAG.py</span>
              </div>
              <div className="project-card-body">
                <h3>H-1B RAG System</h3>
                <p>Deterministic evaluation of retrieval strategies for legal Q&A. 100-question benchmark.</p>
                <div className="project-tags">
                  <span>LangChain</span>
                  <span>Pinecone</span>
                  <span>OpenAI</span>
                </div>
                <a href="#" className="project-link">[GITHUB →]</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-card-header" style={{ background: 'var(--retro-teal)' }}>
                <span>PICO_INTERP.py</span>
              </div>
              <div className="project-card-body">
                <h3>Pico LLM Interpretability</h3>
                <p>Understanding how small language models form representations. 10M parameter models.</p>
                <div className="project-tags">
                  <span>PyTorch</span>
                  <span>TransformerLens</span>
                </div>
                <a href="#" className="project-link">[GITHUB →]</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-card-header" style={{ background: 'var(--retro-mint)' }}>
                <span>FASALTECH_ML.py</span>
              </div>
              <div className="project-card-body">
                <h3>FasalTech ML System</h3>
                <p>Disease prediction for 2000 farmers on 2G networks. 72% vs 65% agronomist accuracy.</p>
                <div className="project-tags">
                  <span>TensorFlow</span>
                  <span>Django</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: CONTACT
            ============================================ */}
        <section className="section-full contact-section" style={{ background: 'var(--retro-coral)', color: 'white' }}>
          <div className="deco deco-ct1" style={{ color: 'rgba(255,255,255,0.2)' }}>◆</div>
          <div className="deco deco-ct2" style={{ color: 'rgba(255,255,255,0.2)' }}>○</div>

          <div className="section-header">
            <span className="section-num" style={{ color: 'rgba(255,255,255,0.6)' }}>05</span>
            <h2 style={{ color: 'white' }}>LET&apos;S BUILD SOMETHING</h2>
            <div className="header-line" style={{ background: 'white' }}></div>
          </div>

          <div className="contact-content">
            <p className="contact-intro">
              I&apos;m looking for summer 2026 AI roles where I can:
            </p>

            <div className="contact-requirements">
              <div className="req-item">
                <span className="req-num">01</span>
                <div className="req-text">
                  <strong>Build products that ship to real users</strong>
                  <span>Not demos. Products people actually use.</span>
                </div>
              </div>
              <div className="req-item">
                <span className="req-num">02</span>
                <div className="req-text">
                  <strong>Work in messy 0→1 problem spaces</strong>
                  <span>Where you have to figure it out.</span>
                </div>
              </div>
              <div className="req-item">
                <span className="req-num">03</span>
                <div className="req-text">
                  <strong>Move fast</strong>
                  <span>Prototype → test → iterate → ship.</span>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <a href="/Aryan_Thepade_Resume.pdf" className="cta-button-white" download>DOWNLOAD RESUME</a>
            </div>

            <div className="contact-info">
              <p className="contact-email">aryan@aryanthepade.com</p>
              <div className="contact-links">
                <a href="https://linkedin.com/in/aryanthepade">[LINKEDIN]</a>
                <a href="https://github.com/lm10aryan">[GITHUB]</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ARYAN THEPADE · BUILT WITH NEXT.JS</p>
      </footer>

      <style jsx>{`
        /* ==========================================
           NAVIGATION
           ========================================== */
        .nav {
          position: sticky;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          background: var(--bg-cream);
          border-bottom: 3px solid var(--text-black);
          z-index: 100;
        }

        .nav-logo {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          color: var(--text-black);
          text-decoration: none;
        }

        .nav-indicators {
          display: flex;
          gap: 8px;
        }

        .nav-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid var(--text-black);
          background: transparent;
          transition: all 0.3s;
        }

        .nav-dot.active {
          background: var(--retro-coral);
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-link {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-black);
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--retro-coral);
        }

        /* ==========================================
           DECORATIVE ELEMENTS
           ========================================== */
        .deco {
          position: absolute;
          font-size: 40px;
          opacity: 0.15;
          pointer-events: none;
          animation: float 5s ease-in-out infinite;
        }

        .deco-1 { top: 15%; left: 5%; color: var(--retro-coral); }
        .deco-2 { top: 20%; right: 8%; color: var(--retro-teal); font-size: 30px; }
        .deco-3 { bottom: 25%; left: 8%; color: var(--retro-yellow); }
        .deco-4 { bottom: 15%; right: 5%; color: var(--retro-pink); }
        .deco-5 { top: 50%; left: 3%; color: var(--retro-mint); font-size: 50px; }

        .deco-s1 { top: 10%; right: 10%; color: var(--retro-peach); }
        .deco-s2 { bottom: 20%; left: 5%; color: var(--retro-teal); }

        .deco-c1 { top: 15%; left: 8%; color: var(--retro-purple); font-size: 60px; }
        .deco-c2 { bottom: 10%; right: 10%; color: var(--retro-pink); }

        .deco-p1 { top: 12%; right: 8%; color: var(--retro-teal); }
        .deco-p2 { bottom: 15%; left: 5%; color: var(--retro-peach); font-size: 50px; }

        .deco-ct1 { top: 10%; left: 8%; font-size: 80px; }
        .deco-ct2 { bottom: 15%; right: 10%; font-size: 60px; }

        /* ==========================================
           SECTION STYLES
           ========================================== */
        .section-full {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 32px;
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-num {
          font-family: var(--font-mono);
          font-size: 14px;
          opacity: 0.5;
          display: block;
          margin-bottom: 8px;
        }

        .section-header h2 {
          font-family: var(--font-mono);
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 16px 0;
          text-transform: uppercase;
        }

        .header-line {
          width: 80px;
          height: 6px;
          margin: 0 auto;
          border-radius: 3px;
        }

        /* ==========================================
           HERO SECTION
           ========================================== */
        .hero-section {
          padding-top: 40px;
        }

        .hero-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 14px;
          padding: 8px 16px;
          background: var(--retro-yellow);
          border: 3px solid var(--text-black);
          margin-bottom: 24px;
        }

        .hero-title {
          font-family: var(--font-mono);
          font-size: 64px;
          font-weight: 700;
          line-height: 1;
          margin: 0 0 24px 0;
        }

        .hero-tagline {
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 32px;
        }

        .tagline-highlight {
          background: var(--retro-peach);
          padding: 2px 8px;
          font-weight: 700;
        }

        .hero-proof {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 32px;
          padding: 20px;
          background: rgba(0,0,0,0.03);
          border: 3px solid var(--text-black);
        }

        .proof-item {
          text-align: center;
        }

        .proof-num {
          display: block;
          font-family: var(--font-mono);
          font-size: 28px;
          font-weight: 700;
        }

        .proof-label {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .proof-divider {
          width: 3px;
          height: 40px;
          background: var(--text-black);
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .retro-window {
          background: var(--bg-cream);
          border: 4px solid var(--text-black);
          box-shadow: 8px 8px 0 var(--text-black);
          width: 100%;
          max-width: 400px;
        }

        .window-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 3px solid var(--text-black);
        }

        .window-dots {
          display: flex;
          gap: 8px;
        }

        .window-dots span {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid var(--text-black);
        }

        .window-title {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
        }

        .window-body {
          padding: 20px;
        }

        .profile-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .profile-box {
          padding: 16px;
          border: 3px solid var(--text-black);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .profile-icon {
          font-size: 20px;
        }

        .profile-text {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
        }

        .profile-box p {
          font-size: 13px;
          margin: 0;
          line-height: 1.4;
        }

        .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          animation: bounce 2s infinite;
        }

        .scroll-hint span {
          font-family: var(--font-mono);
          font-size: 12px;
          display: block;
          opacity: 0.5;
        }

        .scroll-arrow {
          font-size: 24px;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }

        /* ==========================================
           STORY SECTION
           ========================================== */
        .story-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .story-card {
          background: var(--bg-cream);
          border: 4px solid var(--text-black);
          box-shadow: 6px 6px 0 var(--text-black);
          position: relative;
          overflow: hidden;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: var(--accent);
          border-bottom: 3px solid var(--text-black);
        }

        .card-num {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
        }

        .card-title {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
        }

        .card-body {
          padding: 16px;
        }

        .card-date {
          font-family: var(--font-mono);
          font-size: 11px;
          opacity: 0.6;
          margin: 0 0 8px 0;
        }

        .card-text {
          font-size: 14px;
          line-height: 1.5;
          margin: 0 0 12px 0;
        }

        .card-callout {
          background: rgba(0,0,0,0.05);
          padding: 10px 12px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          border-left: 4px solid var(--accent);
        }

        .card-icon {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 24px;
          opacity: 0.3;
        }

        .model-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .model-item {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .model-who {
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .result-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .result-item {
          text-align: center;
          padding: 8px;
          background: rgba(0,0,0,0.03);
          border: 2px solid var(--text-black);
        }

        .result-val {
          display: block;
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 700;
        }

        .result-lbl {
          font-family: var(--font-mono);
          font-size: 9px;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .story-cta {
          text-align: center;
          margin-top: 40px;
        }

        /* ==========================================
           CURRENT SECTION
           ========================================== */
        .current-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          max-width: 900px;
          margin: 0 auto;
          align-items: start;
        }

        .terminal-text {
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          white-space: pre-wrap;
        }

        .current-projects h3 {
          font-family: var(--font-mono);
          font-size: 16px;
          margin: 0 0 20px 0;
        }

        .project-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .project-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
        }

        .project-dot {
          width: 12px;
          height: 12px;
          border: 2px solid var(--text-black);
          flex-shrink: 0;
        }

        /* ==========================================
           PROJECTS SECTION
           ========================================== */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .project-card {
          background: var(--bg-cream);
          border: 4px solid var(--text-black);
          box-shadow: 6px 6px 0 var(--text-black);
        }

        .project-card-header {
          padding: 12px 16px;
          border-bottom: 3px solid var(--text-black);
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
        }

        .project-card-body {
          padding: 20px;
        }

        .project-card-body h3 {
          font-family: var(--font-mono);
          font-size: 16px;
          margin: 0 0 12px 0;
        }

        .project-card-body p {
          font-size: 14px;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .project-tags span {
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 4px 8px;
          background: rgba(0,0,0,0.05);
          border: 2px solid var(--text-black);
        }

        .project-link {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-black);
          text-decoration: none;
        }

        .project-link:hover {
          text-decoration: underline;
        }

        /* ==========================================
           CONTACT SECTION
           ========================================== */
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-intro {
          font-size: 18px;
          margin-bottom: 32px;
        }

        .contact-requirements {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
          text-align: left;
        }

        .req-item {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: rgba(255,255,255,0.1);
          border: 3px solid white;
        }

        .req-num {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          opacity: 0.6;
        }

        .req-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .req-text strong {
          font-family: var(--font-mono);
          font-size: 15px;
        }

        .req-text span {
          font-size: 14px;
          opacity: 0.8;
        }

        .contact-cta {
          margin-bottom: 32px;
        }

        .cta-button-white {
          display: inline-block;
          padding: 16px 40px;
          background: white;
          color: var(--retro-coral);
          border: 4px solid var(--text-black);
          box-shadow: 6px 6px 0 var(--text-black);
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
        }

        .cta-button-white:hover {
          transform: translateY(-2px);
          box-shadow: 8px 8px 0 var(--text-black);
        }

        .contact-email {
          font-family: var(--font-mono);
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 16px 0;
        }

        .contact-links {
          display: flex;
          gap: 24px;
          justify-content: center;
        }

        .contact-links a {
          font-family: var(--font-mono);
          font-size: 14px;
          color: white;
          text-decoration: none;
        }

        .contact-links a:hover {
          text-decoration: underline;
        }

        /* ==========================================
           FOOTER
           ========================================== */
        .footer {
          padding: 32px;
          text-align: center;
          border-top: 3px solid var(--text-black);
          background: var(--bg-cream);
        }

        .footer p {
          font-family: var(--font-mono);
          font-size: 13px;
          margin: 0;
        }

        /* ==========================================
           RESPONSIVE
           ========================================== */
        @media (max-width: 1024px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-visual {
            order: -1;
          }

          .hero-proof {
            justify-content: center;
          }

          .hero-ctas {
            justify-content: center;
          }

          .story-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .current-wrapper {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav {
            padding: 12px 16px;
          }

          .nav-indicators {
            display: none;
          }

          .section-full {
            padding: 60px 20px;
          }

          .hero-title {
            font-size: 40px;
          }

          .section-header h2 {
            font-size: 24px;
          }

          .story-container {
            grid-template-columns: 1fr;
            max-width: 400px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }

          .hero-proof {
            flex-wrap: wrap;
            gap: 16px;
          }

          .proof-divider {
            display: none;
          }

          .hero-ctas {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 32px;
          }

          .hero-tagline {
            font-size: 16px;
          }

          .retro-window {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  )
}
