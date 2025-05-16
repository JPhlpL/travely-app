"use client";

import type React from "react";

import { useState, useEffect, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme as useDeviceColorScheme } from "react-native";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const deviceTheme = useDeviceColorScheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(deviceTheme === "dark");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved theme preference on app start
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme !== null) {
          setIsDarkMode(savedTheme === "dark");
        } else {
          // If no saved preference, use device theme
          setIsDarkMode(deviceTheme === "dark");
        }
      } catch (error) {
        console.error("Failed to load theme preference:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadTheme();
  }, [deviceTheme]);

  // Save theme preference when it changes
  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem("theme", isDarkMode ? "dark" : "light").catch(
        (error) => {
          console.error("Failed to save theme preference:", error);
        }
      );
    }
  }, [isDarkMode, isLoaded]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeToggle() {
  return useContext(ThemeContext);
}
