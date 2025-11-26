"use client"

import { useEffect, useState } from "react"

type LoaderState = "hidden" | "visible" | "fading"

export function LoadingOverlay() {
  const [state, setState] = useState<LoaderState>("hidden")

  useEffect(() => {
    if (typeof window === "undefined") return
    const storageKey = "tshegofentse:first-visit"
    if (sessionStorage.getItem(storageKey)) return

    sessionStorage.setItem(storageKey, "seen")
    setState("visible")

    const fadeTimer = window.setTimeout(() => setState("fading"), 2600)
    const hideTimer = window.setTimeout(() => setState("hidden"), 3300)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (state === "hidden") return null

  return (
    <div className={`loader-overlay ${state === "fading" ? "loader-overlay--fade" : ""}`}>
      <div className="loader-sky" />
      <div className="loader-ground" />

      <div className="loader-scene">
        <div className="loader-truck">
          <div className="loader-cab">
            <span className="loader-headlight" />
          </div>
          <div className="loader-bed">
            <div className="loader-bed-lid" />
            <div className="loader-hazard-flow">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="loader-wheel loader-wheel--front" />
          <div className="loader-wheel loader-wheel--rear" />
        </div>

        <div className="loader-barrel">
          <span />
        </div>
        <div className="loader-sparks">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}


