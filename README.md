# Portfolio

A single-page personal portfolio built with **React + Vite + Bootstrap 5 + custom CSS**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview the production build
```

## Editing your content

**All text, links and data live in one file: [`src/data/portfolio.js`](src/data/portfolio.js).**
You should not need to touch any component to fill in your details. Open it and
replace the placeholders — every section reads from it and adapts to however
many items you add or remove.

| What you want to change | Export to edit |
| --- | --- |
| Name, roles, tagline, email, photo, CV path | `profile` |
| Social links | `socials` |
| About paragraphs, stat cards, quick facts | `about` |
| Skill categories and bar levels | `skillGroups`, `skillTags` |
| Language proficiency (CEFR) | `languages` |
| Degrees and schools | `education` |
| Jobs, bullet points, tech stacks | `experience` |
| Project cards and filter buttons | `projects`, `projectFilters` |
| Certificates and credential links | `certificates` |
| Contact blurb and contact methods | `contact` |
| Navbar / footer links | `navLinks` |

### Adding your assets

Drop files into `public/` and reference them with a leading slash:

- **Profile photo** — save as `public/profile.jpg`, then set `photo: '/profile.jpg'` in `profile`.
  Leaving it `null` shows a generated initials avatar instead.
- **Resume** — save as `public/resume.pdf` (the `resume` path already points there).
  The navbar, hero and About buttons all link to it.
- **Project screenshots** — e.g. `public/projects/one.png`, then set
  `image: '/projects/one.png'` on that project. `null` falls back to a gradient cover.

Also update the `<title>` and description in [`index.html`](index.html).

### Outstanding TODOs

Search `src/data/portfolio.js` for `TODO`. In priority order:

1. **Push the Java projects to GitHub.** Six real projects are described in
   `projects`, but every `code` link is `null` because none are published.
   Recruiters cannot read code that only exists in `Documents\NetBeansProjects`.
   Once pushed, paste each URL into `code` and uncomment the GitHub entry in
   `socials`.
2. **Employer name** — the CV lists your own name in the employer field, so the
   Software Engineer entry uses a stand-in company name.
3. **`profile.website`** — fill in after deploying; it prints on the resume.
4. **Absolute OG URLs** — social scrapers ignore the relative `/og.png` in
   `index.html`. Swap to your full domain after deploying.
5. **Skill percentages** — estimated; adjust to what you'd defend in an interview.

Deliberately left off the site: passport number, CNIC, date of birth and full
home address. Keep them off — a public page is not the place for them.

## Changing the look

The whole palette is defined as CSS variables at the top of
[`src/styles/index.css`](src/styles/index.css). Change `--accent` and
`--accent-2` and the gradients, buttons, glows and progress bars all follow.

```css
--accent: #6d7cff;   /* primary */
--accent-2: #22d3ee;  /* secondary, used in gradients */
--bg: #080b17;        /* page background */
```

## Structure

```
src/
├── App.jsx                 # section order
├── main.jsx                # entry point, global CSS imports
├── data/portfolio.js       # ← your content
├── hooks/useReveal.js      # IntersectionObserver scroll animation
├── styles/index.css        # theme variables + all styling
└── components/
    ├── Reveal.jsx          # scroll-animation wrapper
    ├── SectionHeading.jsx  # shared eyebrow/title/subtitle
    ├── Navbar.jsx          # sticky nav, scroll spy, progress bar
    ├── Hero.jsx            # intro with typing effect
    ├── About.jsx
    ├── Skills.jsx
    ├── Education.jsx
    ├── Experience.jsx
    ├── Projects.jsx        # tag filtering
    ├── Certificates.jsx
    ├── Contact.jsx         # validated form (mailto)
    └── Footer.jsx          # links + back-to-top
```

## Notes

- **Scroll animations** use a small `IntersectionObserver` hook — no animation
  library, and they're disabled automatically under
  `prefers-reduced-motion: reduce`.
- **The contact form** opens the visitor's mail client via `mailto:`. To collect
  submissions server-side, replace the body of `handleSubmit` in
  [`src/components/Contact.jsx`](src/components/Contact.jsx) with a `fetch()` to
  EmailJS, Formspree or your own endpoint — the validation around it stays as is.
- **Two pages, not one.** `index.html` is the portfolio; `resume.html` is a
  standalone print-first resume built from the same data file. Both are wired
  up as Vite build entries in [`vite.config.js`](vite.config.js).
- **Deploying:** see **[DEPLOY.md](DEPLOY.md)** — hosting config for Netlify
  ([`netlify.toml`](netlify.toml)) and Vercel ([`vercel.json`](vercel.json)) is
  already committed, so both hosts configure themselves.
