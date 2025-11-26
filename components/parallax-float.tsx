"use client"

import { HTMLAttributes, ReactNode, useEffect, useRef } from "react"

type ParallaxFloatProps = {
  children: ReactNode
  speed?: number
} & HTMLAttributes<HTMLDivElement>

export function ParallaxFloat({ children, speed = 0.18, className = "", ...rest }: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof window === "undefined") return

    let frame: number
    const updateOffset = () => {
      frame = window.requestAnimationFrame(() => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        const offset = (window.innerHeight / 2 - rect.top) * speed
        node.style.setProperty("--parallax-offset", `${offset}px`)
      })
    }

    updateOffset()
    window.addEventListener("scroll", updateOffset, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateOffset)
      window.cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div
      ref={ref}
      className={`parallax-float-wrapper ${className}`}
      style={{ transform: "translateY(var(--parallax-offset, 0px))" }}
      {...rest}
    >
      {children}
    </div>
  )
}


