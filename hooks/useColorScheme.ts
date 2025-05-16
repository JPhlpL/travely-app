import { useThemeToggle } from "./useThemeToggle"

export function useColorScheme() {
  const { isDarkMode } = useThemeToggle()
  return isDarkMode ? "dark" : "light"
}
