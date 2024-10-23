import React from "react";
import Image from "next/image";
import { MovieType } from "@/typescript/types";
import Link from "next/link";

interface MovieDetailsSectionProps {
  movie: MovieType;
}

const MovieDetailsSection = ({ movie }: MovieDetailsSectionProps) => {
  const {
    title,
    poster_path,
    genres,
    status,
    budget,
    revenue,
    vote_average,
    vote_count,
    release_date,
    production_companies,
    homepage,
    tagline,
    production_countries,
  } = movie;
  const modifyGenres = genres.map((genre) => genre.name).join(" • ");

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <Image
              src={process.env.IMAGE_BASE_URL + poster_path}
              alt={title}
              width={200}
              height={300}
              className="w-full rounded-md"
            />
          </div>
          <div className="col-span-12 md:col-span-8 space-y-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              <p>{tagline}</p>
              <div className="flex flex-col sm:flex-row md:items-center gap-4 mt-2">
                <span className="text-green-600">{status}</span>
                <span className="flex flex-wrap gap-2">{modifyGenres}</span>
                <span className="flex flex-wrap gap-2">{release_date}</span>
              </div>
            </div>
            <div>
              <p>
                <span className="font-semibold">Budget:</span> ${budget}
              </p>
              <p>
                <span className="font-semibold">Revenue:</span> ${revenue}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Revenue Average:</span>{" "}
                {vote_average}
              </p>
              <p>
                <span className="font-semibold">Vote Count:</span> {vote_count}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Production Companies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {production_companies.map((company) => (
                  <div key={company.id}>
                    <div className="space-y-2">
                      <Image
                        src={
                          (process.env.IMAGE_BASE_URL ?? "") + company.logo_path
                        }
                        alt={company.name}
                        width={200}
                        height={300}
                        className="w-full h-16 rounded-md"
                      />
                      <div>
                        <h5 className="text-md font-semibold">
                          {company.name}
                        </h5>
                        <p>{company.origin_country}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Production Countries</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {production_countries.map((country) => (
                  <p key={country.iso_3166_1}>{country.name}</p>
                ))}
              </div>
            </div>
            <div>
              <Link
                href={homepage}
                target="_blank"
                className="text-orange-500 font-semibold hover:underline"
              >
                Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsSection;
