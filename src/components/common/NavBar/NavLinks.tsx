// components/NavBar.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { INavLink } from "@/types";
import apis from "@/services/apis";

const NavLinks: React.FC = () => {
  const [navLinks, setNavLinks] = useState<INavLink[]>([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    apis.navLinks.getNavLinks().then((data) => setNavLinks(data));
  }, []);

  console.log("show navlinks: ", navLinks);
  return (
    <nav className="border h-12">
      <div className="flex flex-col lg:flex-row lg:h-full">
        <ul
          className={`flex flex-col lg:flex-row top-12 lg:top-0 w-full lg:w-auto lg:h-full absolute lg:relative z-40 lg:z-auto left-0 lg:left-auto bg-gray-200 transition-all duration-300 ease-in-out`}
        >
          {navLinks.map((link: INavLink, index: number) => (
            <li key={link.slug} className="relative lg:hover:bg-gray-200">
              <div className="lg:hover:bg-gray-200">
                <Link href={link.slug} legacyBehavior>
                  <a className="hover:text-gray-400 cursor-pointer py-2 px-4 flex justify-center items-center">
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
                  </a>
                </Link>
              </div>

              {link.dropdown && (
                <ul
                  className={`lg:absolute lg:left-0 lg:z-50 lg:flex-col lg:top-12 lg:ml-2 bg-blue-500 border transition-all duration-300 ease-in-out transform`}
                >
                  {link.dropdown.map((sublink: INavLink) => (
                    <li
                      key={sublink.slug}
                      className="py-2 px-4 hover:bg-gray-200"
                    >
                      <Link href={sublink.slug} legacyBehavior>
                        <a>{sublink.name}</a>
                      </Link>
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
