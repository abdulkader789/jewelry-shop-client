// components/NavLinks.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { INavLink } from "@/types";
import apis from "@/services/apis";

const NavLinks: React.FC = () => {
  const [navLinks, setNavLinks] = useState<INavLink[]>([]);

  useEffect(() => {
    // Simulate fetching nav links from an API
    apis.navLinks.getNavLinks().then((data: INavLink[]) => setNavLinks(data));
  }, []);

  const handleMouseEnter = (index: number) => {
    const updatedLinks = [...navLinks];
    updatedLinks[index].showDropdown = true;
    setNavLinks(updatedLinks);
  };

  const handleMouseLeave = (index: number) => {
    const updatedLinks = [...navLinks];
    updatedLinks[index].showDropdown = false;
    setNavLinks(updatedLinks);
  };

  return (
    <div className="flex w-full h-full">
      <ul className="flex flex-col h-full lg:flex-row w-full  lg:h-full items-center  lg:relative   left-0 lg:left-auto  transition-all duration-300 ease-in-out">
        {navLinks.map((link: INavLink, index: number) => (
          <li
            key={link.slug}
            className="  px-5 h-full flex items-center group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Link href={link.slug} className="flex">
              <span className="uppercase font-marcellus-regular">
                {link.name}
              </span>
              {link.dropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 relative top-1 transition duration-300 transform group-hover:-rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {link.dropdown && link.showDropdown && (
              <ul className="lg:absolute bg-white lg:z-20 lg:flex-col lg:top-11 lg:ml-2 border transition-all duration-300 ease-in-out transform">
                {link.dropdown.map((sublink: INavLink) => (
                  <li
                    key={sublink.slug}
                    className="py-2 px-4 hover:bg-gray-200"
                  >
                    <Link
                      href={sublink.slug}
                      className="uppercase font-marcellus-regular"
                    >
                      {sublink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
