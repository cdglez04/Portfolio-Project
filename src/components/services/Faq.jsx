import { useState } from "react"
import "./Faq.css"
import { faq } from "@/data/faq"

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="pf-faq">
      <h2>Frequently asked questions</h2>
      <div className="pf-faq-list">
        {faq.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `faq-panel-${index}`

          return (
            <div
              className={`pf-faq-item${isOpen ? " pf-faq-item-open" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                className="pf-faq-question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                {item.question}
                <span className="pf-faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div id={panelId} className="pf-faq-answer-wrap" role="region">
                <div className="pf-faq-answer-inner">
                  <p className="pf-faq-answer">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
