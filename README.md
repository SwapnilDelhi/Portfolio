# Swapnil Pandey — Official Website

A React + Vite site built to the structure and design brief provided: rotating
"Anonymity · Austerity · Ability" loading emblem, an institutional navy/gold
design language, and dedicated sections for Youth Vision India, Parliament of
India / Government Engagement, and Varanasi Development.

## 1. Getting it running in VS Code

You need [Node.js](https://nodejs.org) 18+ installed. Then, in the project folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). The page reloads
automatically as you edit files.

Other commands:

```bash
npm run build     # production build → outputs to /dist
npm run preview   # serve the production build locally to double-check it
npm run lint      # check the code for issues
```

## 2. Project structure

```
src/
  main.jsx                — app entry point, sets up the router
  App.jsx                 — page routes + loading screen logic
  index.css               — design tokens (colors/fonts), global styles

  components/
    LoadingScreen.jsx/css   — the rotating emblem intro
    Navbar.jsx/css          — top navigation (all 13 sections)
    Footer.jsx/css          — site footer
    PageHeader.jsx/css      — the navy banner used at the top of every inner page
    Timeline.jsx/css        — the "premium timeline" used for Achievements & Government Engagement
    ImagePlaceholder.jsx/css — stand-in boxes wherever a real photo is needed

  data/
    engagements.js          — ALL delegation-meeting & government-dialogue text lives here

  pages/
    Home.jsx                — hero + the 3-column Youth Vision India / Parliament / Varanasi cards
    About.jsx, Journey.jsx, Achievements.jsx, Research.jsx
    YouthVisionIndia.jsx, Parliament.jsx, Varanasi.jsx
    Media.jsx, Gallery.jsx, Publications.jsx, Collaborate.jsx, Contact.jsx
```

Every page is its own route (e.g. `/youth-vision-india`, `/parliament`,
`/varanasi`), so the three homepage columns are real links, not just visual
blocks — clicking one navigates to its full page.

## 3. The things you'll most likely want to edit

### Replace the placeholder photos
Every gray "IMAGE" box is a temporary `<ImagePlaceholder />`. To swap one in:

1. Drop your image file into `src/assets/images/` (e.g. `hero-portrait.jpg`).
2. In the relevant page, replace:
   ```jsx
   <ImagePlaceholder label="Portrait — Swapnil Pandey" ratio="4 / 5" />
   ```
   with:
   ```jsx
   <img src="/src/assets/images/hero-portrait.jpg" alt="Swapnil Pandey" />
   ```
Do this per photo, wherever you have the real image ready — there's no need
to do it all at once.

### Edit delegation meetings / government engagement text
Open `src/data/engagements.js`. It's a plain list of entries — copy an
existing block, change the text, done. `delegationMeetings` feeds the
Achievements page; `governmentDialogues` feeds the Parliament / Government
Engagement page. Move entries between the two arrays if you'd like a
different split — nothing else needs to change.

### Add real content to the Research page
Open `src/pages/Research.jsx` and edit the `PAPERS` array at the top — add a
new object to the array for each additional paper (same shape: `title`,
`abstract`, `problem`, `solution`).

### Add real content to Varanasi Development
Nothing was provided for this section in the brief, so `src/pages/Varanasi.jsx`
currently ships with a reasonable placeholder structure (heritage, civic
infrastructure, education, community development). Replace the paragraph text
and the `FOCUS_AREAS` array once you have the real material.

### Colors, fonts, spacing
Everything lives at the top of `src/index.css` under `:root`:
```css
--navy, --gold, --gold-ink, --grey-dark, --parchment, --white
--font-display   /* Playfair Display — headings */
--font-body      /* Inter — body text */
```
Changing a value here updates it site-wide. (`--gold-ink` is a darker gold
used for small labels on light backgrounds, so they stay readable — `--gold`
is the brighter accent reserved for dark backgrounds, buttons, and rules.)

### The loading screen
`src/components/LoadingScreen.jsx` controls timing — it currently starts
fading at 3.4s and hands off to the site at 4.2s. Change the two numbers in
the `setTimeout` calls to adjust. The rotating ring text and the center
Sanskrit motto (`शीलं परम भूषणम्`) are in the same file if you need to edit
the wording.

## 4. Deploying it

`npm run build` produces a static `dist/` folder that can be deployed to
Vercel, Netlify, GitHub Pages, or any static host. If you deploy to a host
that doesn't automatically redirect unknown paths to `index.html`, enable
"SPA fallback" / "rewrite all routes to index.html" in that host's settings
so that direct links like `yoursite.com/journey` work on refresh.
