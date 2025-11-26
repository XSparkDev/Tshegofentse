import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollRevealProvider } from "@/components/scroll-reveal-provider"
import { Card } from "@/components/ui/card"

const teamMembers = [
  "Kolisang Mpitsi – Hazchem trained PDP driver, fire fighting & spill response, vehicle inspector",
  "Thabiso Thamae – Operator, spill response team, equipment maintenance",
  "Thembinkosi Mabitsela – Safety officer, waste assessor, project management",
  "Lindiwe Khaile – Administrator SHE, document control representative",
  "Nceba Mofulathela – Spill response team, housekeeping & maintenance",
  "Spill Response Team – Dedicated hazmat technicians keeping client sites safe",
]

const values = ["Safety", "Legal compliance", "Sustainability", "Competency", "Knowledge base", "Innovation"]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <ScrollRevealProvider />
      <Navbar />
      <section className="pt-32 pb-12 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-primary">People & Culture</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">Our Team & Values</h1>
          <p className="text-muted-foreground">
            Meet the hazardous waste practitioners, safety officers, and administrators who turn Tshegofentse’s promises into action,
            and discover the values that guide every project.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 space-y-12 max-w-6xl">
          <Card className="p-10 bg-background border border-border/50 shadow-md space-y-6" data-reveal>
            <h2 className="text-3xl font-semibold">Our Team</h2>
            <p className="text-muted-foreground">
              Our goal is to build a safer, healthier environment through sufficient resources, impeccable quality, and the right
              attitude. These are the specialists driving our success on the road, in the lab, and on client sites.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {teamMembers.map((member) => (
                <li key={member} data-reveal>
                  <span className="text-foreground font-semibold">• </span>
                  {member}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-10 bg-muted/20 border border-border/50 space-y-4" data-reveal>
            <h2 className="text-3xl font-semibold">Our Values</h2>
            <p className="text-muted-foreground">
              By keeping our core values front of mind we consistently deliver safe, sustainable services. Every team member lives
              these principles daily.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {value}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}


