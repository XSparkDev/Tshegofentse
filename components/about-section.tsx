import { Card } from "@/components/ui/card"
import Image from "next/image"

const differentiators = [
  { title: "Quick Collections", description: "Speedy Waste Collections eliminate unhygienic, unsafe stockpiles at your workplace." },
  {
    title: "Record Keeping",
    description: "We manage waste manifests, disposal records, and weighbridge certificates with precision.",
  },
  {
    title: "Customised Approach",
    description: "No one-size-fits-all model—every generator receives a tailored hazardous waste strategy.",
  },
  {
    title: "Safety & Legal Compliance",
    description: "Assessments and training increase teams’ understanding of health, risk, and legislation.",
  },
]

const safetyEmphasis = [
  { title: "Waste legislation training", description: "Keeping teams updated on every regulatory change." },
  { title: "Handling of hazardous waste", description: "Hands-on training for PPE, containment, and spill response." },
  { title: "Transport of hazardous waste", description: "Licensed transporters and PDP licensed drivers on every route." },
]

const complianceItems = [
  "Licensed transporter & PDP licensed drivers",
  "Record keeping: weighbridge certificates",
  "Quality control: waste manifest control documents",
  "Quality assurance: waste disposal certificates",
]

export function AboutSection() {
  return (
    <section
      id="about"
      data-scroll-section
      data-truck-start="8"
      data-truck-end="18"
      className="relative min-h-screen flex items-center py-20 bg-background scroll-snap-section"
    >
      <div className="container mx-auto px-4 md:px-6 space-y-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-primary font-semibold tracking-[0.4em] uppercase">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why choose Tshegofentse?</h2>
            <p className="text-muted-foreground text-lg">
              At Tshegofentse Hazardous Waste & Analytical Services we evaluate every option for reuse, recycling, and responsible
              disposal so less waste ends up in landfill. Our legal and green methods recover value from waste while reducing
              pollution. We pair cutting-edge analytical support with motivated field teams to deliver consistent excellence.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((item) => (
                <div key={item.title} className="space-y-1" data-reveal>
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[360px] rounded-3xl overflow-hidden border border-border/50 shadow-xl" data-reveal>
            <Image src="/chemical-laboratory-barrels.jpg" alt="Licensed hazardous waste transporter" fill className="object-cover" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <Card className="p-10 bg-primary/5 border border-primary/20 shadow-inner space-y-6" data-reveal>
            <p className="text-sm uppercase tracking-[0.5em] text-primary text-center">Safety Emphasis</p>
            <div className="grid gap-6 md:grid-cols-3">
              {safetyEmphasis.map((item) => (
                <div key={item.title} className="text-center space-y-2">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-10 bg-background border border-border/50 shadow-lg space-y-4" data-reveal>
            <h3 className="text-2xl font-semibold">Compliance Focused</h3>
            <p className="text-muted-foreground">
              From licensing to documentation, Tshegofentse keeps every aspect of hazardous waste management compliant and auditable.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {complianceItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

