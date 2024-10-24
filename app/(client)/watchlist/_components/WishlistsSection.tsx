import React from "react";
import WishlistItems from "./WishlistItems";

const WishlistsSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
        <WishlistItems />
      </div>
    </section>
  );
};

export default WishlistsSection;
