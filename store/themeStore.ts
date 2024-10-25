import { create } from "zustand";

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useThemeStore;
