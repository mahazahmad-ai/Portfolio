import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Where I"
          highlight="studied"
          subtitle="My academic background and the foundations I build on."
        />

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="timeline">
              {education.map((item, i) => (
                <Reveal key={item.degree} className="timeline-item" delay={i * 120}>
                  <div className="card-glass timeline-card">
                    <div className="d-flex flex-wrap align-items-center gap-2 justify-content-between">
                      <span className="timeline-period">
                        <i className="bi bi-calendar3" />
                        {item.period}
                      </span>
                      {item.grade && <span className="chip">{item.grade}</span>}
                    </div>

                    <h3 className="timeline-title">{item.degree}</h3>
                    <div className="timeline-org">{item.school}</div>
                    <div className="timeline-meta mb-2">
                      <i className="bi bi-geo-alt me-1" />
                      {item.location}
                    </div>

                    <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                      {item.details}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
