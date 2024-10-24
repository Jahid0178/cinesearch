import React from "react";
import MovieDetailsSection from "./_components/MovieDetailsSection";
import MovieCastSection from "./_components/MovieCastSection";
import MovieRecommendationsSection from "./_components/MovieRecommendationsSection";

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
    }
  );
  const movie = await response.json();

  const castResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}`
  );
  const { cast } = await castResponse.json();

  return (
    <>
      <MovieDetailsSection movie={movie} />
      <MovieCastSection casts={cast} />
      <MovieRecommendationsSection />
    </>
  );
};

export default MovieDetailsPage;
