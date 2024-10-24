"use client";

import React from "react";
import useWatchlistStore from "@/store/watchlistStore";
import WatchlistCard from "@/components/ui/WatchlistCard/WatchlistCard";
import { MovieType } from "@/typescript/types";

const WishlistItems = () => {
  const { watchlists } = useWatchlistStore((state) => state);

  return (
    <div className="min-h-[800px]">
      {watchlists.length > 0 ? (
        <div className="space-y-4">
          {watchlists.map((watchlist: MovieType) => (
            <WatchlistCard
              key={watchlist.id}
              movie={watchlist}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-xl text-center">No item in your watchlist 🙁</p>
        </div>
      )}
    </div>
  );
};

export default WishlistItems;
