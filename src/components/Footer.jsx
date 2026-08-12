import { useEffect, useState } from 'react'
import { navLinks, profile, socials } from '../data/portfolio'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-md-5">
              <a className="nav-brand mb-3" href="#home">
                <span className="nav-brand-mark">
                  {profile.name
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((p) => p[0].toUpperCase())
                    .join('')}
                </span>
                <span>{profile.name}</span>
              </a>
              <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                {profile.tagline}
              </p>
            </div>

            <div className="col-6 col-md-4">
              <h4 className="h6 mb-3">Navigate</h4>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a className="footer-link" href={`#${link.id}`}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h4 className="h6 mb-3">Elsewhere</h4>
              <div className="d-flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    className="social-btn"
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={social.name}
                  >
                    <i className={`bi bi-${social.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr style={{ borderColor: 'var(--border)', opacity: 1 }} className="my-4" />

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <span className="footer-copy">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </span>
            <span className="footer-copy">
              Built with <i className="bi bi-heart-fill mx-1" style={{ color: 'var(--accent)' }} />
              React, Vite &amp; Bootstrap
            </span>
          </div>
        </div>
      </footer>

      <button
        type="button"
        className={`to-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up" />
      </button>
    </>
  )
}
