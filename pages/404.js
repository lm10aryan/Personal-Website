import Head from 'next/head'
import Link from 'next/link'
import WindowCard from '../components/WindowCard'
import RetroButton from '../components/RetroButton'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Aryan Thepade</title>
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

      <main style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px'
      }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <WindowCard title="ERROR_404.exe" colorDot="pink" rotate={-2}>
            <pre style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '48px',
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.2
            }}>
              404
            </pre>

            <p className="text-h2" style={{ marginTop: '24px' }}>
              PAGE NOT FOUND
            </p>

            <pre style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              marginTop: '24px',
              textAlign: 'left',
              background: 'rgba(0,0,0,0.05)',
              padding: '16px',
              borderRadius: '4px'
            }}>
{`$ find /requested/page
ERROR: No such file or directory

$ ls available_pages/
  index.js
  story.js
  now.js

$ suggest --action
> Try going back home`}
            </pre>

            <div style={{ marginTop: '32px' }}>
              <RetroButton href="/">← GO HOME</RetroButton>
            </div>
          </WindowCard>

          <p className="text-body" style={{ marginTop: '32px', opacity: 0.7 }}>
            Lost? The watermelons are that way. 🍉
          </p>
        </div>
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
