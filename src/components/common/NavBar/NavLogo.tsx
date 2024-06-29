// components/NavLogo.tsx
import React from "react";
import Link from "next/link";

const NavLogo: React.FC = () => {
  return (
    <div className="text-lg w-40 h-full font-bold flex justify-between items-center">
      <Link
        href="/"
        className="flex justify-center font-marcellus-regular text-md"
      >
        Jewelry Shop
      </Link>
      {/* Show/hide icon based on isMenuOpen state */}
      <span className="ml-2 cursor-pointer lg:hidden">
        {/* <svg
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
        */}
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
      </span>
    </div>
  );
};

export default NavLogo;
