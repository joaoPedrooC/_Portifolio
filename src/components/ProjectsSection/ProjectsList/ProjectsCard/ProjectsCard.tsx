import { useTranslation } from "react-i18next";
import { IProjectsMock } from "../../../../services/ProjectsMock";

import styles from './styles.module.scss'

interface IProjectsCardProps {
  project: IProjectsMock
  delay: number
}

export const ProjectsCard = ({ project, delay }: IProjectsCardProps) => {
  const { t } = useTranslation()

  return (
    <li className={`${styles.card__container} animate__animated animate__fadeInDown`} style={{ animationDelay: `${delay}ms` }}>
      <span className='text text__medium font__black'>{t(project.projectName)}</span>
      <p className='text text__medium font__black'>{t(project.projectDescription)}</p>
    </li>
  )
}