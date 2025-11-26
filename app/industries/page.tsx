import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider"
import { IndustriesSection } from "@/components/industries-section"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <ScrollRevealProvider />
      <Navbar />
      <section className="pt-32 pb-12 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-primary">Industries we support</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">Hazardous waste experts across sectors</h1>
          <p className="text-muted-foreground">
            From mining tailings to retail packaging, Tshegofentse engineers compliant, circular solutions for every waste stream.
            Explore our waste exchange program, hierarchy guidance, and sector-specific capabilities below.
          </p>
        </div>
      </section>
      <IndustriesSection />
      <Footer />
    </main>
  )
}


