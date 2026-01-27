import type { Metadata } from 'next'
import { Space_Grotesk, Inter, Caveat } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aryan Thepade | AI Engineer & Agritech Founder',
  description: 'MS @ NYU · Built $6.5M agritech company · Now building AI products with agency',
  keywords: ['AI Engineer', 'Machine Learning', 'NYU', 'FasalTech', 'Agritech', 'LLM', 'RAG'],
  authors: [{ name: 'Aryan Thepade' }],
  openGraph: {
    title: 'Aryan Thepade | AI Engineer & Agritech Founder',
    description: 'MS @ NYU · Built $6.5M agritech company · Now building AI products with agency',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
