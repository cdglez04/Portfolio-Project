import { LightRays } from "@/components/ui/light-rays"
import { ServicesHero } from "@/components/services/ServicesHero"
import { ServicePackages } from "@/components/services/ServicePackages"
import { HowWeWork } from "@/components/services/HowWeWork"
// import { Testimonials } from "@/components/services/Testimonials" // hidden for now
import { Faq } from "@/components/services/Faq"
import { Footer } from "@/components/Footer"

export function Services() {
  return (
    <>
      <LightRays className="fixed inset-0" />
      <div className="relative z-10">
        <ServicesHero />
        <hr />
        <ServicePackages />
        <hr />
        <HowWeWork />
        <hr />
        {/* <Testimonials /> hidden for now */}
        <Faq />
        <hr />
        <Footer />
      </div>
    </>
  )
}
