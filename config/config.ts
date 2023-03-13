import PortfolioImg from "../assets/projects-screen-shot/portfolio-app/1.png";
import TodoImg from "../assets/projects-screen-shot/todo-app/1.png";
import NotesImg from "../assets/projects-screen-shot/notes-app/1.png";
import MovieImg from "../assets/projects-screen-shot/movie-app/1.png";
import RecipeImg from "../assets/projects-screen-shot/recipe-app/1.png";
import LandingPageImg from "../assets/projects-screen-shot/landing-page/1.png";
import { StaticImageData } from "next/image";

type ProjectsDataType = {
  title: string;
  appImage: StaticImageData;
  link: string;
  tech: string;
};

export const NavLinks: string[] = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
];

export const ProjectsData: ProjectsDataType[] = [
  {
    title: "My Own Portfolio Website",
    appImage: PortfolioImg,
    link: "/portfolioDetails",
    tech: "NEXT JS",
  },

  {
    title: "Todo List App",
    appImage: TodoImg,
    link: "/todoDetails",
    tech: "REACT JS",
  },

  {
    title: "Notes App",
    appImage: NotesImg,
    link: "/notesDetails",
    tech: "REACT JS",
  },

  {
    title: "Simple Movie App",
    appImage: MovieImg,
    link: "/movieDetails",
    tech: "REACT JS",
  },

  {
    title: "Recipe App",
    appImage: RecipeImg,
    link: "/recipeDetails",
    tech: "REACT JS",
  },

  {
    title: "Animated on Scroll Landing Page",
    appImage: LandingPageImg,
    link: "/landingPageDetails",
    tech: "REACT JS",
  },
];
