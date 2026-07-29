import { Link } from "react-router-dom"
import "./ServicesHero.css"
import { CheckIcon } from "@/components/icons"

const HIGHLIGHTS = [
  "Fixed, transparent pricing",
  "Bilingual sites (ES/EN)",
  "Full deployment included",
  "Direct communication, no middlemen",
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function ServicesHero() {
  return (
    <section className="pf-services-hero">
      <h1>Services</h1>
      <p>From a landing page to a full application — tell me what you need.</p>

      <ul className="pf-services-hero-highlights">
        {HIGHLIGHTS.map((item) => (
          <li key={item}>
            <CheckIcon width={14} height={14} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="pf-services-hero-actions">
        <button
          type="button"
          className="pf-services-hero-btn pf-services-hero-btn-primary"
          onClick={() => scrollToId("contact")}
        >
          Get in Touch
        </button>
        <button
          type="button"
          className="pf-services-hero-btn pf-services-hero-btn-secondary"
          onClick={() => scrollToId("packages")}
        >
          View Services
        </button>
      </div>

      <Link to="/#projects" className="pf-services-hero-work-link">
        See my past work →
      </Link>
    </section>
  )
}
