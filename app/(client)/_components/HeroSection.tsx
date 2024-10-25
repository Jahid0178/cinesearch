import React from "react";
import SearchBox from "@/components/ui/SearchBox/SearchBox";

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen bg-[url('/images/hero-bg.webp')] bg-cover bg-center bg-no-repeat text-white">
      <div className="container h-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-orange-500">Cine</span>Search
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Search for movies, TV shows, and more
          </p>
          <SearchBox />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
