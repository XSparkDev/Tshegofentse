import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Recycle, Droplet, Leaf, Truck, BookOpen, Trash2 } from "lucide-react"

const services = [
  {
    icon: Trash2,
    title: "General & Medical Waste",
    description:
      "Comprehensive collection and disposal services for general waste and specialized medical waste streams, ensuring full compliance with health regulations.",
    image: "/medical-waste-disposal.jpg",
  },
  {
    icon: Droplet,
    title: "Hazardous Chemical Waste",
    description:
      "Expert handling, transport, and disposal of hazardous chemical substances. We ensure safety protocols are strictly followed to protect the environment.",
    image: "/chemical-laboratory-barrels.jpg",
  },
  {
    icon: Recycle,
    title: "Liquid Effluent & Sludge",
    description:
      "Treatment and disposal of liquid effluent, wastewater, and industrial sludge. We focus on zero liquid discharge solutions where possible.",
    image: "/water-treatment-plant.png",
  },
  {
    icon: Leaf,
    title: "Contaminated Soil Remediation",
    description:
      "Professional assessment and remediation of contaminated soil to restore land quality and prevent groundwater pollution.",
    image: "/soil-testing-nature.jpg",
  },
  {
    icon: BookOpen,
    title: "Waste Legal Compliance & Training",
    description:
      "Consultancy services to ensure your business meets all waste legislation requirements, plus training for your staff on proper waste handling.",
    image: "/legal-documents-meeting.jpg",
  },
  {
    icon: Truck,
    title: "Waste Collection & Transport",
    description:
      "Regular scheduled pickups and specialized transport services for all types of waste, ensuring safe and compliant handling from source to destination.",
    image: "/medical-waste-disposal.jpg",
  },
]

export function ServicesAccordion() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We have surpassed the old model of waste management as a transportation business. Instead, we take on waste
            management as an opportunity for smart environmental solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/50 bg-background"
            >
              <div className="relative h-48 w-full overflow-hidden bg-secondary/20">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-colors" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
