import React from "react";
import Link from "next/link";
import Image from "next/image";
import WishlistCardAction from "./WishlistCardAction";
import { MovieType } from "@/typescript/types";

interface WatchlistCardProps {
  movie: MovieType;
}

const WatchlistCard = ({ movie }: WatchlistCardProps) => {
  const { title, backdrop_path, overview, release_date } = movie;

  return (
    <div className="flex flex-col sm:flex-row gap-4 border-2 p-2 rounded-md bg-white text-black dark:bg-gray-800/50 dark:text-white dark:border-gray-500">
      <Image
        src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + backdrop_path}
        alt={title}
        width={300}
        height={200}
        className="w-full h-full sm:w-auto sm:h-auto rounded-md"
      />
      <div className="space-y-3">
        <Link href={`/movies/${movie.id}`}>
          <h2 className="text-xl lg:text-2xl font-semibold hover:text-orange-500">
            {title}
          </h2>
        </Link>
        <p>{overview}</p>
        <p>Release Date: {release_date}</p>
        <WishlistCardAction movie={movie} />
      </div>
    </div>
  );
};

export default WatchlistCard;
