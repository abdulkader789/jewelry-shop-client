// components/NavBar.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { INavLink } from '@/types';
const NavBar: React.FC = () => {
  const [navLinks, setNavLinks] = useState<INavLink[]>([]);

    const [showLinks, setShowLinks] = useState(false);

    const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
      };
    
    const handleToggleDropdown = (index: number) => {
      setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
    };
  
    return (
      <nav className="border h-12 ">
        <div className=" flex flex-col lg:flex-row  lg:h-full">
          <div className=" text-lg font-bold flex justify-between">
                <Link href="/" legacyBehavior>
                    <a className="">
                        <span>Jewelry Shop</span>
                    </a>
                </Link>
              {/* Show/hide icon */}
              <span className="ml-2 cursor-pointer lg:hidden" onClick={toggleLinks}>
                {showLinks ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </span>
       
          </div>
          <ul className={` flex-col lg:flex-row  top-12 lg:top-0  w-full lg:w-auto lg:h-full absolute lg:relative z-50 lg:z-auto  left-0 lg:left-auto bg-gray-200 transition-all duration-300 ease-in-out ${showLinks ? ' flex h-screen' : 'hidden lg:flex h-0 lg:h-auto '}`}>
          {navLinks.map((link: INavLink, index: number) => (
              <li key={link.slug} className="relative">
                <div onClick={() => handleToggleDropdown(index)}>
                  <Link href={link.slug} legacyBehavior>
                    <a className=" hover:text-gray-400 cursor-pointer">
                      {link.name}
                    </a>
                  </Link>
                </div>
                {link.dropdown && (
                <ul className={`transition-all overflow-hidden bg-blue-200 lg:absolute lg:flex-col lg:top-12 lg:left-auto  lg:z-50 duration-300 ease-in-out ${dropdownOpenIndex === index ? 'h-auto' : 'h-0 '}`}>

                    {link.dropdown.map((sublink: INavLink) => (
                      <li key={sublink.slug} className="py-2 px-4 ">
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
  
  export default NavBar;