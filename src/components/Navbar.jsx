import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import "./Navbar.css"

const SECTIONS = [
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleSectionClick(e, id) {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <header className={`pf-navbar${scrolled ? " pf-navbar-scrolled" : ""}`}>
      <div className="pf-navbar-inner">
        <Link to="/" className="pf-navbar-brand" onClick={() => setOpen(false)} aria-label="Carlos Daniel">
          <img src="/favicon.svg" alt="" width={32} height={32} />
        </Link>

        <button
          type="button"
          className="pf-navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`pf-navbar-links${open ? " pf-navbar-links-open" : ""}`}>
          {SECTIONS.map(({ label, id }) => (
            <a key={id} href={`/#${id}`} onClick={(e) => handleSectionClick(e, id)}>
              {label}
            </a>
          ))}
          <Link to="/services" className="pf-navbar-services" onClick={() => setOpen(false)}>
            Services
          </Link>
        </nav>
      </div>
    </header>
  )
}
