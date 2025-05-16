"use client"

import { useEffect, useState } from "react"
import { useThemeToggle } from "./useThemeToggle"

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false)
  const { isDarkMode } = useThemeToggle()

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  if (hasHydrated) {
    return isDarkMode ? "dark" : "light"
  }

  return "light"
}
