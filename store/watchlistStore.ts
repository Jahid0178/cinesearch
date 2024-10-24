import { create } from "zustand";
import { MovieType } from "@/typescript/types";

interface WatchlistStore {
  watchlists: MovieType[];
  addToWatchlist: (movie: MovieType) => void;
  removeFromWatchlist: (movie: MovieType) => void;
  clearWatchlist: () => void;
}

const useWatchlistStore = create<WatchlistStore>((set) => ({
  watchlists: [],
  addToWatchlist: (movie: MovieType) =>
    set((state) => ({
      watchlists: state.watchlists.some((item) => item.id === movie.id)
        ? state.watchlists
        : [...state.watchlists, movie],
    })),
  removeFromWatchlist: (movie: MovieType) =>
    set((state) => ({
      watchlists: state.watchlists.filter((item) => item.id !== movie.id),
    })),
  clearWatchlist: () =>
    set(() => ({
      watchlists: [],
    })),
}));

export default useWatchlistStore;
