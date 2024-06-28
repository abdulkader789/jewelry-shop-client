// components/MenuBar.tsx
"use client";
import React from "react";
import { useMenuContext } from "../../../contexts/MenuContext";

const MenuBar: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  return (
    <button className="ml-2 cursor-pointer lg:hidden" onClick={toggleMenu}>
      {isMenuOpen ? <span>CrossIcon</span> : <span>BarIcon</span>}
    </button>
  );
};

export default MenuBar;
