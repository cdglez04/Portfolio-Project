import { LightRays } from "@/components/ui/light-rays"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"
import "./app.css"

function App() {
  return (
    <>
      <LightRays className="fixed inset-0" />
      <div className="relative z-10">
        <Hero />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <About />
        <hr />
        <Footer />
      </div>
    </>
  )
}

export default App
