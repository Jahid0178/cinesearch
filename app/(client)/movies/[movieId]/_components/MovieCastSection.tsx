"use client";

import React from "react";
import CastCard from "@/components/ui/CastCard/CastCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CastType } from "@/typescript/types";
import "swiper/css/navigation";

interface MovieCastSectionProps {
  casts: CastType[];
}

const MovieCastSection = ({ casts }: MovieCastSectionProps) => {
  return (
    <section>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Top Billed Cast</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Navigation]}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 2,
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
            1280: {
              slidesPerView: 6,
            },
            1536: {
              slidesPerView: 7,
            },
            1792: {
              slidesPerView: 8,
            },
          }}
        >
          {casts.map((cast: CastType) => (
            <SwiperSlide key={cast.id}>
              <CastCard cast={cast} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MovieCastSection;
