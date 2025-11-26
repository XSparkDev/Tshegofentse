import { FlaskConical, Pickaxe, Car, Shirt, ShoppingCart, AlertTriangle } from "lucide-react"

const industries = [
  { icon: FlaskConical, name: "Chemicals & Fertilizers" },
  { icon: Pickaxe, name: "Metals & Mining" },
  { icon: Car, name: "Automotive & Coatings" },
  { icon: Shirt, name: "Textile & Leather" },
  { icon: ShoppingCart, name: "Food, Bev & Retail" },
  { icon: AlertTriangle, name: "Other Hazardous Waste" },
]

export function IndustriesGrid() {
  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground">
            We provide specialized waste management solutions across a diverse range of sectors, ensuring compliance and
            safety for every industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-background border border-border/50 rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group cursor-default aspect-square text-center"
            >
              <item.icon className="h-10 w-10 mb-4 text-primary group-hover:text-primary-foreground transition-colors" />
              <span className="font-medium text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
