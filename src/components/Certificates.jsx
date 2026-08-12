import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { certificates } from '../data/portfolio'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Certificates"
          title="Courses &"
          highlight="credentials"
          subtitle="Programmes I've completed and the credentials that came with them."
        />

        <div className="row g-4">
          {certificates.map((cert, i) => (
            <div className="col-md-6 col-lg-4" key={cert.title}>
              <Reveal delay={i * 90} className="h-100">
                <div className="card-glass cert-card">
                  <span className="icon-badge">
                    <i className={`bi bi-${cert.icon}`} />
                  </span>

                  <div className="flex-grow-1">
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-issuer">{cert.issuer}</div>

                    <div className="cert-meta">
                      <i className="bi bi-calendar3 me-1" />
                      {cert.date}
                      {cert.credentialId && (
                        <>
                          <span className="mx-2">·</span>
                          {cert.credentialId}
                        </>
                      )}
                    </div>

                    {cert.url && (
                      <a className="cert-link" href={cert.url} target="_blank" rel="noreferrer">
                        Show credential
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
