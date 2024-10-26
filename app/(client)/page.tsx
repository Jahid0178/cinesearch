import React from "react";
import HeroSection from "./_components/HeroSection";
import PopularMovieSection from "./_components/PopularMovieSection";
import { fetchPopularMovies } from "@/lib/actions/actions";

const HomePage = async () => {
  const { results, total_results } = await fetchPopularMovies();

  return (
    <>
      <HeroSection />
      <PopularMovieSection
        initialMovies={results}
        total={total_results}
      />
    </>
  );
};

export default HomePage;
