import { Card } from "@/components/ui/card"

const valueAdded = [
  {
    title: "Waste Assessment",
    description: "Capacity to do waste assessments and characterisation so the right advice is delivered.",
  },
  {
    title: "In House Laboratory",
    description: "Hazardous waste receives chemical assessment to identify reuse or treatment options.",
  },
  {
    title: "Waste Exchange",
    description: "Access to a database of potential users so waste with value finds a second life.",
  },
]

const labEquipment = [
  "Photometer Hanna",
  "COD Reactor Hanna",
  "Conductivity meter Hanna",
  "Thermo Discrete Analyser",
  "Turbidity meter Hanna",
  "Dissolved Oxygen meter Hanna",
  "Auto-titrator Hanna",
  "Colliert Sealer & Incubator Idexx",
]

const discreteAnalyses = [
  "Chloride (Cl)",
  "Sulphate (SO4)",
  "Phosphate (PO4)",
  "Total Alkalinity",
  "Nitrates as (NO3)",
  "Nitrites as (NO2)",
  "Fluoride (F)",
  "Ammonium (NH4)",
  "Hexavalent Chromium (Cr6+)",
]

const autoTitratorAnalyses = [
  "Carbonate",
  "Chlorine free",
  "Alkalinity / Acidity",
  "Nitrate",
  "Chromium total",
  "Cyanide dissolved",
  "Lead total",
  "Nickel total",
  "Silver total",
  "Organic carbon total",
  "Volatile fatty acids (VFA)",
]

const microbiologicalAnalyses = ["E Coli", "Total Coliforms", "Faecal Coliforms", "Legionella", "Turbidity", "Dissolved Oxygen", "Auto-titrator Hanna", "Colliert Sealer & Incubator Idexx"]

const inorganicAnalyses = ["COD – Chemical Oxygen Demand", "Turbidity", "Conductivity", "pH @ 25°C", "Dissolved Oxygen", "Total Suspended Solids", "Total Dissolved Solids"]

const labQualifications = [
  "SANAS ISO 17025 Laboratory Management Systems",
  "SANAS ISO 17025 Internal Auditing Course",
  "SANAS ISO 17020 Inspection Body Systems Course",
  "ISO 9001 QMS Implementation",
  "ISO 9001 Lead Auditing",
]

const envTraining = ["Environmental Law", "IWMSA Hazardous Waste Management", "IWMSA Healthcare Risk Waste Management"]

export function LaboratorySection() {
  return (
    <section
      id="laboratory"
      data-scroll-section
      data-truck-start="70"
      data-truck-end="90"
      className="relative min-h-screen flex items-center py-20 scroll-snap-section"
      style={{ backgroundColor: "#9DC13D" }}
    >
      <div className="container mx-auto px-4 md:px-6 space-y-16">
        <div className="text-center space-y-4 max-w-4xl mx-auto text-white">
          <p className="font-semibold tracking-[0.4em] uppercase text-white/75">Laboratory</p>
          <h2 className="text-4xl md:text-5xl font-bold">Water & Wastewater Laboratory</h2>
          <p className="text-lg text-white/85">
            Since 2017, Tshegofentse’s laboratory in Bedworthpark, Vereeniging has provided in-house analytical services for
            wastewater, potable water, boreholes, industrial effluent, sewage, and waste streams. We generate reliable data so
            clients can make informed environmental decisions.
          </p>
        </div>

        <Card className="bg-primary/5 border border-primary/30 shadow-inner text-white">
          <div className="grid md:grid-cols-[1.2fr_0.8fr]">
            <div className="p-10 space-y-4">
              <h3 className="text-3xl font-semibold text-white">Contact Us</h3>
              <p className="text-white/85">
                Call our team if you require reliable water quality testing conducted by industry professionals. Our data supports
                both short- and long-term water-related decisions and keeps compliance on track.
              </p>
            </div>
            <div className="bg-[url('/industries/common.jpg')] bg-cover bg-center rounded-r-3xl min-h-[200px]" />
          </div>
        </Card>

        <Card className="p-10 bg-muted/20 border border-border/60 space-y-8 text-white" data-reveal>
          <h3 className="text-3xl font-semibold text-center text-white">Value Added Services</h3>
          <p className="text-center max-w-3xl mx-auto text-white/85">
            Waste is a resource we call “dirty gold.” By recovering value from waste we reduce pollution, create jobs, and support
            greener industries. Our primary services include:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {valueAdded.map((item) => (
              <Card key={item.title} className="p-6 border border-primary/20 bg-background/90" data-reveal>
                <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </Card>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6" data-reveal>
          <Card className="p-8 border border-border/50 h-full">
            <h3 className="text-2xl font-semibold mb-4">Lab Equipment</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {labEquipment.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 border border-border/50 h-full">
            <h3 className="text-2xl font-semibold mb-4">Discrete Analyser Analyses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {discreteAnalyses.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 border border-border/50 h-full">
            <h3 className="text-2xl font-semibold mb-4">Auto-Titrator Analyses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {autoTitratorAnalyses.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6" data-reveal>
          <Card className="p-8 border border-border/50 h-full">
            <h3 className="text-2xl font-semibold mb-4">IDEXX Colliert Microbiological Analyses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {microbiologicalAnalyses.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 border border-border/50 h-full">
            <h3 className="text-2xl font-semibold mb-4">Other Inorganic Analyses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {inorganicAnalyses.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-10 border border-border/50 bg-background/95 space-y-6" data-reveal>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
            <div className="rounded-3xl overflow-hidden bg-[url('/industries/chemicals.jpg')] bg-cover bg-center min-h-[260px]" />
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold">Neo Mosholi – Laboratory Manager</h3>
              <p className="text-muted-foreground">BSc Microbiology · Post Graduate Diploma in Public Health</p>

              <div>
                <h4 className="font-semibold text-foreground">Laboratory & Auditing Qualifications</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  {labQualifications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mt-4">Environmental & Waste Management Training</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  {envTraining.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}


