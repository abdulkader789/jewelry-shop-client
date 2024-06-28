"use client";
import { useState } from 'react';
import Link from 'next/link';
import { NAVBAR_LINKS } from '@/constances';
import styles from "./NavBar.module.css"

export default function NavBar({ }: any) {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => (
    setShowNav(pre => !pre)
  );

  return (
    <nav className="border h-14 relative">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:gap-8 lg:h-full">
        {/* Nav Icon */}
        <div className=" text-lg font-bold flex items-center justify-between">
          <Link href="/" legacyBehavior><span>Jewelry Shop</span></Link>

          {/* Show/hide icon */}
          <div className="ml-2 cursor-pointer lg:hidden" onClick={handleToggleNav}>
            {showNav ? <ShowIcon key={"show-icon"} /> : <HideIcon key={"hide-icon"} />}
          </div>
        </div>

        {/* Nav Links */}
        <ul className={`${styles.nav} py-4 lg:py-0 bg-gray-200 lg:bg-transparent flex flex-col lg:flex-row gap-2 lg:gap-0 ${showNav ? styles.navShow : styles.navHide}`}>
          {NAVBAR_LINKS.map((link, index) => (
            <li className={`${styles.nav_link}`} key={link.slug}>
              {/* Dropdown Head */}
              <div className={`${styles.nav_link_head} px-4 py-2 text-sm font-semibold hover:bg-red-500 lg:bg-transparent hover:text-gray-400 cursor-pointer`}>
                <Link className="" href={link.slug} legacyBehavior>
                  {link.name}
                </Link>
              </div>

              {/* Dropdown Content */}
              {link.dropdown && (
                <ul className={`${styles.nav_link_content} py-2 w-full lg:w-max bg-gray-300 border`}>
                  {/* Dropdown Item */}
                  {link.dropdown.map((sublink) => (
                    <li className="py-2 px-4 text-sm font-semibold  hover:bg-gray-500" key={sublink.slug}>
                      <Link className="" href={sublink.slug} legacyBehavior>{sublink.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav >
  );
};

// export default function NavBar({ }: any) {
//   const [showLinks, setShowLinks] = useState(false);
//   const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(null);

//   const toggleLinks = () => {
//     setShowLinks(!showLinks);
//   };

//   const handleToggleDropdown = (index: number) => {
//     setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
//   };

//   return (
//     <nav className="border h-14">
//       <div className="container mx-auto flex flex-col lg:flex-row lg:h-full">
//         {/* Nav Icon */}
//         <div className=" text-lg font-bold flex items-center justify-between">
//           <Link href="/" legacyBehavior><span>Jewelry Shop</span></Link>

//           {/* Show/hide icon */}
//           <div className="ml-2 cursor-pointer lg:hidden" onClick={toggleLinks}>
//             {showLinks ? <ShowIcon key={"show-icon"} /> : <HideIcon key={"hide-icon"} />}
//           </div>
//         </div>

//         {/* Nav Links */}
//         <ul className={`flex-col lg:flex-row  top-12 lg:top-0  w-full lg:w-auto lg:h-full absolute lg:relative z-50 lg:z-auto  left-0 lg:left-auto bg-gray-200 transition-all duration-300 ease-in-out ${showLinks ? ' flex h-screen' : 'hidden lg:flex h-0 lg:h-auto '}`}>
//           {NAVBAR_LINKS.map((link, index) => (
//             <li className="relative" key={link.slug}>
//               {/* Dropdown Head */}
//               <div onClick={() => handleToggleDropdown(index)}>
//                 <Link className="hover:text-gray-400 cursor-pointer" href={link.slug} legacyBehavior>
//                     {link.name}
//                 </Link>
//               </div>

//               {/* Dropdown Content */}
//               {link.dropdown && (
//                 <ul className={`transition-all overflow-hidden bg-blue-200 lg:absolute lg:flex-col lg:top-12 lg:left-auto  lg:z-50 duration-300 ease-in-out ${dropdownOpenIndex === index ? 'h-auto' : 'h-0 '}`}>
//                   {link.dropdown.map((sublink) => (
//                     <li className="py-2 px-4 " key={sublink.slug}>
//                       <Link className="" href={sublink.slug} legacyBehavior>{sublink.name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };


function ShowIcon() {
  return (
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function HideIcon() {
  return (
    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  )
}