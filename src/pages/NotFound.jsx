import { Link } from "react-router-dom"
import "./NotFound.css"

export function NotFound() {
  return (
    <section className="pf-notfound">
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <Link to="/" className="pf-notfound-link">
        Back to home
      </Link>
    </section>
  )
}
