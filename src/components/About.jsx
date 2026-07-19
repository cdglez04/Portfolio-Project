import "./About.css"

export function About() {
  return (
    <section className="pf-about">
      <h2>About me</h2>
      <div className="pf-about-content">
        <p>
          I'm <span className="pf-highlight">Carlos Daniel</span>, originally from Cuba and now based in
          Houston, Texas. I've always loved creating things, and in programming I found a way to do it
          without limits: if I can think it, I can build it.
        </p>
        <p>
          Today I work as a <span className="pf-highlight">freelance full-stack developer</span>, using{" "}
          <span className="pf-highlight">React and Vite</span> on the frontend and{" "}
          <span className="pf-highlight">Django and SQL</span> on the backend, while studying{" "}
          <span className="pf-highlight">Computer Science at HCC</span>.
        </p>
        <p>
          I'm currently integrating <span className="pf-highlight">AI</span> into both my projects, like{" "}
          <span className="pf-highlight">Lucdex</span>, and my own workflow, to build faster and reach
          further.
        </p>
        <p>
          Got a project in mind?{" "}
          <a href="mailto:cdg1827@gmail.com" className="pf-highlight pf-talk-link">
            Let's talk
          </a>
          .
        </p>
      </div>
    </section>
  )
}
