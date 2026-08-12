import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about, profile } from '../data/portfolio'
import { asset } from '../utils/asset'

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Get to"
          highlight="know me"
          subtitle="A short introduction to who I am, what I do, and how I like to work."
        />

        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-lg-7">
            <Reveal direction="left">
              <h3 className="h4 mb-3">{about.heading}</h3>
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-body-secondary" style={{ color: 'var(--text-muted)' }}>
                  {paragraph}
                </p>
              ))}

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a className="btn btn-accent" href={asset(profile.resume)}>
                  <i className="bi bi-file-text me-2" />
                  View my resume
                </a>
                <a className="btn btn-ghost" href="#contact">
                  <i className="bi bi-send me-2" />
                  Contact me
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-5">
            <Reveal direction="right" delay={120}>
              <div className="row g-3 mb-4">
                {about.stats.map((stat) => (
                  <div className="col-6" key={stat.label}>
                    <div className="about-stat">
                      <div className="about-stat-value">{stat.value}</div>
                      <div className="about-stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-glass p-4">
                <h4 className="h6 mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-person-badge" style={{ color: 'var(--accent)' }} />
                  Quick facts
                </h4>
                {about.facts.map((fact) => (
                  <div className="fact-row" key={fact.label}>
                    <i className={`bi bi-${fact.icon}`} />
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value ms-auto text-end">{fact.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
