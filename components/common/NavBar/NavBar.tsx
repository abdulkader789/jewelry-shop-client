// components/NavBar.tsx
"use client";

import NavLinks from "./NavLinks";

const NavBar: React.FC = () => {
  return (
    <nav className="border relative bg-gray-300">
      <NavLinks />
    </nav>
  );
};

export default NavBar;
