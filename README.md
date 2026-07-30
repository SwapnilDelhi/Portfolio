# Swapnil Pandey — Portfolio Website

A personal portfolio and organizational site for **Swapnil Pandey** — Founder of *Youth Vision India* — covering his academic journey, mathematical research, government and policy engagement, community initiatives, and public events.

Built with **React**, **React Router**, and plain CSS (no CSS framework), using a shared "inner page" layout system for consistent styling across content pages.

---

## ✨ Features

- **Home** — full-bleed photo hero, highlights row, personal quote, and a three-pillar focus-areas section.
- **Journey** — long-form narrative sections (school years, mathematical research, Youth Vision India, Parliament engagements, Varanasi Development, current work) with alternating text/image layout.
- **Achievements** — a chronological timeline of government and institutional engagements, each with supporting images and documents.
- **Events** — a card grid of community initiatives and drives, sorted automatically by date.
- **About / Research / Media / Gallery / Publications / Contact** — supporting content pages sharing the same design system.
- Responsive navbar with a tap-to-swap tagline/quote on mobile and a full-screen slide-in menu, consistent across all breakpoints.
- Devanagari quote (`शीलं परम भूषणम्` — *"Character is the highest ornament"*) used as a recurring motif across the site.

---

## 🛠 Tech Stack

| Layer       | Choice                          |
|-------------|----------------------------------|
| Framework   | React (Vite)                     |
| Routing     | `react-router-dom`                |
| Styling     | Plain CSS (component-scoped files)|
| Data        | Local JS modules (`src/data/`)   |
| Images      | Static imports from `src/assets/images/` |

No backend — all content is static and lives in source-controlled data files, making it easy to update without touching component code.

---

## 📁 Project Structure

```
src/
├── assets/
│   └── images/              # Photos used across the site
├── components/
│   ├── Navbar.jsx / .css    # Site-wide navigation
│   ├── PageHeader.jsx       # Shared page title/eyebrow/subtitle banner
│   ├── ImagePlaceholder.jsx # Fallback placeholder when no real image is set
│   └── Timeline.jsx / .css  # Chronological entry list (Achievements, Journey)
├── data/
│   ├── engagements.js       # Government/institutional meeting records
│   └── events.js            # Community events & initiatives
├── pages/
│   ├── Home.jsx / Home.css
│   ├── Journey.jsx
│   ├── About.jsx
│   ├── Achievements.jsx
│   ├── Research.jsx
│   ├── Media.jsx
│   ├── Gallery.jsx
│   ├── Publications.jsx
│   ├── Events.jsx
│   ├── Contact.jsx
│   └── InnerPage.css        # Shared layout styles for all inner/content pages
├── App.jsx                  # Route definitions
└── main.jsx                 # App entry point
```

> Note: exact file names may differ slightly depending on your local setup — update this section if your structure has diverged.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

### Development

```bash
npm run dev
```

Visit the URL shown in the terminal (typically `http://localhost:5173`).

### Production Build

```bash
npm run build
```

Output goes to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

---

## ✏️ Editing Content

Most content updates don't require touching component code:

- **Add/edit a government engagement or dialogue** → `src/data/engagements.js`
  - Add an `image` import at the top of the file and reference it in the entry's `image` field.
- **Add/edit a community event** → `src/data/events.js`
  - Include `date` (display string) and `sortDate` (ISO `YYYY-MM-DD`) so it sorts correctly.
- **Swap a placeholder image for a real photo** → drop the file into `src/assets/images/`, import it at the top of the relevant page or data file, and pass it as the `image`/`src` prop instead of relying on `ImagePlaceholder`.
- **Update navigation links** → `src/components/Navbar.jsx` (`LINKS` array).

---

## 📱 Responsive Behavior

- Breakpoint at `980px` for most section layouts (hero, about-intro grid, pillar columns).
- Breakpoint at `860px` for the alternating text/image "inner split" sections used across Journey and similar long-form pages.
- Navbar switches to a compact single-row layout with a slide-in menu below `640px`, with the brand/quote area collapsing into a single tap-to-swap element.

---

## 📌 Known Considerations

- `ImagePlaceholder` remains the fallback for any content entry that hasn't had a real photo added yet — safe to leave in place until images are ready.
- The Devanagari quote uses a custom `--font-devanagari` CSS variable; ensure the referenced font supports Devanagari script if changing typefaces.
- Long-form Journey sections use CSS floats (not grid) for the alternating text/image layout — image elements must come **before** the text block in the JSX for the wrap behavior to work correctly.

---

## 📄 License

This project is private/proprietary to Swapnil Pandey and Youth Vision India unless otherwise stated. 