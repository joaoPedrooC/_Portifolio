import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { IProjectsMock } from "../../../services/ProjectsMock"
import { ProjectsCard } from "./ProjectsCard/ProjectsCard"

import styles from './styles.module.scss'

interface IProjectsListProps {
  projectsList: Array<IProjectsMock>
  visible: boolean
  setOpen: Dispatch<SetStateAction<null | IProjectsMock>>
}

export const ProjectsList = ({ projectsList, visible, setOpen }: IProjectsListProps) => {
  const ulRef = useRef<HTMLUListElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      setOpen(null)
    }
  }))

  useEffect(() => {
    observer.observe(ulRef.current!)
  }, [])

  return (
    <ul className={styles.list__container} ref={ulRef}>
      {projectsList.map((project, index) => <ProjectsCard setOpen={setOpen} project={project} delay={index * 50} key={index} visible={visible} /> )}
    </ul>
  )
}