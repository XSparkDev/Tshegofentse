import type React from "react"
import { Card } from "@/components/ui/card"

const wasteExchangeSteps = ["Waste Exchange", "Waste Generator offers waste", "Waste Beneficiation", "Waste User receives waste"]

const wasteHierarchy = ["Avoid – Maximum conservation of resources", "Reuse – Reusing materials", "Recycle – Reprocessing materials", "Waste to energy – Energy recovery prior to disposal", "Disposal of waste – Zero conversion of resources"]

const industryWaste = [
  {
    title: "Metals & Mining",
    wastes: ["Heavy metal effluent", "Tailings", "Slag", "Filter cake", "Spent acids", "Millscale", "Contaminated fuels"],
    image: "/industries/metals.jpg",
  },
  {
    title: "Common hazardous waste",
    wastes: ["Sludge", "Oily rags", "Used oils & grease", "Contaminated PPE", "Lead acid batteries"],
    image: "/industries/common.jpg",
  },
  {
    title: "Paint, coatings & automotive",
    wastes: ["Inks & pigments", "Solvents & aerosols", "Used packaging", "Lubricants & greases", "Oil filters"],
    image: "/industries/paint.jpg",
  },
  {
    title: "Chemicals, fertilizers & manufacturing",
    wastes: ["Expired chemicals", "Acidic waste", "High COD effluent", "Low pH effluent", "Catalysts & pesticides"],
    image: "/industries/chemicals.jpg",
  },
  {
    title: "Textile & Leather",
    wastes: ["Off-cuts", "Dyes and pigments", "Contaminated containers", "Effluent sludge"],
    image: "/industries/textile.jpg",
  },
  {
    title: "Food, beverages & retail",
    wastes: ["Organic by-products", "Expired goods", "Packaging waste", "Cleaning chemicals"],
    image: "/industries/food.jpg",
  },
  {
    title: "Other hazardous waste",
    wastes: ["Wash bay effluent", "Wastewater sludge", "FOG (fat, oil, grease)", "Laboratory waste"],
    image: "/industries/other.jpg",
  },
]

export function IndustriesSection() {
  return (
    <section
      id="industries"
      data-scroll-section
      data-truck-start="50"
      data-truck-end="70"
      className="relative min-h-screen flex items-center py-20 bg-muted/40 scroll-snap-section"
    >
      <div className="container mx-auto px-4 md:px-6 space-y-16">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <p className="text-primary font-semibold tracking-[0.4em] uppercase">Industries We Service</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Industry Waste Types</h2>
          <p className="text-muted-foreground text-lg">
            Companies want greener, legal disposal pathways but struggle to find the right avenues. We reduce pollution while
            creating employment, handling hazardous waste across mining, automotive, manufacturing, retail, and more.
          </p>
        </div>

        <Card className="p-10 bg-background border border-border/50 shadow-lg space-y-8" data-reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold">Waste Exchange</h3>
              <p className="text-muted-foreground">
                We match waste generators with users who can recover or recycle the material. Avoid landfill, cut disposal costs,
                and create jobs while promoting environmental sustainability. Learn more at{" "}
                <a href="https://www.wastebenefit.co.za" className="text-primary underline">
                  wastebenefit.co.za
                </a>
                .
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {wasteExchangeSteps.map((step, index) => (
                <div key={step} className="rounded-3xl border border-primary/30 bg-primary/10 p-6 text-center" data-reveal style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}>
                  <p className="text-sm font-semibold text-primary">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {wasteHierarchy.map((item, index) => (
              <div key={item} className="text-center text-sm text-muted-foreground" data-reveal style={{ "--reveal-delay": `${index * 50}ms` } as React.CSSProperties}>
                <div className="text-foreground font-semibold mb-2">{index + 1}.</div>
                {item}
              </div>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6" data-reveal>
          {industryWaste.map((industry, index) => (
            <Card key={industry.title} className="p-8 flex flex-col gap-4 border border-border/50 bg-background/95" data-reveal style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}>
              <h3 className="text-2xl font-semibold">{industry.title}</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                {industry.wastes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="p-10 bg-primary/5 border border-primary/20 shadow-inner text-center space-y-4" data-reveal>
          <h3 className="text-3xl font-semibold text-primary">Contact us for efficient, cost-effective hazardous waste management.</h3>
          <p className="text-muted-foreground">
            Whether it is metals and mining, automotive, chemicals, or retail, Tshegofentse delivers compliant solutions that keep
            operations safe while unlocking value from waste.
          </p>
        </Card>
      </div>
    </section>
  )
}

