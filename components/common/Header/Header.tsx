import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-6 bg-gray-900 text-white">
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          <h2 className="text-3xl font-semibold">
            <span className="text-orange-500">Cine</span>Search
          </h2>
          <ul className="hidden md:flex items-center gap-4">
            <li>
              <Link
                href={"/"}
                className="hover:text-orange-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/wishlist"}
                className="hover:text-orange-500"
              >
                Wishlist
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
