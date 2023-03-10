"use client";

import { useState } from "react";
import { NavLinks } from "@/config/config";
import Image from "next/image";
import MyLogo from "../../assets/images/MyLogo.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileMenuBar from "../mobile_menu/MobileMenuBar";

function NavBar() {
  //mobile menu STATE
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  //toggle openMobileMenu Function
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu((prevState) => !prevState);
  };

  return (
    <div className="fixed z-20 h-16 md:h-24 w-full text-light px-5 md:px-10 shadow-md shadow-primary">
      <div className="w-full h-full flex items-center justify-between">
        <Image
          src={MyLogo}
          alt="my-logo"
          className="w-12 md:w-16 shadow-lg shadow-primary rounded-md animate-pulse"
          priority
        />
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
