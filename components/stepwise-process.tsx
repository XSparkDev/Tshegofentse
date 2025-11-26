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
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Stepwise Approach</h2>
          <p className="text-lg text-muted-foreground">
            By taking a step-by-step approach to waste management, we ensure efficient, effective, and consistent
            services. Our strategy leaves waste disposal as the last option.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                  {step.number}
                </span>
                <CheckCircle2 className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
