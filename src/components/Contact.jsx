import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { contact, profile, socials } from '../data/portfolio'

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    setSent(false)
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell me your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail, please (10+ characters).'
    return next
  }

  /**
   * Hands the message off to the visitor's mail client. To collect
   * submissions server-side instead, replace the body of this function with a
   * fetch() to EmailJS, Formspree, or your own endpoint.
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return

    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name}`
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    setForm(EMPTY)
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Get in"
          highlight="touch"
          subtitle={contact.blurb}
        />

        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <Reveal direction="left">
              <h3 className="h4 mb-4">{contact.heading}</h3>

              <div className="d-grid gap-3 mb-4">
                {contact.methods.map((method) => {
                  const Tag = method.href ? 'a' : 'div'
                  return (
                    <Tag
                      key={method.label}
                      className="contact-method"
                      {...(method.href ? { href: method.href } : {})}
                    >
                      <span className="icon-badge">
                        <i className={`bi bi-${method.icon}`} />
                      </span>
                      <span>
                        <span className="contact-method-label d-block">{method.label}</span>
                        <span className="contact-method-value">{method.value}</span>
                      </span>
                    </Tag>
                  )
                })}
              </div>

              <div className="d-flex gap-2">
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
            </Reveal>
          </div>

          <div className="col-lg-7">
            <Reveal direction="right" delay={120}>
              <form className="card-glass p-4 p-md-5" onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label-custom" htmlFor="cf-name">
                      Name
                    </label>
                    <input
                      id="cf-name"
                      className="form-control form-control-custom"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={update('name')}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-custom" htmlFor="cf-email">
                      Email
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      className="form-control form-control-custom"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={update('email')}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>

                  <div className="col-12">
                    <label className="form-label-custom" htmlFor="cf-subject">
                      Subject <span style={{ color: 'var(--text-dim)' }}>(optional)</span>
                    </label>
                    <input
                      id="cf-subject"
                      className="form-control form-control-custom"
                      placeholder="Project enquiry"
                      value={form.subject}
                      onChange={update('subject')}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label-custom" htmlFor="cf-message">
                      Message
                    </label>
                    <textarea
                      id="cf-message"
                      rows={5}
                      className="form-control form-control-custom"
                      placeholder="Tell me about what you're building…"
                      value={form.message}
                      onChange={update('message')}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>

                  <div className="col-12 d-flex flex-wrap align-items-center gap-3">
                    <button className="btn btn-accent" type="submit">
                      <i className="bi bi-send me-2" />
                      Send message
                    </button>
                    <span className="form-note">
                      {sent
                        ? 'Your mail client should have opened — thanks!'
                        : 'Opens in your mail app.'}
                    </span>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
