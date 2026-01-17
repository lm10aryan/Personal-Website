# Aryan Thepade - Personal Website

A clean, editorial-style personal website built with Next.js and Tailwind CSS.

## Design Philosophy

- **Editorial minimalism with bold moments** - Think New York Times meets personal narrative
- **Typography-first** - Using Crimson Pro (serif) and Work Sans (sans) for a refined aesthetic
- **Story-focused** - The Andhra Pradesh journey as the visual centerpiece
- **Motion** - Smooth fade-in animations as you scroll

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Google Fonts** - Crimson Pro & Work Sans

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Add Your Photos

Place your images in the `/public/images` folder:

- `hero.jpg` - Main photo for homepage
- `fasaltech-1.jpg`, `fasaltech-2.jpg`, etc. - FasalTech photos
- `andhra-map.jpg` - Map of your Andhra Pradesh journey
- `nyu.jpg` - Photo at NYU
- And so on...

Then reference them in your pages:
```jsx
<img src="/images/hero.jpg" alt="Description" />
```

## Project Structure

```
aryanthepade-website/
├── pages/
│   ├── _app.js           # App wrapper
│   ├── _document.js      # HTML document structure
│   ├── index.js          # Home page
│   ├── story.js          # Your journey
│   ├── work.js           # Projects
│   └── contact.js        # Contact info
├── components/
│   ├── Navigation.js     # Top nav bar
│   ├── Footer.js         # Footer with links
│   └── FadeIn.js         # Scroll animation component
├── styles/
│   └── globals.css       # Global styles + Tailwind
├── public/
│   └── images/           # Your photos go here
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cream: '#FAFAF8',      // Background
  charcoal: '#1A1A1A',   // Text
  warmgray: '#4A4A4A',   // Secondary text
  accent: '#D4734F',     // Accent color
}
```

### Fonts

Current fonts are Crimson Pro (serif) and Work Sans (sans).

To change, edit:
1. `styles/globals.css` - Update the Google Fonts import
2. `tailwind.config.js` - Update the fontFamily settings

### Content

All content is in the page files (`pages/*.js`). Search for text and update it directly.

## Deployment

### Option 1: Vercel (Recommended - Free & Easy)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to connect your GitHub and deploy
```

Then connect your domain `aryanthepade.com` in Vercel dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add "aryanthepade.com"
4. Follow instructions to update DNS

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → "Import an existing project"
4. Connect GitHub, select your repo
5. Deploy!
6. Add custom domain in settings

## Adding Photos Later

You can add photos anytime. Just:

1. Drop images into `/public/images/`
2. Reference them in your pages:
   ```jsx
   <img src="/images/your-photo.jpg" alt="Description" className="w-full" />
   ```
3. The site will auto-reload in development

## Tips for Iteration

### Quick Text Changes
- Find the text in `pages/*.js`
- Edit it
- Save
- See changes instantly in browser

### Add New Sections
- Copy an existing section
- Modify the content
- Wrap in `<FadeIn>` for animation

### Change Colors
- Edit `tailwind.config.js`
- Colors update everywhere automatically

### Add Photos
- Drop in `/public/images/`
- Reference with `/images/filename.jpg`

## Need Help?

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)

## License

Personal use only.
# Personal-Website
# Updated
