import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { languages, skillGroups, skillTags } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="What I"
          highlight="work with"
          subtitle="The tools and technologies I reach for most often, grouped by where they sit in the stack."
        />

        <Reveal>
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {skillTags.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="row g-4">
          {skillGroups.map((group, groupIndex) => (
            <div className="col-md-6 col-lg-4" key={group.title}>
              {/* The reveal wrapper also gates the progress-bar fill animation. */}
              <Reveal delay={groupIndex * 120} className="h-100">
                <div className="card-glass skill-card">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="icon-badge">
                      <i className={`bi bi-${group.icon}`} />
                    </span>
                    <h3 className="h5 mb-0">{group.title}</h3>
                  </div>

                  {group.skills.map((skill, i) => (
                    <div className="skill-row" key={skill.name}>
                      <div className="skill-row-head">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div
                        className="skill-track"
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="skill-fill"
                          style={{ '--level': `${skill.level}%`, '--bar-delay': `${i * 90}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {languages.length > 0 && (
          <Reveal delay={120} className="mt-4">
            <div className="card-glass skill-card">
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="icon-badge">
                  <i className="bi bi-translate" />
                </span>
                <div>
                  <h3 className="h5 mb-0">Languages</h3>
                  <span className="skill-level">
                    CEFR — A1/A2 basic · B1/B2 independent · C1/C2 proficient
                  </span>
                </div>
              </div>

              <div className="row g-4">
                {languages.map((lang, i) => (
                  <div className="col-sm-6 col-lg-3" key={lang.name}>
                    <div className="skill-row-head">
                      <span className="skill-name">{lang.name}</span>
                    </div>
                    <div
                      className="skill-track mb-2"
                      role="progressbar"
                      aria-label={lang.name}
                      aria-valuenow={lang.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="skill-fill"
                        style={{ '--level': `${lang.percent}%`, '--bar-delay': `${i * 90}ms` }}
                      />
                    </div>
                    <span className="skill-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
