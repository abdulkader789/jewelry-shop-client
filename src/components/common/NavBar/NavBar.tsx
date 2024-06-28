// components/NavBar.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react"; // Import useState hook from React
import NavLinks from "./NavLinks";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State to manage menu open/close

  const toggleMenu = (): void => {
    console.log("SVG clicked. Toggling menu...");
    setIsMenuOpen((prev) => !prev); // Function to toggle menu state
  };

  useEffect(() => {
    console.log("Menu state updated: ", isMenuOpen);
  }, [isMenuOpen]);
  return (
    <nav className="border h-12 w-full">
      <div className="flex w-full flex-col lg:flex-row lg:h-full">
        <div className="text-lg h-full font-bold flex justify-between items-center">
          <Link
            href="/"
            className="font-marcellus-regular w-40 flex justify-center"
          >
            Jewelry Shop
          </Link>
          {/* Show/hide icon based on isMenuOpen state */}
          <div
            className="ml-2 cursor-pointer lg:hidden border bg-blue-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <span>cross</span> : <span>bar</span>}
          </div>
        </div>
        {/* <section
          className={`transform transition-transform duration-300 ease-in-out absolute top-0 z-20 w-full lg:w-auto lg:relative lg:transform-none ${
            isMenuOpen ? "translate-x-0" : "-translate-x-1/2"
          } bg-blue-500 lg:bg-transparent`}
        >
          <NavLinks />
        </section> */}
      </div>
    </nav>
  );
};

export default NavBar;
