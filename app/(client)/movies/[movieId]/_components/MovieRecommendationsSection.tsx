"use client";

import React from "react";
import RecommendationCard from "@/components/ui/RecommendationCard/RecommendationCard";
import { MovieType } from "@/typescript/types";
import { Swiper, SwiperSlide } from "swiper/react";

interface MovieRecommendationsSectionProps {
  recommendations: MovieType[];
}

const MovieRecommendationsSection = ({
  recommendations,
}: MovieRecommendationsSectionProps) => {
  return (
    <section>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {recommendations.map((movie: MovieType) => (
            <SwiperSlide key={movie.id}>
              <RecommendationCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MovieRecommendationsSection;
