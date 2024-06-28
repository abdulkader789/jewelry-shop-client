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
    <nav className="border h-12">
      <div className="flex flex-col lg:flex-row lg:h-full">
        <ul className="flex flex-col lg:flex-row top-12 lg:top-0 w-full lg:w-auto lg:h-full absolute lg:relative z-40 lg:z-auto left-0 lg:left-auto bg-gray-200 transition-all duration-300 ease-in-out">
          {navLinks.map((link: INavLink, index: number) => (
            <li
              key={link.slug}
              className=" lg:hover:bg-gray-200"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Link href={link.slug}>
                <span>{link.name}</span>
                {link.dropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
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
                <ul className="lg:absolute  lg:left-0 lg:z-50 lg:flex-col lg:top-12 lg:ml-2 bg-blue-500 border transition-all duration-300 ease-in-out transform">
                  {link.dropdown.map((sublink: INavLink) => (
                    <li
                      key={sublink.slug}
                      className="py-2 px-4 hover:bg-gray-200"
                    >
                      <Link href={sublink.slug}>{sublink.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
