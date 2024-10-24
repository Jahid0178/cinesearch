"use client";

import React from "react";
import useWatchlistStore from "@/store/watchlistStore";
import { MovieType } from "@/typescript/types";
import { FaBookmark } from "react-icons/fa";

interface MovieCardActionsProps {
  movie: MovieType;
}

const MovieCardActions = ({ movie }: MovieCardActionsProps) => {
  const { addToWatchlist } = useWatchlistStore((state) => state);
  return (
    <div>
      <button
        onClick={() => addToWatchlist(movie)}
        title="Add to watchlist"
      >
        <FaBookmark
          size={25}
          color="white"
        />
      </button>
    </div>
  );
};

export default MovieCardActions;
