// components/SearchBar.tsx
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <div className="w-full border relative h-full flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none border-none px-5"
      />
      <FaSearch className="absolute right-5 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
