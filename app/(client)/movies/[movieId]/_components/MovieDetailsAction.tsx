"use client";

import React from "react";
import useWatchlistStore from "@/store/watchlistStore";
import { FaRegBookmark } from "react-icons/fa";
import { MovieType } from "@/typescript/types";

interface MovieDetailsActionProps {
  movie: MovieType;
}

const MovieDetailsAction = ({ movie }: MovieDetailsActionProps) => {
  const { addToWatchlist } = useWatchlistStore((state) => state);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => addToWatchlist(movie)}
      >
        Add to watchlist <FaRegBookmark size={20} />
      </button>
    </div>
  );
};

export default MovieDetailsAction;
