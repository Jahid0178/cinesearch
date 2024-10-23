"use client";

import React from "react";
import { FaBookmark } from "react-icons/fa";

const MovieCardActions = () => {
  const handleWatchlist = () => {
    console.log("Added to watchlist");
  };
  return (
    <div>
      <button
        onClick={handleWatchlist}
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
