import { Card } from "@/components/ui/card"

const reviews = [
  {
    name: "Lerato M.",
    handle: "@wastewatch_sa",
    platform: "Twitter",
    quote:
      "Tshegofentse collected and neutralised our hazardous batch within hours. Zero delays, perfect paperwork, and brilliant communication. Exactly what ESG commitments demand.",
  },
  {
    name: "Ethan R.",
    handle: "@greenfoundry",
    platform: "LinkedIn",
    quote:
      "The lab team produced water quality data we could rely on for a critical borehole project. Their analytical turnaround is fast and the CRM portal keeps every report handy.",
  },
  {
    name: "Naledi P.",
    handle: "@circulartextiles",
    platform: "Instagram",
    quote:
      "Huge shout-out to the Tshegofentse crew! They helped us reuse solvents and train our staff on compliance – waste exchange that really drives a circular economy.",
  },
]

export function SocialProofSection() {
  return (
    <section
      id="social"
      className="relative py-20 bg-gradient-to-b from-background via-muted/30 to-background scroll-snap-section"
    >
      <div className="container mx-auto px-4 md:px-6 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <p className="text-primary font-semibold tracking-[0.4em] uppercase">Social Proof</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Loved across social media</h2>
          <p className="text-muted-foreground text-lg">
            Clients tag us weekly after speedy picks-ups, lab reports, and training sessions. Here are a few recent shout-outs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={review.handle}
              className="p-6 flex flex-col gap-5 border border-border/60 bg-background/95 shadow-lg"
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {review.name
                    .split(" ")
                    .map((chunk) => chunk.charAt(0))
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.handle} · {review.platform}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">“{review.quote}”</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

