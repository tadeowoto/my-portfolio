
import linkedin from "../assets/icons/brand-linkedin.svg";
import github from "../assets/icons/brand-github.svg";
import gmail from "../assets/icons/brand-gmail.svg";
import react from "../assets/icons/brand-react.svg";
import java from "../assets/icons/java-svgrepo-com.svg";
import nodejs from "../assets/icons/brand-nodejs.svg";
import tailwind from "../assets/icons/brand-tailwind.svg";
import typescript from "../assets/icons/brand-typescript.svg";
import javascript from "../assets/icons/brand-javascript.svg";
import html5 from "../assets/icons/file-type-html.svg";
import css3 from "../assets/icons/brand-css3.svg";
import spring from "../assets/icons/spring-boot-svgrepo-com.svg";
import mysql from "../assets/icons/brand-mysql.svg";
import dashboard from "../assets/projects/aidashboard.png"
import azeroth from "../assets/projects/azeroth.png"
import loficorner from "../assets/projects/loficorner.png"
import todo from "../assets/projects/todo.png"


export const socialMediaData = [
  {
    id: 1,
    name: "Linkedin",
    icon: linkedin,
    url: "https://www.linkedin.com/in/tadeowoto/",
  },
  {
    id: 2,
    name: "Github",
    icon: github,
    url: "https://github.com/tadeowoto",
  },
  {
    id: 3,
    name: "Gmail",
    icon: gmail,
    url: "mailto:tadeo.woto@gmail.com",
  }
];

export const skillsData = [
  {
    id: 1,
    name: "React",
    icon: react,
  },
  {
    id: 2,
    name: "Java",
    icon: java,
  },
  {
    id: 3,
    name: "Nodejs",
    icon: nodejs,
  },
  {
    id: 4,
    name: "Tailwind",
    icon: tailwind,
  },
  {
    id: 5,
    name: "Typescript",
    icon: typescript,
  },
  {
    id: 6,
    name: "Javascript",
    icon: javascript,
  },
  {
    id: 7,
    name: "HTML",
    icon: html5,
  },
  {
    id: 8,
    name: "CSS",
    icon: css3,
  },
  {
    id: 9,
    name: "MySql",
    icon: mysql,
  },
  {
    id: 10,
    name: "Spring Boot",
    icon: spring,
  }
];



export const projectData = [
  {
    id: 1,
    src: dashboard,
    title: "Prisma Dashboard",
    desc: "Fullstack dashboard to improve your prompts focused on developers.",
    tags: ["Nextjs", "Tailwind", "Supabase", "AI-SDK", "Typescript", "Google Sdk", "Github 0auth"],
    to: "https://github.com/tadeowoto/ai-dashboard/tree/feature/supabaselogin",
  },
  {
    id: 2,
    src: azeroth,
    title: "Azheroth Notes",
    desc: "A full-stack app for notes on the free resources I used throughout my learning, inspired by boot.dev using WarcraftCN.",
    tags: ["Astro", "Tailwind", "Typescript", "Spring Boot", "MySql"],
    to: "https://github.com/tadeowoto/azeroth-dev",
  },
  {
    id: 3,
    src: loficorner,
    title: "Loficorner",
    desc: "A Spotify clone for listening to lofi",
    tags: ["Astro", "tailwind"],
    to: "https://github.com/tadeowoto/lofi-corner",
  },
  {
    id: 4,
    src: todo,
    title: "Windows 95 TODO",
    desc: "A todo list inspired by Windows 95",
    tags: ["React", "Tailwind", "Typescript"],
    to: "https://windows95-todo.vercel.app/",
  },
];

