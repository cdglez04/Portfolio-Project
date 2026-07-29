import "./Projects.css"
import { projects } from "@/data/projects"
import { inProgressProjects } from "@/data/inProgress"

const allProjects = [
  ...projects.map((project) => ({ ...project, inProgress: false })),
  ...inProgressProjects.map((project) => ({ ...project, inProgress: true })),
]

function ProjectCard({ project }) {
  const { name, image, link, stack, description, inProgress } = project
  const CardTag = link ? "a" : "div"

  return (
    <CardTag
      className="pf-project-card"
      {...(link ? { href: link, target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className="pf-project-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="pf-project-image-placeholder" />
        )}
        {inProgress && <span className="pf-project-badge">In Progress</span>}
      </div>
      <div className="pf-project-body">
        <h4>{name}</h4>
        <p>{description.en}</p>
        <div className="pf-project-stack">
          {stack.map((tech) => (
            <span key={tech} className="pf-tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </CardTag>
  )
}

function ProjectGroup({ title, items }) {
  if (!items.length) return null

  return (
    <div className="pf-projects-group">
      <h3>{title}</h3>
      <div className="pf-projects-grid">
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const frontendProjects = allProjects.filter((project) => project.category === "frontend")
  const fullStackProjects = allProjects.filter((project) => project.category === "fullstack")

  return (
    <section id="projects" className="pf-projects">
      <h2>Projects</h2>

      <ProjectGroup title="Full Stack" items={fullStackProjects} />
      <ProjectGroup title="Frontend" items={frontendProjects} />
    </section>
  )
}
