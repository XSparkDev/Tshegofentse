import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesAccordion } from "@/components/services-accordion"
import { StepwiseProcess } from "@/components/stepwise-process"
import { IndustriesGrid } from "@/components/industries-grid"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <ServicesAccordion />
      <StepwiseProcess />
      <IndustriesGrid />
      <ContactSection />
      <Footer />
    </main>
  )
}
