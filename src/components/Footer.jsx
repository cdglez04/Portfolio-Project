import { useState } from "react"
import "./Footer.css"
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons"

const EMAIL = "cdg1827@gmail.com"
const GITHUB_URL = "https://github.com/cdglez04"
const LINKEDIN_URL = "https://www.linkedin.com/in/carlos-daniel-valdes-gonzalez-52b037385/"
const FORMSPREE_URL = "https://formspree.io/f/mwvgowyv"

const initialForm = { email: "", _subject: "", message: "" }

export function Footer() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState("idle")

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus("success")
        setForm(initialForm)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="pf-footer">
      <div className="pf-footer-intro">
        <h2>Let's build something together?</h2>
        <p className="pf-footer-sub">
          Have a project in mind or just want to say hi? Reach out.
        </p>

        <div className="pf-footer-links">
          <a href={`mailto:${EMAIL}`} className="pf-footer-email">
            <MailIcon width={18} height={18} />
            {EMAIL}
          </a>
          <div className="pf-footer-socials">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="pf-icon-btn"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="pf-icon-btn"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      <form className="pf-footer-form" onSubmit={handleSubmit}>
        <div className="pf-form-row">
          <label htmlFor="footer-email">Your email</label>
          <input
            id="footer-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div className="pf-form-row">
          <label htmlFor="footer-subject">Subject</label>
          <input
            id="footer-subject"
            name="_subject"
            type="text"
            required
            value={form._subject}
            onChange={handleChange}
            placeholder="Let's talk about..."
          />
        </div>
        <div className="pf-form-row">
          <label htmlFor="footer-message">Message</label>
          <textarea
            id="footer-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
          />
        </div>
        <button type="submit" className="pf-form-submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="pf-form-status pf-form-status-success">
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="pf-form-status pf-form-status-error">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>
    </footer>
  )
}
