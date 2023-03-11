import html from "../assets/tech_logo/html.png";
import css from "../assets/tech_logo/css.png";
import javascript from "../assets/tech_logo/javascript.png";
import reactjs from "../assets/tech_logo/react.png";
import tailwind from "../assets/tech_logo/tailwind.png";
import nextjs from "../assets/tech_logo/nextjs.png";
import typescript from "../assets/tech_logo/typescript.png";
import redux from "../assets/tech_logo/redux.png";
import reactquery from "../assets/tech_logo/reactquery.svg";
import firebase from "../assets/tech_logo/firebase.png";
import vite from "../assets/tech_logo/vite.png";
import github from "../assets/tech_logo/github.png";
import { StaticImageData } from "next/image";

type techDataType = {
  logo: StaticImageData;
  title: string;
  shadowColor: string;
};

export const NavLinks: string[] = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
];

export const techData = [
  {
    logo: html,
    title: "HTML",
    shadowColor: "shadow-orange-500",
  },
  {
    logo: css,
    title: "CSS",
    shadowColor: "shadow-blue-500",
  },
  {
    logo: javascript,
    title: "JavaScript",
    shadowColor: "shadow-yellow-500",
  },
  {
    logo: reactjs,
    title: "React JS",
    shadowColor: "shadow-sky-500",
  },
  {
    logo: tailwind,
    title: "Tailwind CSS",
    shadowColor: "shadow-cyan-900",
  },
  {
    logo: nextjs,
    title: "Next JS",
    shadowColor: "shadow-gray-600",
  },
  {
    logo: typescript,
    title: "TypeScript",
    shadowColor: "shadow-blue-700",
  },
  {
    logo: redux,
    title: "Redux",
    shadowColor: "shadow-violet-900",
  },
  {
    logo: reactquery,
    title: "React Query",
    shadowColor: "shadow-rose-600",
  },
  {
    logo: firebase,
    title: "Firebase",
    shadowColor: "shadow-yellow-500",
  },
  {
    logo: vite,
    title: "Vite",
    shadowColor: "shadow-purple-600",
  },
  {
    logo: github,
    title: "GitHub",
    shadowColor: "shadow-gray-500",
  },
];
