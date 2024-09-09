import { IProjectsMock } from "../../../services/ProjectsMock"
import { ProjectsCard } from "./ProjectsCard/ProjectsCard"

import styles from './styles.module.scss'

interface IProjectsListProps {
  projectsList: Array<IProjectsMock>
}

export const ProjectsList = ({ projectsList }: IProjectsListProps) => {
  return (
    <ul className={styles.list__container}>
      {projectsList.map(project => <ProjectsCard project={project} />)}
    </ul>
  )
}