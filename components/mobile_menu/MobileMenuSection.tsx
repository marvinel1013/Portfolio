import { NavLinks } from "@/config/config";
import React from "react";
import Text from "../reusable_components/Text";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function MobileMenuSection() {
  const icons = [
    <MdOutlineMail />,
    <FaFacebook />,
    <FaLinkedinIn />,
    <FaGithub />,
    <BsFillPersonLinesFill />,
  ];
  return (
    <div className="h-full w-full">
      <div className="mt-14">
        <h2 className=" text-center border-b-2 pb-3 border-secondary">
          Let's build something together
        </h2>
        <ul className="mt-8">
          {NavLinks.map((link, index) => (
            <li
              className=" uppercase text-center mb-3 tracking-widest"
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>
        <h1 className="font-semibold mt-8 text-lg">
          <Text>LET'S CONNECT</Text>
        </h1>
        <ul className="mt-5 flex gap-3 items-center">
          {icons.map((icon, index) => (
            <li
              className="shadow-md shadow-primary even:shadow-secondary p-2 rounded-full text-2xl"
              key={index}
            >
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenuSection;
