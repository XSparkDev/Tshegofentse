"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowRight, Droplet, Leaf, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroSlides = [
  {
    id: "welcome",
    badge: "Hazardous Waste & Analytical Services",
    headline: "WELCOME TO TSHEGOFENTSE HAZARDOUS WASTE & ANALYTICAL SERVICES",
    description:
      "We work next to your crews on site, containing hazardous loads, packaging them for transport, and closing the loop with full analytical reporting so your operations stay compliant and safe.",
    cta: "Explore Services",
    background: "/medical-waste-disposal.jpg",
  },
  {
    id: "compliance",
    badge: "Safe & Legal Compliance",
    headline: "WE ONLY DO SAFE & LEGALLY COMPLIANT DISPOSALS",
    description:
      "Our licensed transporters, ADR-certified drivers, and manifest-backed disposal network ensure every litre and kilogram leaves your facility with auditable proof of destruction.",
    cta: "Book a Collection",
    background: "/chemical-laboratory-barrels.jpg",
  },
  {
    id: "solutions",
    badge: "Environmental Solutions",
    headline: "PROVIDING EFFECTIVE SOLUTIONS TO ADDRESS TODAY'S ENVIRONMENTAL CHALLENGES",
    description:
      "From zero-waste-to-landfill initiatives to rapid site remediation, we partner with industry leaders to deliver circular, sustainable outcomes for every waste stream we handle.",
    cta: "Talk To Our Team",
    background: "/water-treatment-plant.png",
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const activeSlide = useMemo(() => heroSlides[index % heroSlides.length], [index])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  const goTo = (direction: "prev" | "next") => {
    setIndex((prev) => {
      if (direction === "next") return (prev + 1) % heroSlides.length
      return (prev - 1 + heroSlides.length) % heroSlides.length
    })
  }

  return (
    <section
      id="hero"
      data-scroll-section
      data-truck-start="-10"
      data-truck-end="12"
      className="relative min-h-screen overflow-hidden scroll-snap-section bg-black"
    >
      <div className="absolute inset-0">
        <Image
          key={activeSlide.id}
          src={activeSlide.background}
          alt={activeSlide.badge}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <Leaf className="absolute -right-40 top-10 w-[1100px] h-[1100px] text-green-400/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 space-y-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center text-white">
          <div className="space-y-8 text-left">
            <div
              key={activeSlide.badge}
              className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white"
              data-reveal
            >
              <Droplet className="h-4 w-4" />
              {activeSlide.badge}
            </div>

            <div className="space-y-4" data-reveal data-reveal-delay="120">
              <p className="text-base font-semibold text-white/80">Hazardous Waste Management</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                {activeSlide.headline}
              </h1>
            </div>

            <p className="text-lg text-white/80 max-w-2xl" data-reveal data-reveal-delay="200">
              {activeSlide.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4" data-reveal data-reveal-delay="260">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold"
              >
                {activeSlide.cta}
                <ArrowRight className="ml-2 h-4 w-4 text-gray-900" />
              </Button>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-10 w-10 text-white" />
                <div className="text-sm text-white/80">
                  <p className="font-semibold text-base text-white">Certified handlers</p>
                  <p>ISO 45001 · POP Waste compliant</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative min-h-[360px] lg:min-h-[520px]"
            data-reveal
            data-reveal-delay="220"
          >
            <div className="absolute inset-0 rounded-[36px] border border-white/20 bg-white/5 p-8 backdrop-blur-2xl overflow-hidden">
              <div className="relative flex flex-col gap-6 h-full">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">Live feed</p>
                  <p className="text-4xl font-semibold leading-tight">Dumping in progress</p>
                  <p className="text-sm text-white/80 mt-2">
                    Visual verification, manifest upload, and analytical reports sync automatically with our CRM.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-white">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">Neutralised</p>
                    <p className="text-3xl font-bold">1.2t</p>
                    <p className="text-xs text-white/70">Avg. load processed</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">Turnaround</p>
                    <p className="text-3xl font-bold">18 min</p>
                    <p className="text-xs text-white/70">On-site neutralisation</p>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 sm:col-span-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">Compliance</p>
                    <p className="text-base">ISO 14001 · POP Waste · Waste Manifest Tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        onClick={() => goTo("prev")}
        aria-label="Previous hero slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        onClick={() => goTo("next")}
        aria-label="Next hero slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            onClick={() => setIndex(slideIndex)}
            aria-label={`Go to slide ${slideIndex + 1}`}
            className={`h-[10px] w-10 rounded-full transition-all ${
              slideIndex === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
