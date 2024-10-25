import { create } from "zustand";

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setDarkMode: (isDark: boolean) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false,
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDarkMode;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return { isDarkMode: newTheme };
    }),
  setDarkMode: (isDark: boolean) => set({ isDarkMode: isDark }),
}));

export default useThemeStore;
