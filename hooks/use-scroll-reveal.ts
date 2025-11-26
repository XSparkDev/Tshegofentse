"use client"

import { useEffect } from "react"

export function useScrollReveal(selector = "[data-reveal]") {
  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.classList.add("is-visible")
            observer.unobserve(target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    elements.forEach((element) => {
      const delay = element.dataset.revealDelay
      if (delay) {
        element.style.setProperty("--reveal-delay", `${delay}ms`)
      }
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [selector])
}


