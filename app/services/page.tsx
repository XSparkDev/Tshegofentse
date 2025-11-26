import { Navbar } from "@/components/navbar"
import { ServicesAccordion } from "@/components/services-accordion"
import { Footer } from "@/components/footer"
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <ScrollRevealProvider />
      <Navbar />
      <section className="pt-32 pb-10 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-primary">What we do</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">Services & Practical Solutions</h1>
          <p className="text-muted-foreground">
            Explore every step of our hazardous waste lifecycle support—from assessment and CRM transparency to practical solutions and
            safety culture that keeps your sites compliant.
          </p>
        </div>
      </section>
      <ServicesAccordion />
      <Footer />
    </main>
  )
}


