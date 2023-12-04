import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import KalorizeBangkit from "@/../public/KalorizeBangkit.png";
import TeslaCalculator from "@/../public/TeslaCalculator.png";
import wordanalyticsImg from "@/../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Gadjah Mada University",
    location: "Yogyakarta, Indonesia",
    description:
      "I studied mathematics major focusing on computational mathematics. During my study, I learned C++, Java, Python and Node.js.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Graduated Bangkit Academy 2023",
    location: "Yogyakarta, Indonesia",
    description:
      "I graduated from Bangkit after 6 month studying cloud computing. I also got the Associate Cloud Engineer Certificate issued by Google Cloud.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Back-End Developer",
    location: "Bengkulu, Indonesia",
    description:
      "I'm now a back-end developer working as a freelancer. My stack includes Express.js, TypeScript and MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Kalorize",
    description:
      "I worked as a back-end developer for this capstone project around one month. I also worked on GCP infrastructure for this project",
    tags: ["GCP", "Express.js", "Flask", "MySQL", "Cloud Run"],
    imageUrl: KalorizeBangkit,
    projectUrl: 'https://github.com/Kalorize/kalorize-be'
  },
  {
    title: "Tesla Calculator",
    description:
      "A Tesla car calculator. Made using react from educative course",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    imageUrl: TeslaCalculator,
    projectUrl: 'https://tesla-calculator.surge.sh/'
  }
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Framer Motion",
  "Git",
  "Python",
  "Flask",
  "Django",
  "Tailwind",
  "MongoDB",
  "MySQL",
] as const;