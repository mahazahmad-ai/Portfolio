import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { profile, socials } from '../data/portfolio'
import { asset } from '../utils/asset'

/** Types each role out, holds, deletes, then moves to the next one. */
function useTypedRole(roles) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!roles.length) return

    const full = roles[index % roles.length]
    const done = !deleting && text === full
    const cleared = deleting && text === ''

    const delay = done ? 1600 : cleared ? 250 : deleting ? 45 : 85

    const timer = setTimeout(() => {
      if (done) {
        setDeleting(true)
      } else if (cleared) {
        setDeleting(false)
        setIndex((i) => (i + 1) % roles.length)
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, roles])

  return text
}

function Portrait() {
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('')

  return (
    <div className="hero-portrait">
      <div className="hero-portrait-inner">
        {profile.photo ? (
          <img src={asset(profile.photo)} alt={profile.name} width="360" height="360" />
        ) : (
          <span className="hero-initials">{initials}</span>
        )}
      </div>

      <span className="hero-float hero-float--1">
        <i className="bi bi-code-slash" /> Clean code
      </span>
      <span className="hero-float hero-float--2">
        <i className="bi bi-lightning-charge-fill" /> Fast builds
      </span>
      <span className="hero-float hero-float--3">
        <i className="bi bi-phone" /> Responsive
      </span>
    </div>
  )
}

export default function Hero() {
  const typed = useTypedRole(profile.roles)

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Portrait sits on the left; the intro text runs beside it. */}
          <div className="col-lg-5">
            <Reveal delay={200} direction="zoom">
              <Portrait />
            </Reveal>
          </div>

          <div className="col-lg-7 text-center text-lg-start">
            {profile.available && (
              <Reveal>
                <span className="hero-pill">
                  <span className="hero-dot" />
                  Available for new opportunities
                </span>
              </Reveal>
            )}

            <Reveal delay={90}>
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">{profile.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="hero-role">
                <span className="typed">{typed}</span>
                <span className="caret" aria-hidden="true" />
              </p>
            </Reveal>

            <Reveal delay={250}>
              <p className="hero-tagline mx-auto mx-lg-0">{profile.tagline}</p>
            </Reveal>

            <Reveal delay={330}>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                <a className="btn btn-accent" href="#projects">
                  <i className="bi bi-collection me-2" />
                  View my work
                </a>
                <a className="btn btn-ghost" href="#contact">
                  <i className="bi bi-chat-dots me-2" />
                  Get in touch
                </a>
              </div>
            </Reveal>

            <Reveal delay={410}>
              <div className="d-flex gap-2 justify-content-center justify-content-lg-start">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    className="social-btn"
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <i className={`bi bi-${social.icon}`} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <a className="scroll-cue d-none d-md-flex" href="#about" aria-label="Scroll to about">
        Scroll
        <i className="bi bi-chevron-down" />
      </a>
    </section>
  )
}
