// contexts/MenuContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

// Define context type
interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

// Create context
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Custom hook to use MenuContext
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

// Menu provider component
export const MenuProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("hello");
    setIsMenuOpen((prev) => !prev);
  };

  const contextValue: MenuContextType = {
    isMenuOpen,
    toggleMenu,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
