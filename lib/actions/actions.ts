import { TMDBResponseType } from "@/typescript/types";

export async function fetchPopularMovies() {
  try {
    const response = await fetch("http://localhost:3000/api/popular", {
      method: "GET",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("fetch_popular_movies", error);
  }
}

export async function fetchMovieDetails(movieId: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("fetch_movie_details", error);
  }
}

export async function fetchMovieCast(movieId: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("fetch_movie_cast", error);
  }
}

export async function fetchRecommendationsMovie(movieId: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.TMDB_API_KEY}`,
      {
        method: "GET",
        next: {
          revalidate: 60,
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("recommendation error", error);
  }
}

export async function fetchSearchMovies(query: string): Promise<TMDBResponseType | undefined> {
  try {
    const response: Response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`);

    return await response.json();

  } catch (error) {
    console.log("fetch_search_movies", error);
  }
}
