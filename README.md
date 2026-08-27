# VidzAI — Landing Page (v1)

This is the first piece of VidzAI: just the public landing page. No login,
no video generation yet — that comes in later steps once this looks right.

## What's inside

```
vidzai/
├── app/
│   ├── layout.tsx      → page shell, fonts, metadata
│   ├── page.tsx         → assembles the landing page
│   └── globals.css      → Tailwind + small global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── package.json          → dependencies
├── tailwind.config.ts    → color palette & fonts
└── tsconfig.json / next.config.js / postcss.config.js
```

## Running this from an Android phone

You can't easily run a Next.js dev server directly on Android, so the
easiest path is a free browser-based coding tool called **StackBlitz** —
it runs the whole project in the cloud, so you just need a browser.

### Step 1 — Get the code onto GitHub
1. Download the `vidzai-landing-page.zip` file I gave you and unzip it
   (your phone's Files app can usually do this — tap the zip, choose
   "Extract").
2. Install the **GitHub** app (or use github.com in your browser).
3. Create a free account if you don't have one.
4. Create a new repository called `vidzai`.
5. Upload all the extracted files/folders into that repository
   (GitHub's mobile site lets you upload files via "Add file" →
   "Upload files" — drag in the whole `vidzai` folder contents).

### Step 2 — Open it in StackBlitz
1. Go to **stackblitz.com** in your phone browser.
2. Choose "Import from GitHub" and paste your repo's URL.
3. StackBlitz will install everything and start the site automatically —
   you'll see a live preview panel right there in the browser.
4. You can edit any file directly in StackBlitz and the preview updates
   live. This becomes your phone-friendly code editor going forward.

### Step 3 — Put it online (optional, once you're happy with it)
1. Go to **vercel.com** and sign in with your GitHub account.
2. Click "New Project," pick your `vidzai` repo, and click Deploy.
3. Vercel builds it automatically and gives you a live URL
   (like `vidzai.vercel.app`) you can visit from any device.
4. Every time you push new changes to GitHub (or edit via StackBlitz,
   which can commit back to GitHub), Vercel automatically redeploys.

That's the whole loop: **StackBlitz to edit → GitHub to save → Vercel to
publish** — all doable from a phone browser, no terminal required.

## What this version does (and doesn't) do

**Included:**
- Responsive navbar with mobile menu
- Hero section with a "Create AI Video" button and a cinematic
  load-in animation
- Features grid (6 feature cards)
- Pricing section (3 tiers)
- Footer

**Not included yet (intentionally — later steps):**
- The Login/Sign up buttons don't do anything yet (no auth system)
- The "Create AI Video" button doesn't generate anything yet (no AI
  backend connected)
- No database, no user accounts, no real video generation

Once you've seen this running and are happy with the look, the next
step is wiring up authentication (login/signup), then the actual
video-generation flow. Tell me when you're ready and we'll build the
next piece.
