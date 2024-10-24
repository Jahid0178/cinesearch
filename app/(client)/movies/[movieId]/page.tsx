import React from "react";
import MovieDetailsSection from "./_components/MovieDetailsSection";
import MovieCastSection from "./_components/MovieCastSection";
import MovieRecommendationsSection from "./_components/MovieRecommendationsSection";
import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchRecommendationsMovie,
} from "@/lib/actions/actions";

interface MovieDetailsPageProps {
  params: {
    movieId: string;
  };
}

export const revalidate = 60;

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const { movieId } = params;
  const movie = await fetchMovieDetails(movieId);
  const { cast } = await fetchMovieCast(movieId);
  const { results } = await fetchRecommendationsMovie(movieId);

  return (
    <>
      <MovieDetailsSection movie={movie} />
      <MovieCastSection casts={cast} />
      <MovieRecommendationsSection recommendations={results} />
    </>
  );
};

export default MovieDetailsPage;
