import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo from https://USER.github.io/Portfolio/, so
  // the build needs to know it lives under a sub-path. The CI workflow sets
  // VITE_BASE=/Portfolio/; everywhere else (dev, Netlify, Vercel) it stays '/'.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      // Two separate documents: the portfolio, and the printable resume.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        resume: fileURLToPath(new URL('./resume.html', import.meta.url)),
      },
    },
  },
})
