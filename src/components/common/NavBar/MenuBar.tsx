// components/MenuBar.tsx
import React, { useRef } from "react";

interface MenuBarProps {
  toggleMenu: () => void; // Function to handle menu toggle
}

const MenuBar: React.FC<MenuBarProps> = ({ toggleMenu }) => {
  return (
    <button className="ml-2 cursor-pointer lg:hidden" onClick={toggleMenu}>
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
    </button>
  );
};

export default MenuBar;
