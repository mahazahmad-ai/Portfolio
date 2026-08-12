import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projectFilters, projects } from '../data/portfolio'

function ProjectCard({ project }) {
  return (
    <div className={`card-glass project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-cover">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <>
            <span className="project-cover-grid" aria-hidden="true" />
            <span className="project-cover-fallback">{project.title}</span>
          </>
        )}
        {project.featured && <span className="project-badge">Featured</span>}
        {project.year && <span className="project-year">{project.year}</span>}
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="d-flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Only render the link bar when there is something to link to —
            an empty bordered strip reads as a broken card. */}
        {(project.demo || project.code) && (
          <div className="project-links">
            {project.demo && (
              <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                <i className="bi bi-box-arrow-up-right" />
                Live demo
              </a>
            )}
            {project.code && (
              <a className="project-link" href={project.code} target="_blank" rel="noreferrer">
                <i className="bi bi-github" />
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  // Drop any configured filter that no project actually carries.
  const filters = useMemo(
    () => ['All', ...projectFilters.filter((f) => projects.some((p) => p.tags.includes(f)))],
    []
  )

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  )

  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've"
          highlight="built"
          subtitle="A selection of work — side projects, client builds and tools I use myself."
        />

        {filters.length > 1 && (
          <Reveal>
            <div className="filter-bar">
              {filters.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`filter-btn ${filter === name ? 'active' : ''}`}
                  onClick={() => setFilter(name)}
                  aria-pressed={filter === name}
                >
                  {name}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <div className="row g-4">
          {visible.map((project, i) => (
            <div
              className={project.featured ? 'col-md-6' : 'col-md-6 col-lg-4'}
              // Key includes the filter so cards remount and replay their reveal.
              key={`${filter}-${project.title}`}
            >
              <Reveal delay={i * 90} direction="zoom" className="h-100">
                <ProjectCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center mb-0" style={{ color: 'var(--text-muted)' }}>
            No projects match this filter yet.
          </p>
        )}
      </div>
    </section>
  )
}
