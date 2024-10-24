import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MovieType } from "@/typescript/types";

interface RecommendationCardProps {
  movie: MovieType;
}

const RecommendationCard = ({ movie }: RecommendationCardProps) => {
  return (
    <div className="border rounded-md overflow-hidden p-1">
      <Image
        src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path}
        alt={movie.title}
        width={300}
        height={250}
        className="w-full h-full rounded-md"
      />
      <div className="mt-2">
        <Link href={"#"}>
          <h3
            className="text-md truncate font-semibold"
            title={movie.title}
          >
            {movie.title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;
