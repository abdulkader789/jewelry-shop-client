// components/NavLinks.ts

import React from "react";
import { navLinks } from "./../../../services/data/navlinks";
import getNavLinks from "@/services/apis/navLinks";
import Link from "next/link";
import { INavLink } from "@/types";
import styles from "../../../styles/navbar.module.css";

const NavLinks = async () => {
  const navLinks = await getNavLinks();
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center lg:h-full w-full lg:justify-center relative">
      {navLinks.map((link) => (
        <li
          key={link.slug}
          className="group text-sm uppercase font-marcellus-regular "
        >
          <Link href={link.slug} className="flex py-2 px-4">
            {link.name}
            {link.dropdown && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 relative  transition duration-300 transform group-hover:-rotate-180"
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

          {link.dropdown && (
            <ul
              className={`pl-5 lg:pl-0 flex-col max-h-0 z-30 overflow-hidden bg-gray-200 w-auto  transition-[max-height] duration-300 ease-in-out group-hover:max-h-[1000px] lg:absolute lg:top-11`}
            >
              {link.dropdown.map((sublink: INavLink) => (
                <li key={sublink.slug} className=" hover:bg-gray-200 ">
                  <Link
                    href={sublink.slug}
                    className="block uppercase font-marcellus-regular text-sm py-2 px-4"
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
  );
};

export default NavLinks;
