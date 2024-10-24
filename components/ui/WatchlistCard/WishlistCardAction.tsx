"use client";

import React from "react";
import Button from "../Button/Button";
import useWatchlistStore from "@/store/watchlistStore";
import { IoClose } from "react-icons/io5";
import { MovieType } from "@/typescript/types";

interface WishlistCardActionProps {
  movie: MovieType;
}

const WishlistCardAction = ({ movie }: WishlistCardActionProps) => {
  const { removeFromWatchlist } = useWatchlistStore((state) => state);
  return (
    <div>
      <Button
        className="btn-danger"
        onClick={() => removeFromWatchlist(movie)}
      >
        <IoClose size={20} /> Remove from watchlist
      </Button>
    </div>
  );
};

export default WishlistCardAction;
