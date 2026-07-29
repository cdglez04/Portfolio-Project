import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { LightRays } from "@/components/ui/light-rays"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"

export function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" })
  }, [location])

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
