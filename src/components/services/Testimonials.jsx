import "./Testimonials.css"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  return (
    <section id="testimonials" className="pf-testimonials">
      <h2>What clients say</h2>
      <div className="pf-testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <blockquote className="pf-testimonial-card" key={index}>
            <p>“{testimonial.quote}”</p>
            <footer>
              <span className="pf-testimonial-name">{testimonial.name}</span>
              {testimonial.role && (
                <span className="pf-testimonial-role">{testimonial.role}</span>
              )}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
