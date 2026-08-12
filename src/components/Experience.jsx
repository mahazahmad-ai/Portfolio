import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="worked"
          subtitle="Roles I've held, and what I actually shipped in each of them."
        />

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="timeline">
              {experience.map((job, i) => (
                <Reveal key={`${job.company}-${job.role}`} className="timeline-item" delay={i * 120}>
                  <div className="card-glass timeline-card">
                    <div className="d-flex flex-wrap align-items-center gap-2 justify-content-between">
                      <span className="timeline-period">
                        <i className="bi bi-calendar3" />
                        {job.period}
                      </span>
                      {job.type && <span className="chip">{job.type}</span>}
                    </div>

                    <h3 className="timeline-title">{job.role}</h3>
                    <div className="timeline-org">{job.company}</div>
                    <div className="timeline-meta mb-2">
                      <i className="bi bi-geo-alt me-1" />
                      {job.location}
                    </div>

                    <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                      {job.description}
                    </p>

                    {job.highlights?.length > 0 && (
                      <ul className="timeline-list">
                        {job.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {job.stack?.length > 0 && (
                      <div className="d-flex flex-wrap gap-2 mt-3">
                        {job.stack.map((tech) => (
                          <span className="chip" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
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
