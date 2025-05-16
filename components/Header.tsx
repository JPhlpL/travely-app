"use client"
import { Colors } from "@/constants/Colors"
import { useThemeToggle } from "@/hooks/useThemeToggle"
import { useRouter } from "expo-router"
import { Platform, StyleSheet, Switch, TouchableOpacity, View } from "react-native"
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"
import { IconSymbol } from "./ui/IconSymbol"

type HeaderProps = {
  title?: string
  showBackButton?: boolean
}

export default function Header({ title = "Travely", showBackButton = false }: HeaderProps) {
  const { isDarkMode, toggleTheme } = useThemeToggle()
  const router = useRouter()

  return (
    <ThemedView style={styles.header}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol
              name="chevron.left.forwardslash.chevron.right"
              size={24}
              color={isDarkMode ? Colors.dark.text : Colors.light.text}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
        <ThemedText type="subtitle">{title}</ThemedText>
      </View>

      <View style={styles.themeToggle}>
        <IconSymbol 
          name={isDarkMode ? "moon.fill" : "sun.max.fill"} 
          size={20} 
          color={isDarkMode ? Colors.dark.icon : Colors.light.icon} 
        />
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{
            false: Platform.OS === "ios" ? "#e9e9ea" : "#767577",
            true: Platform.OS === "ios" ? "#0a7ea4" : "#0a7ea4",
          }}
          thumbColor={Platform.OS === "ios" ? "#ffffff" : isDarkMode ? "#f5f5f5" : "#f4f3f4"}
          ios_backgroundColor="#e9e9ea"
          style={styles.switch}
        />
        <IconSymbol 
          name={isDarkMode ? "moon.stars.fill" : "sun.max.fill"} 
          size={20} 
          color={isDarkMode ? Colors.dark.icon : Colors.light.icon} 
        />
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: Platform.OS === "ios" ? 50 : 30,
    marginBottom: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 10,
    padding: 5,
  },
  backIcon: {
    padding: 0,
  },
  themeToggle: {
    flexDirection: "row",
    alignItems: "center",
  },
  switch: {
    marginHorizontal: 8,
  },
})
