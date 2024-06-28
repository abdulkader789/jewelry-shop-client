// components/NavBar.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react"; // Import useState hook from React
import NavLinks from "./NavLinks";
import MenuBar from "./MenuBar";

const NavBar: React.FC = () => {
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
          <MenuBar />
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
