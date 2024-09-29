import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { backEndProjects, frontEndProjects, IProjectsMock } from '../../services/ProjectsMock'
import { ProjectsList } from './ProjectsList/ProjectsList'

import { TbHandClick, TbHandFinger } from 'react-icons/tb'

import styles from './styles.module.scss'
import { ProjectsModal } from '../Modal/ProjectsModal/ProjectsModal'

export const ProjectsSection = () => {
  const [open, setOpen] = useState<null | IProjectsMock>(null)
  const [visible, setVisible] = useState<boolean>(false)
  const projectsRef = useRef<HTMLHeadingElement>(null)

  const { t } = useTranslation()

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(projectsRef.current!)
  }, [])

  return (
    <section className={styles.projects__section} id='projects'>
      <div className='container'>
        <h2 className={`section__title ${visible ? 'animate__animated animate__fadeInDown' : ''}`} ref={projectsRef}>{t('projects__title')}</h2>
        <TbHandFinger className={styles.mouse}/>
        <TbHandClick className={styles.mouse__click} />

        <div className={styles.section__cardsContainer}>
          <div>
            <span className={`text text__medium font__black ${visible ? 'animate__animated animate__fadeIn' : ''}`}>Font-end</span>
            <ProjectsList setOpen={setOpen} projectsList={frontEndProjects} visible={visible} />
          </div>
          <div>
            <span className={`text text__medium font__black ${visible ? 'animate__animated animate__fadeIn' : ''}`}>Back-end</span>
            <ProjectsList setOpen={setOpen} projectsList={backEndProjects} visible={visible} />
          </div>
        </div>
      </div>
      { open && <ProjectsModal project={open} setOpen={setOpen} />}
    </section>
  )
}