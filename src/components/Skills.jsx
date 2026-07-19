import "./Skills.css"
import { skills } from "@/data/skills"

export function Skills() {
  return (
    <section className="pf-skills">
      <h2>Skills</h2>
      {skills.map((group) => (
        <div className="pf-skills-group" key={group.category}>
          <h3>{group.category}</h3>
          <div className="pf-skills-grid">
            {group.items.map(({ name, icon: Icon }) => (
              <div className="pf-skill-chip" key={name}>
                <Icon className="pf-skill-icon" width={22} height={22} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
