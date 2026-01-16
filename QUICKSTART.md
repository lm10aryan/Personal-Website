# QUICK START GUIDE

## Get Your Site Running in 5 Minutes

### Step 1: Download & Extract
You've downloaded `aryanthepade-website` folder. Extract it to your preferred location.

### Step 2: Open Terminal
```bash
cd path/to/aryanthepade-website
```

### Step 3: Install Dependencies
```bash
npm install
```
This will take 2-3 minutes. It downloads all the required packages.

### Step 4: Run Development Server
```bash
npm run dev
```

### Step 5: Open in Browser
Go to: http://localhost:3000

**You should see your site!**

---

## What You'll See

- **Home page** - Hero with stats
- **Story page** - Your full journey (Andhra Pradesh story is highlighted)
- **Work page** - FasalTech + Projects
- **Contact page** - Contact info

---

## Making Changes

### Change Text
1. Open the project in VS Code: `code .`
2. Find the page you want to edit (in `pages/` folder)
3. Change the text
4. Save
5. Browser auto-refreshes!

### Change Colors
Edit `tailwind.config.js` → `colors` section

Current colors:
- `cream` - Light background (#FAFAF8)
- `charcoal` - Dark text (#1A1A1A)
- `warmgray` - Secondary text (#4A4A4A)
- `accent` - Orange highlight (#D4734F)

### Add Photos
1. Drop images into `public/images/` folder
2. Reference in your pages: `/images/your-photo.jpg`
3. Refresh browser

---

## This Weekend

**Friday (Today):**
- ✅ Site is running locally
- [ ] Add 1-2 key photos (hero, FasalTech)
- [ ] Tweak colors if you want

**Saturday:**
- [ ] Add more photos
- [ ] Browse inspiration sites
- [ ] Make design tweaks

**Sunday:**
- [ ] Final polish
- [ ] Deploy to Vercel (see README for instructions)
- [ ] Connect aryanthepade.com

---

## Need Help?

Send me:
- Screenshots of what you see
- Description of what you want to change
- Any error messages

I'll help you fix it quickly!

---

## Deploy When Ready

```bash
npm install -g vercel
vercel
```

Follow prompts, done in 5 minutes.
