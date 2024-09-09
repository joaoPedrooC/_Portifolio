import { IProjectsMock } from "../../../services/ProjectsMock"
import { ProjectsCard } from "./ProjectsCard/ProjectsCard"

import styles from './styles.module.scss'

interface IProjectsListProps {
  projectsList: Array<IProjectsMock>
  visible: boolean
}

export const ProjectsList = ({ projectsList, visible }: IProjectsListProps) => {
  return (
    <ul className={styles.list__container}>
      {projectsList.map((project, index) => visible ? <ProjectsCard project={project} delay={index * 50} key={index} /> : null)}
    </ul>
  )
}