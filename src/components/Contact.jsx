import { useState } from 'react'


const EMAIL = 'raginap2005@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/ragina-p-7b256836b'
const GITHUB = 'https://github.com/raginap2005-design'
const FORM_ENDPOINT = 'https://formspree.io/f/mjyyyaqk'

function Contact() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
      setStatus('Contact form is not set up yet. Please email me directly.')
      return
    }

    setSending(true)
    setStatus('')
    const form = e.target

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('Thank you! Your message has been sent.')
        form.reset()
      } else {
        setStatus('Something went wrong. Please try again or email me directly.')
      }
    } catch {
      setStatus('Network error. Please try again or email me directly.')
    }
    setSending(false)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Let's Connect!</h2>

        <p className="contact-intro">
          I am looking for opportunities as a Junior MERN Stack Developer or
          Full Stack Developer. If you have an opportunity or would like to
          discuss a project, feel free to get in touch.
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Kerala, India</p>
              </div>
            </div>
            <div className="info-item">
              <span>✉️</span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
            <div className="info-item">
              <span>💼</span>
              <div>
                <h4>LinkedIn</h4>
                <a href={LINKEDIN} target="_blank" rel="noreferrer">View Profile</a>
              </div>
            </div>
            <div className="info-item">
              <span>💻</span>
              <div>
                <h4>GitHub</h4>
                <a href={GITHUB} target="_blank" rel="noreferrer">View Profile</a>
              </div>
            </div>

            <div className="buttons">
              <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
             
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact