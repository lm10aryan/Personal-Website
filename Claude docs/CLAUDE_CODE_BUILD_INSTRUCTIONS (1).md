# CLAUDE CODE BUILD INSTRUCTIONS
**Personal Website Redesign - Retro Computing Aesthetic**

---

## PROJECT CONTEXT

**Current repo:** https://github.com/lm10aryan/Personal-Website  
**Live site:** aryanthepade.com  
**Goal:** Rebuild for summer 2026 AI internship applications  
**Aesthetic:** Retro computing + agriculture + AI fusion

---

## DESIGN PHILOSOPHY

**Visual metaphor:** "Building AI systems with the same hands-on approach I built farm supply chains"

**Core aesthetic elements:**
- Mac-style window chrome (colored dots)
- Thick black borders (5-6px)
- Hard shadows (no blur, offset)
- Tilted/rotated cards (±1-2deg)
- Muted retro color palette
- Monospace typography
- Terminal/code formatting
- Minimal custom illustrations (CSS first, images later)

---

## COLOR SYSTEM

```css
/* Paste into your CSS */
:root {
  /* Base */
  --bg-cream: #FFF8E7;
  --text-black: #000000;
  
  /* Accents (all muted/desaturated) */
  --sage-green: #9FB5A5;    /* Agriculture */
  --peach-orange: #FF9B71;   /* Tech warmth */
  --soft-teal: #6BB4A8;      /* AI/water */
  --dusty-pink: #E8B4D9;     /* Vitality */
  
  /* Borders & Shadows */
  --border-thick: 6px solid #000000;
  --border-medium: 4px solid #000000;
  --shadow-offset: 8px 8px 0 #000000;
}
```

---

## TYPOGRAPHY

```html
<!-- Add to <head> -->
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

```css
/* Typography scale */
.text-hero { font: 700 64px/1.2 'Space Mono', monospace; }
.text-h1 { font: 700 40px/1.2 'Space Mono', monospace; }
.text-h2 { font: 700 28px/1.2 'Space Mono', monospace; }
.text-body { font: 400 18px/1.6 'Inter', sans-serif; }
.text-small { font: 400 16px/1.6 'Inter', sans-serif; }

