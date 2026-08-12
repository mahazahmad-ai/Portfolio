import {
  certificates,
  contact,
  education,
  experience,
  languages,
  profile,
  projects,
  resumeSummary,
  skillGroups,
  socials,
} from '../data/portfolio'
import { asset } from '../utils/asset'

/* The portfolio descriptions run long for print. Take the first sentence —
   enough to say what the project is without eating half the page. */
function firstSentence(text) {
  const match = text.match(/^.*?\.(?=\s|$)/)
  return match ? match[0] : text
}

/* A one-page, print-first resume. Everything comes from data/portfolio.js, so
   editing your details there updates both the portfolio and this document. */

function Section({ title, children }) {
  return (
    <section className="r-section">
      <h2 className="r-section-title">{title}</h2>
      {children}
    </section>
  )
}

export default function ResumePage() {
  // Never print a placeholder URL onto a paper resume you cannot take back.
  const isPlaceholder = (url) => /your-?username|your-?name|example\.com/i.test(url)
  const github = socials.find((s) => s.name === 'GitHub' && !isPlaceholder(s.url))
  const email = contact.methods.find((m) => m.label === 'Email')
  const phone = contact.methods.find((m) => m.label === 'WhatsApp' || m.label === 'Phone')

  return (
    <>
      {/* Screen-only toolbar — hidden by the print stylesheet. */}
      <div className="r-toolbar no-print">
        <a className="r-back" href={asset('/')}>
          ← Back to portfolio
        </a>
        <div className="r-toolbar-actions">
          <span className="r-hint">Print → “Save as PDF” for a shareable file</span>
          <button type="button" className="r-print-btn" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </div>
      </div>

      <main className="r-sheet">
        {/* ------------------------------------------------------- header -- */}
        <header className="r-header">
          <h1 className="r-name">{profile.name}</h1>
          <p className="r-role">{profile.roles[0]}</p>

          <ul className="r-contact">
            {email && <li>{email.value}</li>}
            {phone && <li>{phone.value}</li>}
            <li>{profile.location}</li>
            {profile.website && <li>{profile.website}</li>}
            {github && <li>{github.url.replace(/^https?:\/\//, '')}</li>}
          </ul>
        </header>

        {/* ------------------------------------------------------ summary -- */}
        <Section title="Profile">
          <p className="r-summary">{resumeSummary}</p>
        </Section>

        {/* ------------------------------------------------------- skills -- */}
        <Section title="Skills">
          <dl className="r-skills">
            {skillGroups.map((group) => (
              <div className="r-skill-row" key={group.title}>
                <dt>{group.title}</dt>
                <dd>{group.skills.map((s) => s.name).join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* --------------------------------------------------- experience -- */}
        <Section title="Experience">
          {experience.map((job) => (
            <article className="r-entry" key={`${job.company}-${job.role}`}>
              <div className="r-entry-head">
                <h3 className="r-entry-title">{job.role}</h3>
                <span className="r-entry-date">{job.period}</span>
              </div>
              <p className="r-entry-sub">
                {job.company} — {job.location}
              </p>
              <ul className="r-bullets">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </Section>

        {/* ----------------------------------------------------- projects -- */}
        <Section title="Projects">
          <ul className="r-plain r-projects">
            {projects.slice(0, 4).map((project) => (
              <li key={project.title}>
                <strong>{project.title}</strong>
                <span className="r-dim"> — {firstSentence(project.description)}</span>
                <span className="r-tags"> {project.tags.slice(0, 3).join(', ')}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------------------------------------------- education -- */}
        <Section title="Education">
          {education.map((item) => (
            <article className="r-entry r-entry--tight" key={item.degree}>
              <div className="r-entry-head">
                <h3 className="r-entry-title">{item.degree}</h3>
                <span className="r-entry-date">{item.period}</span>
              </div>
              <p className="r-entry-sub">
                {item.school} — {item.location}
                {item.grade && !item.grade.startsWith('EQF') && (
                  <span className="r-grade"> · {item.grade}</span>
                )}
              </p>
            </article>
          ))}
        </Section>

        {/* ------------------------------------------- awards + languages -- */}
        <div className="r-split">
          <Section title="Certificates & Awards">
            <ul className="r-plain">
              {certificates.map((cert) => (
                <li key={cert.title}>
                  <strong>{cert.title}</strong>
                  <span className="r-dim">
                    {' '}
                    — {cert.issuer}, {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Languages">
            <ul className="r-plain">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <strong>{lang.name}</strong>
                  <span className="r-dim"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </main>
    </>
  )
}
