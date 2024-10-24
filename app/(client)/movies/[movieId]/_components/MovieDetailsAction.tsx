"use client";

import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { handleAddToWatchlist } from "@/lib/actions/actions";

interface MovieDetailsActionProps {
  movieId: number;
}

const MovieDetailsAction = ({ movieId }: MovieDetailsActionProps) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => handleAddToWatchlist(movieId)}
      >
        Add to watchlist <FaRegBookmark />
      </button>
    </div>
  );
};

export default MovieDetailsAction;
