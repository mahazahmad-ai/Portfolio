/**
 * Resolves a path in /public against the app's base URL.
 *
 * On GitHub Pages the site is served from a sub-path (/Portfolio/), not the
 * domain root. Vite rewrites absolute paths written in index.html, but it
 * cannot rewrite plain strings like '/cv.pdf' that live in JavaScript — those
 * would 404. Wrapping them here keeps one set of paths working everywhere.
 *
 *   asset('/cv.pdf')  →  '/cv.pdf'            in dev and at a domain root
 *                     →  '/Portfolio/cv.pdf'  on GitHub Pages
 */
export function asset(path) {
  if (!path) return path
  // Leave full URLs and data URIs alone.
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
