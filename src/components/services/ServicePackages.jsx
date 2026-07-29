import "./ServicePackages.css"
import { services } from "@/data/services"
import { CheckIcon, XIcon } from "@/components/icons"

function ServiceCard({ service }) {
  const { name, included, notIncluded } = service

  return (
    <div className="pf-service-card">
      <h3>{name}</h3>

      <div className="pf-service-card-section">
        <h4>Included</h4>
        <ul>
          {included.map((item) => (
            <li key={item}>
              <CheckIcon className="pf-service-icon pf-service-icon-yes" width={16} height={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pf-service-card-section">
        <h4>Not included</h4>
        <ul>
          {notIncluded.map((item) => (
            <li key={item}>
              <XIcon className="pf-service-icon pf-service-icon-no" width={16} height={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ServicePackages() {
  return (
    <section id="packages" className="pf-service-packages">
      <h2>What I offer</h2>
      <div className="pf-service-packages-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}
