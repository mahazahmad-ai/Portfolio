import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'

/** Two initials from the full name, e.g. "Your Name" -> "YN". */
function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(navLinks[0].id)
  const [progress, setProgress] = useState(0)

  /* Shrink/darken the bar and drive the top progress indicator. */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)

      const max = document.body.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (y / max) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Highlight the link whose section is currently in the viewport. */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible section among those currently intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  /* Close the mobile menu on resize up to desktop. */
  useEffect(() => {
    const onResize = () => window.innerWidth >= 992 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav
        className={`navbar navbar-expand-lg fixed-top nav-shell ${
          scrolled || open ? 'is-scrolled' : ''
        }`}
      >
        <div className="container">
          <a className="nav-brand" href="#home" onClick={() => setOpen(false)}>
            <span className="nav-brand-mark">{initials(profile.name)}</span>
            <span>{profile.name}</span>
          </a>

          <button
            className="nav-toggler d-lg-none"
            type="button"
            aria-expanded={open}
            aria-controls="mainNav"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
          </button>

          <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className={`nav-link-custom ${active === link.id ? 'active' : ''}`}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
                <a
                  className="nav-link-custom"
                  href={profile.resume}
                  onClick={() => setOpen(false)}
                >
                  <i className="bi bi-file-text me-2" />
                  Resume
                </a>
              </li>
              <li className="nav-item ms-lg-1 mt-2 mt-lg-0">
                <a
                  className="btn btn-accent btn-sm px-3 py-2"
                  href={profile.cv}
                  download={profile.cvFileName}
                  onClick={() => setOpen(false)}
                >
                  <i className="bi bi-download me-2" />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
