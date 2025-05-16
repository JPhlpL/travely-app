// This is a shim for web and Android where the tab bar is generally opaque.
import { Colors } from "@/constants/Colors"
import { useThemeToggle } from "@/hooks/useThemeToggle"
import { StyleSheet, View } from "react-native"

export default function TabBarBackground() {
  const { isDarkMode } = useThemeToggle()

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: isDarkMode ? Colors.dark.background : Colors.light.background },
      ]}
    />
  )
}

export function useBottomTabOverflow() {
  return 0
}
