import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 bg-gray-900 text-white">
      <div className="container">
        <p className="text-center">
          &copy; {currentYear} CineSearch. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
