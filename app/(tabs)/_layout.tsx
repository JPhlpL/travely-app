import { Tabs } from "expo-router"
import { Platform } from "react-native"

import { HapticTab } from "@/components/HapticTab"
import { IconSymbol } from "@/components/ui/IconSymbol"
import TabBarBackground from "@/components/ui/TabBarBackground"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { useThemeToggle } from "@/hooks/useThemeToggle"

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { isDarkMode } = useThemeToggle()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDarkMode ? Colors.dark.tint : Colors.light.tint,
        tabBarInactiveTintColor: isDarkMode ? Colors.dark.tabIconDefault : Colors.light.tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            backgroundColor: isDarkMode ? "rgba(21, 23, 24, 0.8)" : "rgba(255, 255, 255, 0.8)",
          },
          default: {
            backgroundColor: isDarkMode ? Colors.dark.background : Colors.light.background,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gear.circle.fill" color={color} />,
        }}
      />
    </Tabs>
  )
}
