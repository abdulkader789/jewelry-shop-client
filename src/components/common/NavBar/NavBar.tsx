// components/NavBar.tsx
// "use client";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaShareSquare,
  FaUserCog,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";

import fetchUsers from "@/services/apis/navLinks";
import Link from "next/link";
import React from "react"; // Import useState hook from React
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import SignAccount from "./SignAccount";
import NavLogo from "./NavLogo";

const NavBar = async () => {
  return (
    <main className="border hidden lg:flex lg:flex-col px-5 py-3 sticky top-0 bg-white">
      <header className="hideen lg:flex justify-between w-full mb-2">
        <NavIcons
          icons={[
            { icon: FaMapMarkerAlt, title: "Find Store" },
            { icon: FaShareSquare, title: "Follow Us" },
            { icon: FaPhone, title: "Contact Us" },
          ]}
        />
        <div className="w-1/3 h-8">
          <SearchBar />
        </div>

        <NavIcons
          icons={[
            { icon: FaUserCog, title: "My Account" },
            { icon: FaHeart, title: "My Wishlist" },
            { icon: FaShoppingBag, title: "Shopping Bag" },
          ]}
        />
      </header>
      <nav className="w-full flex justify-between">
        <div>
          <NavLogo />
        </div>

        <div className="w-full">
          <NavLinks />
        </div>
        <div className="w-[300px]   flex justify-end">
          <SignAccount />
        </div>
      </nav>
    </main>
  );
};

export default NavBar;
