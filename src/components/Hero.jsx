import "./Hero.css"
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from "@/components/icons"
import heroImg from "@/assets/hero.jpeg"

export function Hero() {
  return (
    <section className="pf-hero relative w-full overflow-hidden rounded-xl">
      <div className="pf-hero-content">
        <div className="pf-hero-copy">
          <h1>Hi, I'm <span>Carlos Daniel !</span></h1>
          <p>Full-stack developer & CS student at HCC. I build web applications <br />
           end-to-end — clean frontends, solid backends, and everything in between. Currently taking on freelance projects while sharpening <br /> my skills in the classroom.</p>
          <div className="pf-hero-actions">
            <a
              href="https://github.com/cdglez04"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="pf-icon-btn"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-daniel-valdes-gonzalez-52b037385/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="pf-icon-btn"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
            <a
              href="mailto:cdg1827@gmail.com"
              aria-label="Email"
              className="pf-icon-btn"
            >
              <MailIcon width={20} height={20} />
            </a>
            <a href="/resume.pdf" download className="pf-resume-btn">
              <DownloadIcon width={18} height={18} />
              Download Resume
            </a>
          </div>
          <a href="mailto:cdg1827@gmail.com" className="pf-hero-email">
            <MailIcon width={16} height={16} />
            cdg1827@gmail.com
          </a>
        </div>
        <div className="pf-hero-picture">
          <img src={heroImg} alt="Portrait of Carlos Daniel" />
        </div>
      </div>
    </section>
  )
}
