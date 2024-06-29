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
  FaUser,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";

import Link from "next/link";
import React from "react"; // Import useState hook from React
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";

const Sidebar = async () => {
  return (
    <main className="border block lg:hidden">
      <section className="fixed h-screen lg:relative  lg:h-full   top-0 bg-white z-50 w-[85vw] lg:w-auto">
        <div className="lg:h-full">
          <NavLinks />
        </div>
        <header className="px-3">
          <NavIcons
            icons={[
              { icon: FaMapMarkerAlt, title: "Find Store" },
              { icon: FaShareSquare, title: "Follow Us" },
              { icon: FaPhone, title: "Contact Us" },
            ]}
          />

          <NavIcons
            icons={[
              { icon: FaUser, title: "My Account" },
              { icon: FaHeart, title: "My Wishlist" },
              { icon: FaShoppingBag, title: "Shopping Bag" },
            ]}
          />
        </header>
      </section>
    </main>
  );
};

export default Sidebar;
