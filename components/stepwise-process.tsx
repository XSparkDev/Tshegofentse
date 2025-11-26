import type React from "react"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Waste Assessment",
    description: "Thorough evaluation of waste streams to understand composition and volume.",
  },
  {
    number: "02",
    title: "Laboratory Analysis",
    description: "In-house analysis to classify waste accurately according to regulations.",
  },
  {
    number: "03",
    title: "Evaluate Options",
    description: "Prioritizing reuse, recycling, and recovery over disposal.",
  },
  {
    number: "04",
    title: "Beneficiation",
    description: "Waste exchange and finding value in waste materials.",
  },
  {
    number: "05",
    title: "Chemical Treatment",
    description: "Neutralizing hazardous properties to ensure safety.",
  },
  {
    number: "06",
    title: "Safe Disposal",
    description: "The last resort – compliant disposal at licensed facilities.",
  },
]

export function StepwiseProcess() {
  return (
    <section
      id="process"
      data-scroll-section
      data-truck-start="32"
      data-truck-end="55"
      className="relative min-h-screen flex items-center py-20 section-bg-grid scroll-snap-section"
      style={{ backgroundColor: "#9DC13D" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Stepwise Approach</h2>
          <p className="text-lg text-white/85">
            By taking a step-by-step approach to waste management, we ensure efficient, effective, and consistent
            services. Our strategy leaves waste disposal as the last option.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {steps.map((step, index) => (
            <div key={step.number} className="flex h-full">
              <div
                className="group flex flex-col h-full bg-card/95 p-10 rounded-3xl border border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-primary/20 hover:shadow-2xl relative overflow-hidden"
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className="text-5xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                  <CheckCircle2 className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
