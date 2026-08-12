# Deploying the portfolio

The site is a plain static build — two HTML pages, some JS/CSS, and your CV
PDF. Any static host will serve it. Below are three routes, easiest first.

---

## Before you publish — read this

Once the site is live, anyone can find it, including the employers you send it
to. Three things on the page are still placeholders and will look careless:

1. **The three project cards** say "Your First Project / TODO". Replace them in
   `src/data/portfolio.js`, or delete the entries so the section is honest.
2. **The GitHub link** points at `github.com/yourusername`, which 404s.
   Either create the account and set the real URL, or remove that entry from
   `socials`.
3. **The employer name** for your Software Engineer role is a stand-in
   (`Software Engineering Department — Mandian`).

Search `src/data/portfolio.js` for `TODO` to find them all. None of them stop
the site working — they just cost you credibility with the people you most want
to impress. Fixing them first is worth the hour.

---

## Option 1 — Netlify drop (no account signup required to try)

The fastest way to see it on a real URL. No git, no GitHub.

```bash
npm run build
```

1. Open <https://app.netlify.com/drop>
2. Drag the **`dist`** folder from `c:\Users\TECH\Desktop\Portfolio` onto the page.
3. You get a live URL in about ten seconds, e.g. `random-name-123.netlify.app`.

Sign up (free) to keep the URL permanently and rename it to something like
`mahaz-ahmad.netlify.app`.

**The catch:** every time you change the site you must run `npm run build` and
drag `dist` again. Option 2 removes that chore.

---

## Option 2 — Netlify or Vercel connected to GitHub (recommended)

Every push publishes automatically. This also gives you the GitHub profile a
developer portfolio should link to, which solves TODO #2 above.

### a. Put the project on GitHub

Create an account at <https://github.com> if you have not already, then:

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
```

Create a new **empty** repository on GitHub called `portfolio` (no README, no
.gitignore — the project already has both), then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

`node_modules/` and `dist/` are already excluded by [.gitignore](.gitignore),
so only source goes up.

### b. Connect the host

**Netlify:** <https://app.netlify.com> → *Add new site* → *Import an existing
project* → pick the repo. It reads [netlify.toml](netlify.toml) and fills in
the build settings itself. Click deploy.

**Vercel:** <https://vercel.com/new> → pick the repo. It reads
[vercel.json](vercel.json). Click deploy.

Both are free for a personal site and give you HTTPS automatically. From then
on, `git push` is all it takes to update the live site.

---

## Option 3 — GitHub Pages

Free, but it serves from `https://USERNAME.github.io/portfolio/` — a
subdirectory — so you must tell Vite about the sub-path first. In
[vite.config.js](vite.config.js) add:

```js
export default defineConfig({
  base: '/portfolio/',   // ← must match your repo name exactly
  plugins: [react()],
  // …rest unchanged
})
```

Then build and publish the `dist` folder to a `gh-pages` branch. If you skip
the `base` line, the page loads blank because every asset 404s.

Note: if you later name the repo `USERNAME.github.io`, the site serves from the
root and `base` must be removed again.

---

## After it is live

1. **Put the URL in your data file.** In `src/data/portfolio.js`:

   ```js
   website: 'mahaz-ahmad.netlify.app',
   ```

   It then prints on the resume page, so anyone holding a paper copy can find
   the full portfolio. Rebuild and redeploy after changing it.

2. **Check it on your phone.** The layout is responsive, but seeing it on a
   real screen catches things a desktop browser hides.

3. **Test the CV download and the resume page** on the live URL, not just
   locally.

4. **Put the link everywhere** — your CV header, your email signature, your
   GitHub profile, your Instagram bio.

---

## Updating the site later

```bash
# edit src/data/portfolio.js, then:
npm run dev      # check it looks right
npm run build    # rebuild
```

Then re-drag `dist` (Option 1) or `git push` (Option 2).

To swap the CV PDF itself, just overwrite `public/cv.pdf` — no code change.
