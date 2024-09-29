import { useTranslation } from "react-i18next";
import { IProjectsMock } from "../../../../services/ProjectsMock";

import styles from './styles.module.scss'
import { Dispatch, SetStateAction } from "react";

interface IProjectsCardProps {
  project: IProjectsMock
  delay: number
  setOpen: Dispatch<SetStateAction<null | IProjectsMock>>
  visible: boolean
}

export const ProjectsCard = ({ project, delay, setOpen, visible }: IProjectsCardProps) => {
  const { t } = useTranslation()

  return (
    <>
    <li onClick={() => setOpen(project)} className={`${styles.card__container} ${visible ? 'animate__animated animate__fadeInDown' : ''}`} style={{ animationDelay: `${delay}ms` }}>
      <span className='text text__medium font__black'>{t(project.projectName)}</span>
      <p className='text text__medium font__black'>{t(project.projectDescription)}</p>
    </li>
    </>
  )
}