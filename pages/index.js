import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aryan Thepade - Builder, Founder, AI Engineer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <Link href="/" className="nav-logo">ARYAN THEPADE</Link>
        <div className="nav-links">
          <Link href="/story" className="nav-link">STORY</Link>
          <Link href="/now" className="nav-link">NOW</Link>
          <a href="/Aryan_Thepade_Resume.pdf" className="nav-link" download>RESUME</a>
        </div>
      </nav>

      <main>
        {/* ============================================
            SECTION 1: HERO
            Purpose: Establish positioning in 10 seconds
            ============================================ */}
        <section className="hero">
          <div className="hero-left">
            <p className="hero-context">MS @ NYU · Dec 2026</p>

            <h1 className="hero-name">ARYAN THEPADE</h1>

            <p className="hero-value-prop">
              I ship AI products that solve<br />
              real business problems.
            </p>

            <p className="hero-proof-text">
              Built $4M agritech startup from zero.<br />
              2000 farmers. 4 supply chains across<br />
              4 states in 2 months.
            </p>

            <div className="hero-buttons">
              <a href="/Aryan_Thepade_Resume.pdf" className="btn btn-orange" download>
                DOWNLOAD RESUME
              </a>
              <a href="mailto:AKT8180@nyu.edu" className="btn btn-teal">
                EMAIL ME
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="proof-box box-orange">
              <div className="box-header">PROOF // PAST</div>
              <div className="box-content">
                <p>Built $4M agritech startup. Coordinated farmers, buyers, logistics across India. Deployed ML in production.</p>
              </div>
            </div>

            <div className="proof-box box-teal">
              <div className="box-header">LEARNING // NOW</div>
              <div className="box-content">
                <p>Frontier AI @ NYU. Transformers from scratch. RLHF. Agents. Production ML.</p>
              </div>
            </div>

            <div className="proof-box box-magenta">
              <div className="box-header">GOAL // BY MAY 2026</div>
              <div className="box-content">
                <p>Build AI systems that ship to production. Not demos—products people use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 2: FASALTECH STORY (PREVIEW)
            Purpose: Show execution + systems thinking
            ============================================ */}
        <section className="fasaltech">
          <h2 className="section-title">THE FASALTECH STORY</h2>

          <div className="story-grid">
            {/* Card 1: THE SPARK - Large card, left side */}
            <div className="story-card card-large">
              <div className="card-number">01 // THE SPARK</div>
              <p className="card-date">Summer 2020</p>

              <div className="card-body">
                <p>Game of Thrones was ending. Outside my window, farmers were protesting.</p>
                <p>I felt guilty. Had zero knowledge about farming. Started anyway.</p>
                <p className="emphasis-red">Everything failed.</p>
                <p>App: 12 downloads. Pesticides: 0 sales. Wasted months.</p>
              </div>
            </div>

            {/* Card 2: THE BREAKTHROUGH - Medium card, top right */}
            <div className="story-card card-medium card-beige">
              <div className="card-number">02 // THE BREAKTHROUGH</div>
              <p className="card-date">February 2022</p>

              {/* Muskmelon illustration */}
              <div className="illustration">
                <svg viewBox="0 0 80 70" className="fruit-svg">
                  <ellipse cx="40" cy="40" rx="28" ry="24" fill="#FFB347" stroke="#1a1a1a" strokeWidth="3"/>
                  <path d="M18 40 Q40 25 62 40" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                  <path d="M15 48 Q40 33 65 48" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                  <path d="M40 16 L40 24" stroke="#4ecdc4" strokeWidth="3"/>
                  <ellipse cx="40" cy="14" rx="6" ry="4" fill="#4ecdc4" stroke="#1a1a1a" strokeWidth="2"/>
                </svg>
              </div>

              <div className="card-body">
                <p>Farmer on TV selling muskmelons for <strong>10x normal prices</strong>.</p>
                <p>&quot;Premium crops need premium buyers.&quot;</p>
              </div>

              <div className="insight-box">
                <span className="insight-label">THE INSIGHT:</span>
                Not technology. Economics.
              </div>

              <div className="card-body">
                <p className="model-text">
                  Built win-win model:<br/>
                  → Farmers: premium prices<br/>
                  → Buyers: quality supply<br/>
                  → Me: coordination margin
                </p>
                <p>First deal: 5 tons. It worked.</p>
              </div>
            </div>

            {/* Card 3: THE TEST - Wide card, bottom */}
            <div className="story-card card-wide card-mint">
              <div className="card-number">03 // THE TEST</div>
              <p className="card-date">September 2021</p>

              <div className="execution-grid">
                <div className="execution-text">
                  <p><strong>Lulu Dubai:</strong> &quot;We need 50 tons of watermelons.&quot;</p>
                  <p>Maharashtra was flooding. Zero contacts in Karnataka.</p>
                  <p>Went anyway. Built 4 supply chains across 4 states in 2 months.</p>
                  <p className="states-list">Karnataka · Andhra Pradesh · Telangana · Tamil Nadu</p>
                  <p>Delivered on time. They kept ordering.</p>
                </div>

                {/* Watermelon illustration */}
                <div className="illustration watermelon-illustration">
                  <svg viewBox="0 0 100 80" className="fruit-svg fruit-large">
                    <ellipse cx="50" cy="45" rx="38" ry="28" fill="#88D8B0" stroke="#1a1a1a" strokeWidth="3"/>
                    <path d="M15 45 Q50 58 85 45" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                    <path d="M18 35 Q50 48 82 35" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                    <ellipse cx="50" cy="45" rx="24" ry="17" fill="#FF6B6B"/>
                    <circle cx="42" cy="42" r="2.5" fill="#1a1a1a"/>
                    <circle cx="50" cy="48" r="2.5" fill="#1a1a1a"/>
                    <circle cx="58" cy="42" r="2.5" fill="#1a1a1a"/>
                    <circle cx="46" cy="38" r="2" fill="#1a1a1a"/>
                    <circle cx="54" cy="38" r="2" fill="#1a1a1a"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 4: THE OUTCOME - Medium card, bottom right */}
            <div className="story-card card-medium">
              <div className="card-number">04 // THE OUTCOME</div>

              <div className="metrics-grid">
                <div className="metric">
                  <span className="metric-value">$4M</span>
                  <span className="metric-label">revenue</span>
                </div>
                <div className="metric">
                  <span className="metric-value">2000</span>
                  <span className="metric-label">farmers</span>
                </div>
                <div className="metric">
                  <span className="metric-value">5</span>
                  <span className="metric-label">states</span>
                </div>
                <div className="metric">
                  <span className="metric-value">72%</span>
                  <span className="metric-label">ML accuracy</span>
                </div>
              </div>

              <p className="outcome-highlight">India&apos;s first seedless watermelons at commercial scale</p>

              <p className="clients-list">Clients: Lulu, Reliance, Namdari, Zepto, Swiggy</p>
            </div>
          </div>

          <div className="section-cta">
            <Link href="/story" className="btn btn-orange">
              READ FULL STORY →
            </Link>
          </div>
        </section>

        {/* ============================================
            SECTION 3: WHAT I'M LEARNING NOW
            Purpose: Show technical depth + trajectory
            ============================================ */}
        <section className="learning">
          <h2 className="section-title">WHAT I&apos;M LEARNING NOW</h2>

          <div className="learning-grid">
            {/* Left: Terminal window */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title">LEARNING.LOG</span>
              </div>
              <div className="terminal-body">
                <p className="terminal-prompt">$ cat current_focus.txt</p>

                <p className="terminal-heading">BUILDING LLM REASONERS @ NYU</p>
                <p className="terminal-subheading">with Greg Durrett</p>

                <p className="terminal-section-title">CURRENT TOPICS:</p>

                <div className="topic">
                  <p className="topic-name">→ Transformers architecture</p>
                  <p className="topic-desc">How attention actually works</p>
                  <p className="topic-status status-progress">Status: ████████████░░ In progress</p>
                </div>

                <div className="topic">
                  <p className="topic-name">→ FlashAttention</p>
                  <p className="topic-desc">Making transformers fast</p>
                  <p className="topic-status status-learning">Status: ██████░░░░░░░░ Learning</p>
                </div>

                <div className="topic">
                  <p className="topic-name">→ RLHF &amp; Alignment</p>
                  <p className="topic-desc">Teaching models to follow</p>
                  <p className="topic-status status-deep">Status: ████████████████ Deep dive</p>
                </div>

                <div className="topic">
                  <p className="topic-name">→ Chain-of-thought reasoning</p>
                  <p className="topic-desc">Making models think step-by-step</p>
                  <p className="topic-status status-exploring">Status: ████████░░░░░░ Exploring</p>
                </div>

                <div className="topic">
                  <p className="topic-name">→ Agentic systems</p>
                  <p className="topic-desc">Models that plan &amp; execute</p>
                  <p className="topic-status status-starting">Status: ██████░░░░░░░░ Starting</p>
                </div>

                <p className="terminal-emphasis">FROM FIRST PRINCIPLES.</p>
                <p className="terminal-emphasis">NOT JUST API CALLS.</p>

                <p className="terminal-log">[2026-01-26] Current:</p>
                <p className="terminal-log">FlashAttention implementation ✓</p>

                <p className="terminal-link">[View weekly updates →]</p>

                <p className="terminal-cursor">■</p>
              </div>
            </div>

            {/* Right: Coursework */}
            <div className="coursework">
              <p className="coursework-title">COURSEWORK</p>

              <div className="course">
                <p className="course-name">Building LLM Reasoners</p>
                <p className="course-instructor">Greg Durrett, UT Austin</p>
                <p className="course-desc">Topics: Transformers, attention mechanisms, RLHF, reasoning, agents</p>
              </div>

              <div className="course-divider">+</div>

              <div className="course">
                <p className="course-name">Leadership &amp; Stakeholder Management</p>
                <p className="course-desc">Organizational behavior, team dynamics, decision-making</p>
              </div>

              <div className="course-divider">+</div>

              <div className="course">
                <p className="course-name">Lean Launch Pad</p>
                <p className="course-desc">Customer development, market sizing, business validation</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: PROJECTS
            Purpose: Portfolio evidence of AI skills
            ============================================ */}
        <section className="projects">
          <h2 className="section-title">SELECTED PROJECTS</h2>

          <div className="projects-grid">
            {/* Project 1: H-1B RAG */}
            <div className="project-card project-teal">
              <div className="project-header">H1B_RAG.py</div>
              <div className="project-body">
                <h3 className="project-title">H-1B Immigration RAG System</h3>
                <p className="project-desc">
                  Legal Q&amp;A where wrong answers have consequences.
                </p>
                <p className="project-desc">
                  Built deterministic eval: 100-question benchmark, must-include token matching.
                </p>
                <p className="project-impact">
                  Research-quality work on RAG reliability in regulated domains.
                </p>
                <div className="project-tech">
                  <span>LangChain</span>
                  <span>FAISS</span>
                  <span>GPT-4</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">GITHUB →</a>
                  <a href="#" className="project-link">PAPER →</a>
                </div>
              </div>
            </div>

            {/* Project 2: Pico LLM */}
            <div className="project-card project-teal">
              <div className="project-header">PICO_INTERP.py</div>
              <div className="project-body">
                <h3 className="project-title">Pico LLM Interpretability</h3>
                <p className="project-desc">
                  Understanding how small language models form representations.
                </p>
                <p className="project-desc">
                  Mechanistic interpretability on 10M parameter models. Discovered functional roles: early layers handle syntax, late layers handle semantics.
                </p>
                <p className="project-impact">
                  Similar to Anthropic&apos;s interpretability work, but on models small enough to fully understand.
                </p>
                <div className="project-tech">
                  <span>PyTorch</span>
                  <span>Transformers</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">GITHUB →</a>
                  <a href="#" className="project-link">NOTEBOOK →</a>
                </div>
              </div>
            </div>

            {/* Project 3: FasalTech ML */}
            <div className="project-card project-orange">
              <div className="project-header">FASALTECH_ML.py</div>
              <div className="project-body">
                <h3 className="project-title">FasalTech ML Production System</h3>
                <p className="project-desc">
                  Disease prediction for 2000 farmers with terrible connectivity.
                </p>
                <p className="project-desc">
                  Not model accuracy—it was 2G networks, low-quality cameras, farmers who&apos;d never used AI.
                </p>
                <p className="project-impact">
                  72% accuracy vs 65% for expert agronomists. Available 24/7 vs 10 farm visits/day.
                </p>
                <div className="project-tech">
                  <span>TensorFlow</span>
                  <span>Django</span>
                  <span>AWS</span>
                  <span>Flutter</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">CASE STUDY →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: LET'S BUILD SOMETHING
            Purpose: Clear call-to-action
            ============================================ */}
        <section className="cta">
          <h2 className="section-title">LET&apos;S BUILD SOMETHING</h2>

          <div className="cta-container">
            <div className="requirements-window">
              <div className="window-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="window-title">REQUIREMENTS.txt</span>
              </div>
              <div className="window-body">
                <p className="requirements-intro">Looking for Summer 2026 AI roles:</p>

                <div className="requirement">
                  <span className="req-num">01.</span>
                  <div className="req-text">
                    <p className="req-title">Build products that ship to users</p>
                    <p className="req-desc">Not demos. Products people use.</p>
                  </div>
                </div>

                <div className="requirement">
                  <span className="req-num">02.</span>
                  <div className="req-text">
                    <p className="req-title">Work in messy 0→1 problem spaces</p>
                    <p className="req-desc">Figure it out as you go.</p>
                  </div>
                </div>

                <div className="requirement">
                  <span className="req-num">03.</span>
                  <div className="req-text">
                    <p className="req-title">Move fast</p>
                    <p className="req-desc">Prototype → test → ship. Weeks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="/Aryan_Thepade_Resume.pdf" className="btn btn-orange btn-large" download>
                DOWNLOAD RESUME
              </a>
            </div>

            <div className="contact-info">
              <p className="contact-email">AKT8180@nyu.edu</p>
              <div className="contact-links">
                <a href="https://linkedin.com/in/aryanthepade" className="contact-link">LINKEDIN</a>
                <a href="https://github.com/lm10aryan" className="contact-link">GITHUB</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Aryan Thepade. Built with Next.js.</p>
      </footer>

      <style jsx>{`
        /* ==========================================
           DESIGN SYSTEM (from Master Strategy)
           ========================================== */

        /* Typography */
        .hero-name, .box-header, .btn, .nav-logo, .nav-link,
        .section-title, .card-number, .insight-box, .metric-value,
        .outcome-highlight, .terminal-header, .terminal-body,
        .project-header, .project-title, .req-num, .contact-email {
          font-family: 'JetBrains Mono', monospace;
        }

        .hero-value-prop, .hero-proof-text, .box-content p, .hero-context,
        .card-body p, .card-date, .metric-label, .clients-list, .states-list,
        .model-text, .coursework, .project-desc, .project-impact, .project-tech,
        .req-title, .req-desc, .requirements-intro {
          font-family: 'Inter', sans-serif;
        }

        /* ==========================================
           NAVIGATION
           ========================================== */
        .nav {
          position: sticky;
          top: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #f5f1e8;
          border-bottom: 4px solid #1a1a1a;
          z-index: 100;
        }

        .nav-logo {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-size: 0.875rem;
          font-weight: 700;
          color: #1a1a1a;
          text-decoration: none;
        }

        .nav-link:hover {
          text-decoration: underline;
        }

        /* ==========================================
           MAIN
           ========================================== */
        main {
          background: #f5f1e8;
        }

        /* ==========================================
           SECTION 1: HERO
           ========================================== */
        .hero {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          min-height: calc(100vh - 80px);
          align-items: center;
        }

        .hero-left {
          max-width: 600px;
        }

        .hero-context {
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #1a1a1a;
          opacity: 0.6;
          margin: 0 0 1rem 0;
        }

        .hero-name {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1;
          margin: 0 0 1.5rem 0;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: #1a1a1a;
        }

        .hero-value-prop {
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 1.4;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }

        .hero-proof-text {
          font-size: 1.125rem;
          line-height: 1.7;
          margin: 0 0 2rem 0;
          color: #1a1a1a;
          opacity: 0.85;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Buttons */
        .btn {
          display: inline-block;
          padding: 1rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          border: 4px solid #1a1a1a;
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 #1a1a1a;
        }

        .btn:active {
          transform: translate(0, 0);
          box-shadow: none;
        }

        .btn-orange {
          background: #ff8c42;
          color: #1a1a1a;
        }

        .btn-teal {
          background: #4ecdc4;
          color: #1a1a1a;
        }

        .btn-large {
          padding: 1.25rem 2rem;
          font-size: 1rem;
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .proof-box {
          border: 4px solid #1a1a1a;
        }

        .box-header {
          padding: 0.75rem 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 4px solid #1a1a1a;
        }

        .box-orange .box-header {
          background: #ff8c42;
          color: #1a1a1a;
        }

        .box-teal .box-header {
          background: #4ecdc4;
          color: #1a1a1a;
        }

        .box-magenta .box-header {
          background: #d946ef;
          color: white;
        }

        .box-content {
          padding: 1rem;
          background: #f5f1e8;
        }

        .box-content p {
          font-size: 0.9375rem;
          line-height: 1.6;
          margin: 0;
          color: #1a1a1a;
        }

        /* ==========================================
           SECTION 2: FASALTECH STORY
           ========================================== */
        .fasaltech {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 4px solid #1a1a1a;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          text-transform: uppercase;
          text-align: center;
          margin: 0 0 4rem 0;
          color: #1a1a1a;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 2rem;
        }

        .story-card {
          border: 4px solid #1a1a1a;
          padding: 2rem;
          background: #f5f1e8;
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .story-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 #1a1a1a;
        }

        .card-large {
          grid-row: span 2;
        }

        .card-wide {
          grid-column: span 2;
        }

        .card-beige {
          background: #fff5e6;
        }

        .card-mint {
          background: #e6fff5;
        }

        .card-number {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #1a1a1a;
          opacity: 0.5;
          margin-bottom: 0.5rem;
        }

        .card-date {
          font-size: 0.8125rem;
          color: #1a1a1a;
          opacity: 0.6;
          margin: 0 0 1.5rem 0;
        }

        .card-body {
          margin-bottom: 1rem;
        }

        .card-body p {
          font-size: 1rem;
          line-height: 1.7;
          margin: 0 0 0.75rem 0;
          color: #1a1a1a;
        }

        .card-body p:last-child {
          margin-bottom: 0;
        }

        .emphasis-red {
          color: #cc0000 !important;
          font-weight: 600;
        }

        .illustration {
          display: flex;
          justify-content: center;
          margin: 1rem 0 1.5rem 0;
        }

        .fruit-svg {
          width: 80px;
          height: 70px;
        }

        .fruit-large {
          width: 120px;
          height: 90px;
        }

        .insight-box {
          background: #1a1a1a;
          color: #f5f1e8;
          padding: 1rem;
          margin: 1rem 0;
          font-size: 1rem;
          font-weight: 700;
        }

        .insight-label {
          display: block;
          font-size: 0.6875rem;
          opacity: 0.6;
          margin-bottom: 0.25rem;
          font-weight: 400;
        }

        .model-text {
          font-size: 0.9375rem !important;
          line-height: 1.8 !important;
        }

        .execution-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: center;
        }

        .execution-text p {
          font-size: 1rem;
          line-height: 1.7;
          margin: 0 0 0.75rem 0;
          color: #1a1a1a;
        }

        .states-list {
          font-weight: 600;
          color: #4ecdc4 !important;
        }

        .watermelon-illustration {
          margin: 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin: 1rem 0 1.5rem 0;
        }

        .metric {
          text-align: center;
          padding: 1rem;
          background: rgba(0,0,0,0.03);
          border: 2px solid #1a1a1a;
        }

        .metric-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
        }

        .metric-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #1a1a1a;
          opacity: 0.6;
        }

        .outcome-highlight {
          font-size: 0.875rem;
          font-weight: 700;
          text-align: center;
          padding: 0.75rem;
          background: #ff8c42;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .clients-list {
          font-size: 0.8125rem;
          text-align: center;
          color: #1a1a1a;
          opacity: 0.7;
          margin: 0;
        }

        .section-cta {
          text-align: center;
          margin-top: 3rem;
        }

        /* ==========================================
           SECTION 3: LEARNING
           ========================================== */
        .learning {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 4px solid #1a1a1a;
        }

        .learning-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .terminal {
          border: 5px solid #1a1a1a;
          box-shadow: 8px 8px 0 rgba(0,0,0,0.1);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: #4ecdc4;
          border-bottom: 4px solid #1a1a1a;
        }

        .terminal-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #1a1a1a;
        }

        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .terminal-title {
          font-size: 0.75rem;
          font-weight: 700;
        }

        .terminal-body {
          padding: 1.5rem;
          background: #f5f1e8;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .terminal-prompt {
          opacity: 0.5;
          margin: 0 0 1.5rem 0;
        }

        .terminal-heading {
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
        }

        .terminal-subheading {
          font-size: 0.875rem;
          opacity: 0.6;
          margin: 0 0 1.5rem 0;
        }

        .terminal-section-title {
          font-size: 0.75rem;
          font-weight: 700;
          opacity: 0.5;
          margin: 0 0 1rem 0;
        }

        .topic {
          margin-bottom: 1rem;
        }

        .topic-name {
          font-weight: 700;
          margin: 0;
        }

        .topic-desc {
          font-size: 0.8125rem;
          opacity: 0.7;
          margin: 0.25rem 0;
        }

        .topic-status {
          font-size: 0.75rem;
          margin: 0.25rem 0 0 0;
        }

        .status-progress { color: #ff8c42; }
        .status-learning { color: #888; }
        .status-deep { color: #4ecdc4; }
        .status-exploring { color: #ff8c42; }
        .status-starting { color: #888; }

        .terminal-emphasis {
          font-weight: 700;
          margin: 1.5rem 0 0.25rem 0;
        }

        .terminal-log {
          font-size: 0.8125rem;
          opacity: 0.6;
          margin: 0.5rem 0;
        }

        .terminal-link {
          color: #4ecdc4;
          margin: 1rem 0;
        }

        .terminal-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .coursework {
          padding-top: 1rem;
        }

        .coursework-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }

        .course {
          margin-bottom: 1rem;
        }

        .course-name {
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          color: #1a1a1a;
        }

        .course-instructor {
          font-size: 0.875rem;
          opacity: 0.6;
          margin: 0 0 0.5rem 0;
        }

        .course-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
          color: #1a1a1a;
          opacity: 0.8;
        }

        .course-divider {
          font-family: 'JetBrains Mono', monospace;
          text-align: center;
          font-size: 1.5rem;
          opacity: 0.3;
          margin: 1.5rem 0;
        }

        /* ==========================================
           SECTION 4: PROJECTS
           ========================================== */
        .projects {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 4px solid #1a1a1a;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .project-card {
          border: 4px solid #1a1a1a;
          background: #f5f1e8;
          transition: transform 0.1s, box-shadow 0.1s;
        }

        .project-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 #1a1a1a;
        }

        .project-header {
          padding: 0.75rem 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          border-bottom: 4px solid #1a1a1a;
        }

        .project-teal .project-header {
          background: #4ecdc4;
        }

        .project-orange .project-header {
          background: #ff8c42;
        }

        .project-body {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }

        .project-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          margin: 0 0 0.75rem 0;
          color: #1a1a1a;
        }

        .project-impact {
          font-size: 0.875rem;
          font-style: italic;
          opacity: 0.8;
          margin: 0 0 1rem 0;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .project-tech span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6875rem;
          padding: 0.25rem 0.5rem;
          background: rgba(0,0,0,0.05);
          border: 2px solid #1a1a1a;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          color: #1a1a1a;
          text-decoration: none;
        }

        .project-link:hover {
          text-decoration: underline;
        }

        /* ==========================================
           SECTION 5: CTA
           ========================================== */
        .cta {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 4px solid #1a1a1a;
        }

        .cta-container {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .requirements-window {
          border: 5px solid #1a1a1a;
          text-align: left;
          margin-bottom: 2rem;
        }

        .window-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: #f5f1e8;
          border-bottom: 4px solid #1a1a1a;
        }

        .window-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .window-body {
          padding: 1.5rem;
          background: #f5f1e8;
        }

        .requirements-intro {
          font-size: 1rem;
          margin: 0 0 1.5rem 0;
          color: #1a1a1a;
        }

        .requirement {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .req-num {
          font-size: 0.875rem;
          font-weight: 700;
          opacity: 0.4;
          min-width: 30px;
        }

        .req-text {
          flex: 1;
        }

        .req-title {
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          color: #1a1a1a;
        }

        .req-desc {
          font-size: 0.875rem;
          opacity: 0.7;
          margin: 0;
        }

        .cta-buttons {
          margin-bottom: 2rem;
        }

        .contact-info {
          text-align: center;
        }

        .contact-email {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: #1a1a1a;
        }

        .contact-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        .contact-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          font-weight: 700;
          color: #1a1a1a;
          text-decoration: none;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        /* ==========================================
           FOOTER
           ========================================== */
        .footer {
          padding: 2rem;
          text-align: center;
          border-top: 4px solid #1a1a1a;
          background: #f5f1e8;
        }

        .footer p {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #1a1a1a;
          opacity: 0.5;
          margin: 0;
        }

        /* ==========================================
           RESPONSIVE
           ========================================== */
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 4rem 1.5rem;
          }

          .hero-right {
            order: -1;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }

          .hero-name {
            font-size: 3rem;
          }

          .hero-value-prop {
            font-size: 1.25rem;
          }

          .story-grid {
            grid-template-columns: 1fr;
          }

          .card-large,
          .card-wide {
            grid-row: span 1;
            grid-column: span 1;
          }

          .execution-grid {
            grid-template-columns: 1fr;
          }

          .watermelon-illustration {
            display: none;
          }

          .learning-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .nav {
            padding: 0.75rem 1rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .nav-link {
            font-size: 0.75rem;
          }

          .hero {
            padding: 3rem 1.5rem;
          }

          .hero-right {
            grid-template-columns: 1fr;
          }

          .hero-name {
            font-size: 2.5rem;
          }

          .hero-value-prop {
            font-size: 1.125rem;
          }

          .hero-proof-text {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn {
            text-align: center;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .fasaltech,
          .learning,
          .projects,
          .cta {
            padding: 4rem 1.5rem;
          }

          .story-card,
          .project-body {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
