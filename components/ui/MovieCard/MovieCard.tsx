import React from "react";
import Image from "next/image";
import MovieCardActions from "./MovieCardActions";
import { FaStar } from "react-icons/fa6";
import { MovieType } from "@/typescript/types";
import Link from "next/link";

interface MovieCardProps {
  movie: MovieType;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, adult, poster_path, vote_average, popularity } = movie;
  return (
    <div className="p-2 border rounded-md relative group bg-white">
      <div className="group-hover:block hidden absolute top-3 right-3">
        <MovieCardActions movie={movie} />
      </div>
      <Image
        src={"https://image.tmdb.org/t/p/w400" + poster_path}
        alt={title}
        width={200}
        height={300}
        className="w-full h-72 rounded-md"
      />
      <div className="mt-2 space-y-2">
        <Link href={`/movies/${movie.id}`}>
          <h1
            className="text-lg md:text-xl truncate font-semibold group-hover:text-orange-500"
            title={title}
          >
            {title}
          </h1>
        </Link>
        <div className="flex justify-between items-center gap-2">
          <span className="text-sm flex items-center gap-2">
            <FaStar color="orange" /> {vote_average}
          </span>
          <span className="text-sm">{adult ? "18+" : "13+"}</span>
        </div>
        <p className="text-sm">Popularity: {popularity}</p>
      </div>
    </div>
  );
};

export default MovieCard;
