// This is a shim for web and Android where the tab bar is generally opaque.
import { useThemeToggle } from "@/hooks/useThemeToggle"
import { StyleSheet, View } from "react-native"

export default function TabBarBackground() {
  const { isDarkMode } = useThemeToggle()

  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: isDarkMode ? "#0d0d0d" : "#d9d9d9" }]} />
  )
}

export function useBottomTabOverflow() {
  return 0
}
