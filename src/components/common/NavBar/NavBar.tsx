// components/NavBar.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react"; // Import useState hook from React
import NavLinks from "./NavLinks";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Function to toggle menu state
  };

  return (
    <nav className="border h-12 w-full">
      <div className="flex w-full flex-col lg:flex-row lg:h-full">
        <div className="text-lg w-40 h-full font-bold flex justify-between items-center">
          <Link
            href="/"
            className="font-marcellus-regular w-full flex justify-center"
          >
            Jewelry Shop
          </Link>
          {/* Show/hide icon based on isMenuOpen state */}
          <span className="ml-2 cursor-pointer lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </span>
        </div>
        <section className="w-full h-full">
          <NavLinks />
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
