import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { StepwiseProcess } from "@/components/stepwise-process"
import { SocialProofSection } from "@/components/social-proof"
import { LaboratorySection } from "@/components/laboratory-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground scroll-snap-container">
      <ScrollRevealProvider />
      <Navbar />
      <Hero />
      <AboutSection />
      <StepwiseProcess />
      <SocialProofSection />
      <LaboratorySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
