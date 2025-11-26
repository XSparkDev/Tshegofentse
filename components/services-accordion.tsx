import type React from "react"
import { Card } from "@/components/ui/card"

const speedySteps = ["Waste Sample", "Analyse Waste", "Characterise Waste", "Proposal & Waste", "Speedy Waste Collection"]

const practicalSolutions = [
  { title: "Waste assessment", description: "Free assessment and characterisation of hazardous waste streams." },
  { title: "Compliance assist", description: "Training and support to keep generators compliant with legislation." },
  { title: "Waste exchange", description: "Linking generators to processors so valuable materials are reused." },
  { title: "Waste advisory", description: "Treatment insights that lower disposal fees and uncover reuse options." },
]

const specialtyServices = [
  {
    title: "Fat and Grease Traps",
    description:
      "Poor maintenance leads to blocked lines, odours, high COD, and unhygienic workplaces. We remove the fat, disinfect the area, and keep wastewater infrastructure running smoothly. Download File.",
  },
  {
    title: "Wash Bay Effluent",
    description:
      "Sludge pits clogging or solids in oily water? We implement effluent treatment that diverts solids, reuses water, and helps you reach Zero Liquid Discharge. Download File.",
  },
  {
    title: "Compliance Assistance",
    description:
      "We evaluate sites for safety and environmental hazards and deliver training so teams understand hygiene, risk, and compliant disposal practices.",
  },
  {
    title: "Onsite Waste Sorting",
    description:
      "We design safer layouts, supply the right containers, and create programs that reduce mixed waste so disposal fees drop.",
  },
  {
    title: "Training",
    description:
      "Tshegofentse Training Academy equips students with practical environmental skills. Visit tshegofentse-academy.co.za or email admin@tshegofentse.co.za.",
  },
]

const safetyEmphasis = [
  { title: "Waste generator record management", description: "Every manifest, certificate, and waste profile is logged." },
  { title: "CRM system", description: "Scheduling, communication, and record keeping handled inside one platform." },
  { title: "Plan & schedule", description: "Turnaround times managed through proactive planning and route coordination." },
]

export function ServicesAccordion() {
  return (
    <section
      id="services"
      data-scroll-section
      data-truck-start="12"
      data-truck-end="32"
      className="relative min-h-screen flex items-center py-20 bg-[#E5F4EC] section-bg-grid scroll-snap-section"
    >
      <div className="container mx-auto px-4 md:px-6 space-y-14">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Services & Practical Solutions</h2>
          <p className="text-lg text-white/85">
            We do more than haul waste. Tshegofentse partners with generators to analyse, treat, transport, and report on every
            hazardous load while keeping your operation safe and compliant.
          </p>
        </div>

        <Card className="p-10 bg-background/95 backdrop-blur border border-border/50 shadow-xl space-y-8" data-reveal>
          <div className="space-y-3 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.4em] text-primary">Speedy Waste Collection</p>
            <h3 className="text-3xl font-semibold">No delays from sample to collection</h3>
            <p className="text-muted-foreground max-w-4xl">
              Our turnaround time after quote acceptance is unbeatable. We keep you informed throughout the waste sample,
              analysis, characterisation, proposal, and collection phases so nothing sits unattended.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {speedySteps.map((step, index) => (
              <div
                key={step}
                className="h-32 rounded-3xl border border-primary/30 bg-primary/10 flex items-center justify-center text-center text-sm font-semibold text-white"
                data-reveal
                style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
              >
                {step}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-10 bg-muted/40 border border-border/60" data-reveal>
          <h3 className="text-2xl font-bold mb-3">Waste Management CRM System</h3>
          <p className="text-muted-foreground">
            By using CRM software we keep client waste records up to date, schedule collections, avoid delays, and maintain an
            auditable timeline for every project.
          </p>
        </Card>

        <div className="grid gap-8 lg:grid-cols-2" data-reveal>
          <Card className="p-8 bg-background/95 border border-border/50 shadow-lg">
            <p className="text-primary font-semibold uppercase tracking-[0.3em] mb-2">Current challenge</p>
            <h3 className="text-3xl font-semibold mb-4">Hazardous waste specialists</h3>
            <p className="text-muted-foreground">
              Non-compliance in hazardous waste disposal harms humans, animals, and ecosystems. We understand the character of
              waste streams and assist businesses lacking the right information so poor decisions and illegal dumping are avoided.
            </p>
          </Card>
          <Card className="p-8 bg-background/95 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Practical solutions</h3>
            <ul className="space-y-3 text-muted-foreground">
              {practicalSolutions.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-foreground">{item.title}: </span>
                  {item.description}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2" data-reveal>
          {specialtyServices.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 h-full flex flex-col border border-border/50 shadow-md"
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground flex-1">{service.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-10 bg-primary/5 border border-primary/20 shadow-inner text-white" data-reveal>
          <p className="text-sm uppercase tracking-[0.5em] text-white/80 text-center mb-6">Safety Emphasis</p>
          <div className="grid gap-6 md:grid-cols-3">
            {safetyEmphasis.map((item) => (
              <div key={item.title} className="text-center space-y-2 text-white">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
