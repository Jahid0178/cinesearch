"use client";

import React, { useEffect } from "react";
import useThemeStore from "@/store/themeStore";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { isDarkMode } = useThemeStore((state) => state);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return <React.Fragment>{children}</React.Fragment>;
};

export default ThemeProvider;