/* Mobile */
@media (max-width: 768px) {
  .text-hero { font-size: 40px; }
  .text-h1 { font-size: 28px; }
  .text-h2 { font-size: 24px; }
  .text-body { font-size: 16px; }
}
```

---

## CORE COMPONENTS TO BUILD

### 1. WindowCard Component

```jsx
// components/WindowCard.jsx
export default function WindowCard({ 
  title = "WINDOW.exe",
  children, 
  colorDot = "orange", // orange, green, teal, pink
  rotate = 0, // degrees
  className = ""
}) {
  return (
    <div 
      className={`window-card ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="window-chrome">
        <div className="window-dots">
          <span className="dot dot-orange"></span>
          <span className="dot dot-green"></span>
          <span className="dot dot-teal"></span>
        </div>
        <span className="window-title">{title}</span>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}
```

```css
/* styles/components.css */
.window-card {
  background: var(--bg-cream);
  border: 6px solid var(--text-black);
  border-radius: 8px;
  box-shadow: var(--shadow-offset);
  overflow: hidden;
}

.window-chrome {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 4px solid var(--text-black);
  background: var(--bg-cream);
}

.window-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--text-black);
}

.dot-orange { background: var(--peach-orange); }
.dot-green { background: var(--sage-green); }
.dot-teal { background: var(--soft-teal); }

.window-title {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.window-content {
  padding: 32px;
}

@media (max-width: 768px) {
  .window-content {
    padding: 24px;
  }
}
```

### 2. RetroButton Component

```jsx
// components/RetroButton.jsx
export default function RetroButton({ 
  children, 
  href,
  color = "orange", // orange, green, teal, pink
  className = "" 
}) {
  const colorMap = {
    orange: 'var(--peach-orange)',
    green: 'var(--sage-green)',
    teal: 'var(--soft-teal)',
    pink: 'var(--dusty-pink)'
  };
  
  return (
    <a 
      href={href}
      className={`retro-button ${className}`}
      style={{ background: colorMap[color] }}
    >
      {children}
    </a>
  );
}
```

```css
.retro-button {
  display: inline-block;
  padding: 16px 48px;
  background: var(--peach-orange);
  border: 5px solid var(--text-black);
  box-shadow: 6px 6px 0 var(--text-black);
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-black);
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.retro-button:hover {
  transform: translateY(-2px);
  box-shadow: 8px 10px 0 var(--text-black);
}

.retro-button:active {
  transform: translateY(0);
  box-shadow: 4px 4px 0 var(--text-black);
}
```

---

## HOMEPAGE CONTENT (Copy-paste ready)

### Hero Section

```jsx
<section className="hero">
  <WindowCard title="ARYAN_THEPADE.exe" rotate={-1}>
    <h1 className="text-hero">ARYAN THEPADE</h1>
    
    <p className="text-body" style={{ marginTop: '24px', maxWidth: '600px' }}>
      I didn't know anything about farming or coding.
      Built $4M in 4 years anyway.
      Now learning frontier AI the same way.
    </p>
    
    <div className="metrics-box" style={{ marginTop: '32px' }}>
      <div style={{ 
        background: 'var(--sage-green)', 
        border: '6px solid black',
        padding: '24px',
        transform: 'rotate(2deg)',
        boxShadow: '8px 8px 0 black'
      }}>
        <p style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '18px', 
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          MS @ NYU · DEC 2026<br/>
          $4M · 2000 FARMERS · ML IN PRODUCTION
        </p>
      </div>
    </div>
    
    <div style={{ marginTop: '32px', textAlign: 'center' }}>
      <RetroButton href="/resume.pdf">RESUME ↓</RetroButton>
    </div>
  </WindowCard>
</section>
```

### Proof Section

```jsx
<section className="proof">
  <div style={{ maxWidth: '720px', margin: '0 auto' }}>
    <p className="text-body">
      <strong>September 2021.</strong>
    </p>
    
    <p className="text-body" style={{ marginTop: '16px' }}>
      Lulu Hypermarket wanted 50 tons of watermelons. I said yes. 
      Then Maharashtra started flooding. My contacts couldn't deliver. 
      I'd never been to Karnataka. I didn't know anyone there.
    </p>
    
    <p className="text-h2" style={{ margin: '32px 0', fontWeight: 700 }}>
      I went anyway.
    </p>
    
    <p className="text-body">
      Built 4 supply chains in 2 months. Across Karnataka, Andhra Pradesh, 
      Telangana, Tamil Nadu. Delivered to Lulu. Then to Reliance. Then to Namdari.
    </p>
    
    <WindowCard title="RESULTS.json" colorDot="teal" rotate={2} 
                style={{ marginTop: '32px' }}>
      <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '16px' }}>
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
      the incentive structure was broken. Farmers couldn't make money 
      on quality because the middlemen didn't care. I redesigned the system 
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
```

### Current Work Section

```jsx
<section className="current-work">
  <div style={{ maxWidth: '720px', margin: '0 auto' }}>
    <h2 className="text-h1">WHAT I'M LEARNING NOW</h2>
    <div style={{ 
      height: '8px', 
      width: '200px', 
      background: 'var(--sage-green)', 
      marginTop: '16px' 
    }}></div>
    
    <p className="text-body" style={{ marginTop: '32px' }}>
      Building LLM Reasoners with Greg Durrett at NYU.
    </p>
    
    <p className="text-body" style={{ marginTop: '16px' }}>
      I'm learning how frontier models actually think—transformers, 
      attention mechanisms, RLHF, chain-of-thought reasoning. 
      From first principles. Not just API calls.
    </p>
    
    <WindowCard title="THIS_WEEK.log" colorDot="pink" 
                style={{ marginTop: '32px' }}>
      <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
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
```

### Projects Section

```jsx
<section className="projects">
  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
          hallucinations aren't acceptable.
        </p>
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
          <a href="#" className="text-small" style={{ 
            textDecoration: 'underline',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700
          }}>
            [GITHUB →]
          </a>
          <a href="#" className="text-small" style={{ 
            textDecoration: 'underline',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700
          }}>
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
          Similar approach to Anthropic's interpretability research but 
          on models small enough to actually understand completely.
        </p>
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
          <a href="#" className="text-small" style={{ 
            textDecoration: 'underline',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700
          }}>
            [GITHUB →]
          </a>
          <a href="#" className="text-small" style={{ 
            textDecoration: 'underline',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700
          }}>
            [NOTES →]
          </a>
        </div>
      </WindowCard>
    </div>
  </div>
</section>
```

### CTA Section

```jsx
<section className="cta">
  <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
    <p className="text-body">
      I'm looking for summer 2026 AI roles where I can:
    </p>
    
    <WindowCard title="REQUIREMENTS.txt" colorDot="green" 
                style={{ marginTop: '32px', textAlign: 'left' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
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
        <a href="#" className="text-body" style={{ 
          textDecoration: 'underline',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700
        }}>
          [LINKEDIN]
        </a>
        <a href="#" className="text-body" style={{ 
          textDecoration: 'underline',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700
        }}>
          [GITHUB]
        </a>
      </div>
    </div>
  </div>
</section>
```

---

## LAYOUT & SPACING

```css
/* Global layout */
body {
  background: var(--bg-cream);
  color: var(--text-black);
  margin: 0;
  padding: 0;
}

/* Background grid (subtle) */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: -1;
}

/* Section spacing */
section {
  padding: 120px 24px;
}

@media (max-width: 768px) {
  section {
    padding: 80px 24px;
  }
}

/* Max widths */
.container-narrow { max-width: 720px; margin: 0 auto; }
.container-wide { max-width: 900px; margin: 0 auto; }
.container-full { max-width: 1280px; margin: 0 auto; }
```

---

## NAVIGATION

```jsx
<nav style={{
  position: 'sticky',
  top: 0,
  background: 'var(--bg-cream)',
  borderBottom: '4px solid var(--text-black)',
  padding: '16px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 100
}}>
  <a href="/" style={{
    fontFamily: 'var(--font-mono)',
    fontSize: '18px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textDecoration: 'none',
    color: 'var(--text-black)'
  }}>
    ARYAN THEPADE
  </a>
  
  <div style={{ display: 'flex', gap: '24px' }}>
    <a href="/story" style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      textDecoration: 'none',
      color: 'var(--text-black)'
    }}>
      [STORY]
    </a>
    <a href="/now" style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      textDecoration: 'none',
      color: 'var(--text-black)'
    }}>
      [NOW]
    </a>
    <a href="/resume.pdf" style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      textDecoration: 'none',
      color: 'var(--text-black)'
    }}>
      [RESUME]
    </a>
  </div>
</nav>
```

---

## BUILD ORDER (Execute in sequence)

### Phase 1: Foundation (30 min)
1. Clone repo, create branch `redesign-retro-2026`
2. Add fonts to `<head>`
3. Create `/styles/retro-design-system.css` with color variables
4. Create `/styles/components.css` with window card & button styles
5. Test: Confirm styles load, fonts work

### Phase 2: Components (1 hour)
1. Create `WindowCard` component
2. Create `RetroButton` component
3. Test: Simple test page with both components
4. Deploy preview, confirm on mobile

### Phase 3: Homepage Sections (3-4 hours)
1. Build Hero section
2. Deploy preview → Review
3. Build Proof section
4. Deploy preview → Review
5. Build Current Work section
6. Deploy preview → Review
7. Build Projects section
8. Deploy preview → Review
9. Build CTA section
10. Deploy preview → Final review

### Phase 4: Additional Pages (2-3 hours)
1. Story page (full narrative)
2. Now page (weekly updates template)
3. 404 page

### Phase 5: Polish (1 hour)
1. Add animations (cursor blink, hover effects)
2. Test mobile experience
3. Fix any layout issues
4. Performance check

### Phase 6: Deploy (30 min)
1. Merge to main
2. Deploy to production
3. Verify everything works

---

## PLACEHOLDER STRATEGY

**For now, skip custom illustrations:**
- Use emoji instead: 🌾 🍉 🤖 ⚡ 📊
- Or colored boxes as placeholders
- Add real images later if needed

**The design works WITHOUT custom illustrations.** The retro vibe comes from:
- Window chrome
- Thick borders
- Monospace fonts
- Terminal aesthetic
- Color choices

---

## TESTING CHECKLIST

After each section:
- [ ] Looks good on mobile (375px)
- [ ] Looks good on desktop (1280px+)
- [ ] All links work
- [ ] Text is readable
- [ ] Borders/shadows render correctly
- [ ] Fonts load properly
- [ ] No layout breaks

---

## FINAL NOTES

**Move fast:**
- Don't overthink
- Build, test, iterate
- Deploy previews frequently
- Get feedback early

**Start simple:**
- CSS-only decorations first
- Add images/illustrations later if needed
- Focus on layout and typography

**Priority:**
- Hero section is most important (sets the tone)
- Proof section validates the approach
- Everything else is secondary

---

## READY TO BUILD

You have everything you need:
✅ Design system (colors, fonts, spacing)
✅ Components (WindowCard, RetroButton)
✅ Content (copy-paste ready)
✅ Layout specs (responsive, spacing)
✅ Build order (step-by-step)

**Start with Phase 1, then build hero section first.**

Deploy preview URL when ready for review.
