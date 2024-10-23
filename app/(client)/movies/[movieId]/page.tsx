import React from "react";
import MovieDetailsSection from "./_components/MovieDetailsSection";

interface MovieDetailsPageProps {
  params: {
    movieId: string;
  };
}

export const revalidate = 60;

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const { movieId } = params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`,
    {
      method: "GET",
      cache: "force-cache",
    }
  );
  const movie = await response.json();
  return <MovieDetailsSection movie={movie} />;
};

export default MovieDetailsPage;
