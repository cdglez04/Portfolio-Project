import "./HowWeWork.css"
import { howWeWork } from "@/data/howWeWork"

export function HowWeWork() {
  return (
    <section id="how-we-work" className="pf-how-we-work">
      <h2>How we work</h2>
      <div className="pf-how-we-work-steps">
        {howWeWork.map((item) => (
          <div className="pf-how-we-work-step" key={item.step}>
            <div className="pf-how-we-work-marker">
              <span>{item.step}</span>
            </div>
            <div className="pf-how-we-work-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
