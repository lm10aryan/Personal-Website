/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Retro Design System
        cream: '#FFF8E7',
        black: '#000000',
        // Accents (muted/desaturated)
        sage: '#9FB5A5',      // Agriculture
        peach: '#FF9B71',     // Tech warmth
        teal: '#6BB4A8',      // AI/water
        pink: '#E8B4D9',      // Vitality
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        'body': ['18px', { lineHeight: '1.6' }],
        'small': ['16px', { lineHeight: '1.6' }],
      },
      boxShadow: {
        'retro': '8px 8px 0 #000000',
        'retro-sm': '6px 6px 0 #000000',
        'retro-hover': '10px 10px 0 #000000',
      },
      borderWidth: {
        '6': '6px',
        '5': '5px',
        '4': '4px',
      },
    },
  },
  plugins: [],
}
