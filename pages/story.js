import Head from 'next/head'
import Link from 'next/link'
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
        <section className="story-hero">
          <div className="story-hero-terminal">
            <div className="terminal-chrome">
              <div className="terminal-dots">
                <span className="dot" style={{ background: 'var(--peach-orange)' }}></span>
                <span className="dot" style={{ background: 'var(--sage-green)' }}></span>
                <span className="dot" style={{ background: 'var(--soft-teal)' }}></span>
              </div>
              <span className="terminal-title">STORY.exe</span>
            </div>
            <div className="story-hero-content">
              <h1>HOW I BUILT A $4M BUSINESS</h1>
              <p className="story-hero-subtitle">Without knowing farming. Without knowing how to code.</p>
            </div>
          </div>
        </section>

        {/* Act 1 */}
        <section className="story-section">
          <div className="story-container">
            <div className="act-header">
              <span className="act-number">01</span>
              <h2 className="act-title">THE GUILT</h2>
              <div className="act-bar" style={{ background: 'var(--peach-orange)' }}></div>
            </div>

            <div className="act-content">
              <p className="act-date">June 2020</p>

              <p className="act-text">
                I was in my dorm room watching Game of Thrones. Outside, thousands of farmers were marching to the state capital. Drought. Crop failures. Suicides.
              </p>

              <p className="act-text">I kept watching the show.</p>

              <p className="act-text">
                The next day, the guilt wouldn&apos;t leave. I&apos;m an engineer. I should be able to help. I submitted a project proposal. Zero knowledge about agriculture. Zero connections. Just guilt and a vague idea.
              </p>

              <div className="terminal-block">
                <div className="terminal-block-header">STATUS.log</div>
                <pre className="terminal-block-code">
{`> proposal.submit()
STATUS: APPROVED

knowledge_farming = 0
knowledge_coding  = "basics"
connections       = []

// They approved it.
// Now I had to actually do something.`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Act 2 */}
        <section className="story-section" style={{ background: 'rgba(0,0,0,0.03)' }}>
          <div className="story-container">
            <div className="act-header">
              <span className="act-number">02</span>
              <h2 className="act-title">EVERYTHING FAILED</h2>
              <div className="act-bar" style={{ background: 'var(--dusty-pink)' }}></div>
            </div>

            <div className="act-content">
              <div className="failure-grid">
                <div className="failure-card">
                  <div className="failure-card-header">ATTEMPT_1.js</div>
                  <div className="failure-card-body">
                    <h3>Build an App</h3>
                    <p>Farmers can use it to get better prices.</p>
                    <div className="failure-error">
                      <span className="error-label">ERROR:</span> Most farmers don&apos;t have smartphones.<br/>
                      <span className="error-label">ERROR:</span> The ones who do don&apos;t trust random engineering students.
                    </div>
                    <div className="failure-result">downloads = 12 <span className="comment">// 7 were friends</span></div>
                  </div>
                </div>

                <div className="failure-card">
                  <div className="failure-card-header">ATTEMPT_2.js</div>
                  <div className="failure-card-body">
                    <h3>Sell Pesticides</h3>
                    <p>Better pesticides = more profit for farmers.</p>
                    <div className="failure-error">
                      <span className="error-label">ERROR:</span> Incentive structure broken.<br/>
                      <span className="error-label">ERROR:</span> Local agents made money on volume, not outcomes.
                    </div>
                    <div className="failure-result">sales = 0</div>
                  </div>
                </div>
              </div>

              <div className="act-callout" style={{ marginTop: '32px' }}>
                I was failing in a domain I didn&apos;t understand, with people who had no reason to trust me.
              </div>
            </div>
          </div>
        </section>

        {/* Act 3 */}
        <section className="story-section">
          <div className="story-container">
            <div className="act-header">
              <span className="act-number">03</span>
              <h2 className="act-title">THE MUSKMELON MOMENT</h2>
              <div className="act-bar" style={{ background: 'var(--sage-green)' }}></div>
            </div>

            <div className="act-content">
              <p className="act-date">Summer 2021</p>

              <p className="act-text">
                I saw a farmer on TV. He grew muskmelons. Sold them for 10x what other farmers got for regular crops.
              </p>

              <div className="quote-block" style={{ borderColor: 'var(--sage-green)' }}>
                <p>&quot;Premium crops need premium buyers. I found a buyer who cares about quality. Now quality is profitable.&quot;</p>
              </div>

              <p className="act-text"><strong>That&apos;s when I understood.</strong></p>

              <p className="act-text">
                The problem wasn&apos;t that farmers didn&apos;t have technology. The entire incentive structure made quality unprofitable. Middlemen bought by volume. Retailers wanted cheap. Farmers had no reason to grow better crops.
              </p>

              <div className="system-comparison">
                <div className="system-box system-old">
                  <div className="system-label">OLD_SYSTEM</div>
                  <ul>
                    <li>Middlemen buy by volume</li>
                    <li>Retailers want cheap</li>
                    <li>No incentive for quality</li>
                  </ul>
                  <div className="system-result bad">Quality unprofitable</div>
                </div>
                <div className="system-arrow">→</div>
                <div className="system-box system-new">
                  <div className="system-label">NEW_SYSTEM</div>
                  <ul>
                    <li>Farmers get premium prices</li>
                    <li>Buyers get consistent quality</li>
                    <li>I get coordination margin</li>
                  </ul>
                  <div className="system-result good">Everyone wins</div>
                </div>
              </div>

              <div className="success-block" style={{ background: 'var(--sage-green)' }}>
                <p>FIRST DEAL: 5 TONS OF MUSKMELONS → LOCAL RETAILER</p>
                <p>STATUS: IT WORKED</p>
              </div>
            </div>
          </div>
        </section>

        {/* Act 4 */}
        <section className="story-section" style={{ background: 'rgba(0,0,0,0.03)' }}>
          <div className="story-container">
            <div className="act-header">
              <span className="act-number">04</span>
              <h2 className="act-title">SEEDLESS WATERMELON MONOPOLY</h2>
              <div className="act-bar" style={{ background: 'var(--soft-teal)' }}></div>
            </div>

            <div className="act-content">
              <p className="act-text">
                The muskmelon model proved: <strong>premium crops + premium buyers + direct relationships = profitable for everyone.</strong>
              </p>

              <p className="act-text">
                Seedless watermelons. India didn&apos;t have them at scale. Every grocery store imported them or didn&apos;t stock them. Farmers who tried to grow them failed because they didn&apos;t know the technique.
              </p>

              <p className="act-text">
                I spent 3 months learning seedless watermelon cultivation. Found farmers willing to experiment. Taught them the technique. Built relationships with Reliance, Namdari, and premium retailers.
              </p>

              <div className="terminal-block">
                <div className="terminal-block-header">RESULTS.json</div>
                <pre className="terminal-block-code">
{`{
  "year": "late_2021",
  "achievement": "India's first seedless watermelon supply at scale",
  "farmer_earnings": "3x regular watermelons",
  "retailer_satisfaction": "consistent quality",
  "competition": "none",
  "reason": "no one else figured out the full system"
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Act 5 */}
        <section className="story-section story-section-highlight">
          <div className="story-container">
            <div className="act-header">
              <span className="act-number" style={{ color: 'var(--peach-orange)' }}>05</span>
              <h2 className="act-title" style={{ color: 'var(--peach-orange)' }}>THE DO-OR-DIE MOMENT</h2>
              <div className="act-bar" style={{ background: 'var(--peach-orange)' }}></div>
            </div>

            <div className="act-content">
              <p className="act-date" style={{ color: 'var(--peach-orange)' }}>September 2021</p>

              <p className="act-text">
                Phone rings. Lulu Hypermarket Dubai. They want 50 tons of watermelons. Massive order. Could change everything.
              </p>

              <p className="act-highlight">I said yes.</p>

              <p className="act-text">
                Then Maharashtra started flooding. My farmers couldn&apos;t harvest. My usual contacts couldn&apos;t deliver. I had never been to Karnataka. Didn&apos;t know anyone there. Didn&apos;t speak Kannada.
              </p>

              <div className="options-block">
                <div className="option">
                  <span className="option-num">01</span>
                  <span className="option-text">Tell Lulu I can&apos;t deliver. Lose credibility. Maybe lose the business.</span>
                </div>
                <div className="option">
                  <span className="option-num">02</span>
                  <span className="option-text">Go to Karnataka and figure it out.</span>
                </div>
              </div>

              <p className="act-highlight">I went to Karnataka.</p>

              <p className="act-text">
                Cold called farmers. Showed up at farms. Explained what I needed. Built trust in days, not months. Found farmers in Andhra Pradesh. Then Telangana. Then Tamil Nadu.
              </p>

              <div className="success-block" style={{ background: 'var(--sage-green)', marginTop: '32px' }}>
                <p>IN 2 MONTHS: BUILT 4 SUPPLY CHAINS ACROSS 4 STATES</p>
                <p>DELIVERED 50 TONS TO LULU. ON TIME. CONSISTENT QUALITY.</p>
              </div>

              <p className="act-text" style={{ marginTop: '24px' }}>
                They kept ordering. Then Reliance. Then Namdari. Then Zepto. Then Swiggy.
              </p>
            </div>
          </div>
        </section>

        {/* Act 6 */}
        <section className="story-section">
          <div className="story-container">
            <div className="act-header">
              <span className="act-number">06</span>
              <h2 className="act-title">THE OUTCOME</h2>
              <div className="act-bar" style={{ background: 'var(--sage-green)' }}></div>
            </div>

            <div className="act-content">
              <div className="metrics-terminal">
                <div className="metrics-terminal-header">FINAL_METRICS.json</div>
                <div className="metrics-grid">
                  <div className="metric-big">
                    <span className="metric-big-val">$4M</span>
                    <span className="metric-big-lbl">Revenue</span>
                  </div>
                  <div className="metric-big">
                    <span className="metric-big-val">2000</span>
                    <span className="metric-big-lbl">Farmers</span>
                  </div>
                  <div className="metric-big">
                    <span className="metric-big-val">5</span>
                    <span className="metric-big-lbl">States</span>
                  </div>
                  <div className="metric-big">
                    <span className="metric-big-val">72%</span>
                    <span className="metric-big-lbl">ML Accuracy</span>
                  </div>
                </div>
                <div className="metrics-clients">
                  Lulu Dubai · Reliance Fresh · Namdari · Zepto · Swiggy
                </div>
              </div>

              <p className="act-text" style={{ marginTop: '32px' }}>
                The business worked because I understood something most people missed:
              </p>

              <div className="act-callout">
                The problem wasn&apos;t farming techniques. It was incentive misalignment. Make quality profitable for everyone, and everyone wins.
              </div>
            </div>
          </div>
        </section>

        {/* Act 7 */}
        <section className="story-section" style={{ background: 'rgba(0,0,0,0.03)' }}>
          <div className="story-container">
            <div className="act-header">
              <span className="act-number">07</span>
              <h2 className="act-title">WHAT THIS TAUGHT ME ABOUT AI</h2>
              <div className="act-bar" style={{ background: 'var(--soft-teal)' }}></div>
            </div>

            <div className="act-content">
              <p className="act-text">
                AI is in the same place agriculture was in 2020. Powerful tools exist. Most implementations fail. Not because the technology doesn&apos;t work. Because the incentive structures are broken.
              </p>

              <div className="parallels-grid">
                <div className="parallel-item">
                  <div className="parallel-label">MISALIGNED INCENTIVES</div>
                  <p>Builders optimize for demos, users need reliability</p>
                </div>
                <div className="parallel-item">
                  <div className="parallel-label">BROKEN TRUST</div>
                  <p>Users burned by AI hype, hesitant to adopt</p>
                </div>
                <div className="parallel-item">
                  <div className="parallel-label">SYSTEM DESIGN</div>
                  <p>AI tools that don&apos;t fit into actual workflows</p>
                </div>
              </div>

              <p className="act-text">
                This is why I&apos;m learning AI from first principles. Not to build demos. To build systems that actually work for the people using them.
              </p>

              <div className="act-callout">
                I did it with farmers who had no reason to trust me. I can do it with AI.
              </div>
            </div>
          </div>
        </section>

        {/* Epilogue */}
        <section className="story-section">
          <div className="story-container">
            <div className="act-header">
              <span className="act-number">08</span>
              <h2 className="act-title">EPILOGUE</h2>
              <div className="act-bar" style={{ background: 'var(--peach-orange)' }}></div>
            </div>

            <div className="act-content">
              <p className="act-text">
                I graduated in 2024. Came to NYU for my MS in Computer Engineering. Now I&apos;m learning how frontier AI models actually work. Transformers. RLHF. Chain-of-thought reasoning. RAG systems. Interpretability.
              </p>

              <p className="act-text">From first principles.</p>

              <p className="act-text">Same velocity I learned farming. Same method I built supply chains.</p>

              <div className="success-block" style={{ background: 'var(--peach-orange)' }}>
                <p>SUMMER 2026: LOOKING FOR AI ROLES WHERE I CAN BUILD PRODUCTS THAT SHIP TO REAL USERS, WORK IN MESSY 0→1 PROBLEM SPACES, AND MOVE FAST.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="story-cta">
          <div className="story-container" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <RetroButton href="/resume.pdf">DOWNLOAD RESUME</RetroButton>
              <RetroButton href="mailto:aryan@aryanthepade.com" color="teal">EMAIL ME</RetroButton>
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <a href="https://linkedin.com/in/aryanthepade" className="retro-link">[LINKEDIN]</a>
              <a href="https://github.com/lm10aryan" className="retro-link">[GITHUB]</a>
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
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
          © 2026 ARYAN THEPADE · BUILT WITH NEXT.JS
        </p>
      </footer>

      <style jsx>{`
        /* ==========================================
           STORY PAGE STYLES
           ========================================== */

        .story-hero {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px 60px;
        }

        .story-hero-terminal {
          width: 90%;
          max-width: 700px;
          background: var(--bg-cream);
          border: 6px solid var(--text-black);
          box-shadow: 12px 12px 0 var(--text-black);
        }

        .terminal-chrome {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 4px solid var(--text-black);
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .terminal-dots .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid var(--text-black);
        }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .story-hero-content {
          padding: 40px 32px;
          text-align: center;
        }

        .story-hero-content h1 {
          font-family: var(--font-mono);
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }

        .story-hero-subtitle {
          font-family: var(--font-sans);
          font-size: 18px;
          margin: 0;
          opacity: 0.7;
        }

        /* Section Layout */
        .story-section {
          padding: 80px 24px;
        }

        .story-section-highlight {
          background: var(--text-black);
          color: var(--bg-cream);
        }

        .story-container {
          max-width: 700px;
          margin: 0 auto;
        }

        /* Act Header */
        .act-header {
          margin-bottom: 40px;
        }

        .act-number {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          opacity: 0.5;
          display: block;
          margin-bottom: 8px;
        }

        .act-title {
          font-family: var(--font-mono);
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 16px 0;
          text-transform: uppercase;
        }

        .act-bar {
          height: 6px;
          width: 100px;
        }

        /* Act Content */
        .act-content {
        }

        .act-date {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          margin: 0 0 24px 0;
          opacity: 0.6;
        }

        .act-text {
          font-family: var(--font-sans);
          font-size: 17px;
          line-height: 1.7;
          margin: 0 0 20px 0;
        }

        .act-highlight {
          font-family: var(--font-mono);
          font-size: 24px;
          font-weight: 700;
          margin: 32px 0;
          color: var(--peach-orange);
        }

        .act-callout {
          font-family: var(--font-mono);
          font-size: 18px;
          font-weight: 700;
          padding: 24px;
          border: 4px solid var(--text-black);
          background: rgba(0,0,0,0.03);
          margin: 32px 0;
        }

        .story-section-highlight .act-callout {
          border-color: var(--bg-cream);
          background: rgba(255,255,255,0.1);
        }

        /* Terminal Block */
        .terminal-block {
          background: var(--bg-cream);
          border: 4px solid var(--text-black);
          box-shadow: 6px 6px 0 var(--text-black);
          margin: 32px 0;
        }

        .terminal-block-header {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          padding: 10px 16px;
          border-bottom: 4px solid var(--text-black);
          background: rgba(0,0,0,0.05);
        }

        .terminal-block-code {
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.6;
          padding: 20px;
          margin: 0;
          overflow-x: auto;
        }

        /* Failure Cards */
        .failure-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .failure-card {
          border: 4px solid var(--text-black);
          background: var(--bg-cream);
        }

        .failure-card-header {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          padding: 10px 16px;
          border-bottom: 4px solid var(--text-black);
          background: var(--dusty-pink);
        }

        .failure-card-body {
          padding: 20px;
        }

        .failure-card-body h3 {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 8px 0;
        }

        .failure-card-body p {
          font-family: var(--font-sans);
          font-size: 14px;
          margin: 0 0 16px 0;
        }

        .failure-error {
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .error-label {
          color: #c41e3a;
          font-weight: 700;
        }

        .failure-result {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          padding: 8px 12px;
          background: rgba(0,0,0,0.05);
        }

        .comment {
          opacity: 0.5;
        }

        /* Quote Block */
        .quote-block {
          border-left: 6px solid;
          padding: 20px 24px;
          margin: 32px 0;
          background: rgba(0,0,0,0.03);
        }

        .quote-block p {
          font-family: var(--font-sans);
          font-size: 18px;
          font-style: italic;
          line-height: 1.6;
          margin: 0;
        }

        /* System Comparison */
        .system-comparison {
          display: flex;
          align-items: center;
          gap: 24px;
          margin: 32px 0;
        }

        .system-box {
          flex: 1;
          border: 4px solid var(--text-black);
          padding: 20px;
        }

        .system-label {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .system-box ul {
          margin: 0 0 16px 0;
          padding-left: 20px;
          font-family: var(--font-sans);
          font-size: 14px;
        }

        .system-box li {
          margin-bottom: 6px;
        }

        .system-result {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          padding: 8px 12px;
          text-align: center;
        }

        .system-result.bad {
          background: rgba(196, 30, 58, 0.1);
          color: #c41e3a;
        }

        .system-result.good {
          background: var(--sage-green);
        }

        .system-arrow {
          font-size: 32px;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* Success Block */
        .success-block {
          border: 4px solid var(--text-black);
          padding: 24px;
          margin: 32px 0;
          text-align: center;
        }

        .success-block p {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: var(--text-black);
        }

        .success-block p:last-child {
          margin-bottom: 0;
        }

        /* Options Block */
        .options-block {
          border: 4px solid var(--bg-cream);
          padding: 24px;
          margin: 32px 0;
        }

        .option {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
        }

        .option:last-child {
          margin-bottom: 0;
        }

        .option-num {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          color: var(--peach-orange);
        }

        .option-text {
          font-family: var(--font-sans);
          font-size: 16px;
        }

        /* Metrics Terminal */
        .metrics-terminal {
          border: 4px solid var(--text-black);
          background: var(--bg-cream);
          box-shadow: 8px 8px 0 var(--text-black);
        }

        .metrics-terminal-header {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          padding: 12px 16px;
          border-bottom: 4px solid var(--text-black);
          background: var(--sage-green);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .metric-big {
          text-align: center;
          padding: 24px 16px;
          border-right: 2px solid rgba(0,0,0,0.1);
        }

        .metric-big:last-child {
          border-right: none;
        }

        .metric-big-val {
          display: block;
          font-family: var(--font-mono);
          font-size: 32px;
          font-weight: 700;
        }

        .metric-big-lbl {
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          opacity: 0.6;
          margin-top: 4px;
        }

        .metrics-clients {
          font-family: var(--font-mono);
          font-size: 12px;
          text-align: center;
          padding: 16px;
          border-top: 2px solid rgba(0,0,0,0.1);
          opacity: 0.7;
        }

        /* Parallels Grid */
        .parallels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 32px 0;
        }

        .parallel-item {
          border: 4px solid var(--text-black);
          padding: 20px;
          background: var(--bg-cream);
        }

        .parallel-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--soft-teal);
        }

        .parallel-item p {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* CTA */
        .story-cta {
          padding: 80px 24px;
          background: rgba(0,0,0,0.03);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .story-hero-content h1 {
            font-size: 28px;
          }

          .act-title {
            font-size: 22px;
          }

          .failure-grid {
            grid-template-columns: 1fr;
          }

          .system-comparison {
            flex-direction: column;
          }

          .system-arrow {
            transform: rotate(90deg);
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .metric-big {
            border-right: none;
            border-bottom: 2px solid rgba(0,0,0,0.1);
          }

          .parallels-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .story-hero-content {
            padding: 24px 20px;
          }

          .story-hero-content h1 {
            font-size: 24px;
          }

          .act-highlight {
            font-size: 20px;
          }

          .metric-big-val {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  )
}
