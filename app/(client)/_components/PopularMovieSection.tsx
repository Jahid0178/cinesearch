import React from "react";
import MovieCard from "@/components/ui/MovieCard/MovieCard";
import { MovieType } from "@/typescript/types";

const PopularMovieSection = async () => {
  const response = await fetch("http://localhost:3000/api/popular", {
    method: "GET",
  });
  const { results } = await response.json();

  return (
    <section>
      <div className="container">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {results?.map((movie: MovieType) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMovieSection;
