import { IProjectsMock } from "../../../../services/ProjectsMock";

import styles from './styles.module.scss'

interface IProjectsCardProps {
  project: IProjectsMock
}

export const ProjectsCard = ({ project }: IProjectsCardProps) => {
  return (
    <li className={styles.card__container}>
      <span className='text text__medium font__black'>{project.projectName}</span>
      <p className='text text__medium font__black'>{project.projectDescription}</p>
    </li>
  )
}