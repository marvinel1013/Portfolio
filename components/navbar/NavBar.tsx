"use client";

import { useState, useEffect } from "react";
import { NavLinks } from "@/config/config";
import Image from "next/image";
import MyLogo from "../../assets/images/MyLogo.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileMenuBar from "../mobile_menu/MobileMenuBar";
import { Great_Vibes } from "next/font/google";

const SignatureFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

function NavBar() {
  //mobile menu STATE
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  //NavBar Shadow STATE
  const [navShadow, setNavShadow] = useState<boolean>(false);

  //toggle openMobileMenu Function
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const shadow = () => {
      if (window.scrollY >= 90) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    window.addEventListener("scroll", shadow);
  }, [navShadow]);

  return (
    <div
      className={`fixed z-20 h-16 md:h-24 w-full text-light bg-dark px-5 md:px-10 ${
        navShadow ? "shadow-md shadow-primary" : " "
      }  `}
    >
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex items-center w-full gap-2">
          <Image
            src={MyLogo}
            alt="my-logo"
            className="w-12 md:w-16 shadow-lg shadow-primary cursor-pointer rounded-md animate-pulse"
            priority
          />
          <div
            className={
              SignatureFont.className +
              " " +
              "text-5xl lg:flex hidden mt-3 bg-gradient-to-r from-secondary to-primary p-2 text-transparent bg-clip-text"
            }
          >
            Marvinel
          </div>
        </div>
        <ul className="hidden md:flex gap-5">
          {NavLinks.map((link, index) => (
            <li
              className="capitalize tracking-wider cursor-pointer font-light hover:text-primary hover:even:text-secondary duration-300 ease-in-out"
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>
        {/* Menu Icon */}
        <div
          onClick={handleOpenMobileMenu}
          className="md:hidden cursor-pointer"
        >
          <HiOutlineMenuAlt1 size={27} />
        </div>
      </div>

      {/* Mobile Menu Section */}
      <MobileMenuBar
        openMobileMenu={openMobileMenu}
        handleOpenMobileMenu={handleOpenMobileMenu}
      />
    </div>
  );
}

export default NavBar;
