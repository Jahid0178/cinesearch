"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import useWatchlistStore from "@/store/watchlistStore";
import useThemeStore from "@/store/themeStore";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

const Header = () => {
  const { watchlists } = useWatchlistStore((state) => state);
  const { isDarkMode, toggleTheme } = useThemeStore((state) => state);

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
                href={"/watchlist"}
                className="hover:text-orange-500"
              >
                Watchlist <span>{watchlists.length}</span>
              </Link>
            </li>
            <li>
              {isDarkMode ? (
                <Button
                  onClick={toggleTheme}
                  title="Light Mode"
                >
                  <BsFillSunFill size={25} />
                </Button>
              ) : (
                <Button
                  onClick={toggleTheme}
                  title="Dark Mode"
                >
                  <FaMoon size={20} />
                </Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
