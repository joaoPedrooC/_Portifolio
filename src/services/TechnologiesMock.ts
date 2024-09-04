import { IconType } from "react-icons";
import { BiLogoDjango, BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoGithub, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiNestjs, SiPostgresql, SiPrisma, SiRedux, SiSass } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export interface ITechnologiesMock {
  Icon: IconType
  name: string
}

export const technologiesMock: Array<ITechnologiesMock> = [
  {
    Icon: FaHtml5,
    name: 'HTML'
  },
  {
    Icon: IoLogoCss3,
    name: 'CSS'
  },
  {
    Icon: IoLogoJavascript,
    name: 'Javascript'
  },
  {
    Icon: BiLogoTypescript,
    name: 'Typescript'
  },
  {
    Icon: FaReact,
    name: 'React'
  },
  {
    Icon: SiRedux,
    name: 'Redux'
  },
  {
    Icon: SiSass,
    name: 'Sass'
  },
  {
    Icon: IoLogoNodejs,
    name: 'NodeJS'
  },
  {
    Icon: SiPrisma,
    name: 'PrismaORM'
  },
  {
    Icon: FaPython,
    name: 'Python'
  },
  {
    Icon: BiLogoDjango,
    name: 'Django'
  },
  {
    Icon: FaGitAlt,
    name: 'Git'
  },
  {
    Icon: IoLogoGithub,
    name: 'Github'
  },
  {
    Icon: SiPostgresql,
    name: 'PostgreSQL'
  },
  {
    Icon: SiExpress,
    name: 'Express.js'
  },
  {
    Icon: SiNestjs,
    name: 'Nest.js'
  },
  {
    Icon: TbBrandCpp,
    name: 'C++'
  },
  {
    Icon: FaJava,
    name: 'Java'
  }
]