"use client";

import React, { useState } from "react";
import axios from "axios";
import MovieCard from "@/components/ui/MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { MovieType } from "@/typescript/types";

const PopularMovieSection = ({
  initialMovies,
  total,
}: {
  initialMovies: MovieType[] | undefined;
  total: number;
}) => {
  const [movies, setMovies] = useState<MovieType[]>(
    initialMovies ? initialMovies : []
  );
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(total > movies.length);

  const fetchMovies = async () => {
    if (movies.length >= total) {
      setHasMore(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
            page,
          },
        }
      );
      setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section>
      <div className="container">
        <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>

        {movies.length > 0 ? (
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMovies}
            hasMore={hasMore}
            loader={
              <p className="text-center py-5">
                <b>Loading ...</b>
              </p>
            }
            endMessage={
              <p className="text-center py-5 pt-10">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {movies.map((movie: MovieType) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}{" "}
            </div>
          </InfiniteScroll>
        ) : (
          <p className="text-center py-5">
            <b>No results found</b>
          </p>
        )}
      </div>
    </section>
  );
};

export default PopularMovieSection;
