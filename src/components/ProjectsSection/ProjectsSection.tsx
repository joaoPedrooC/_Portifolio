import { useEffect, useRef, useState } from 'react'
import { backEndProjects, frontEndProjects } from '../../services/ProjectsMock'
import { ProjectsList } from './ProjectsList/ProjectsList'
import styles from './styles.module.scss'
import { TbHandClick, TbHandFinger } from 'react-icons/tb'

export const ProjectsSection = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const projectsRef = useRef<HTMLHeadingElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(projectsRef.current!)
  }, [])

  return (
    <section className={styles.projects__section}>
      <div className='container'>
        <h2 className={`section__title ${visible ? 'animate__animated animate__fadeInDown' : ''}`} ref={projectsRef}>Projetos</h2>
        <TbHandFinger className={styles.mouse}/>
        <TbHandClick className={styles.mouse__click} />

        <div className={styles.section__cardsContainer}>
          <div>
            <span className={`text text__medium font__black ${visible ? 'animate__animated animate__fadeIn' : ''}`}>Font-end</span>
            <ProjectsList projectsList={frontEndProjects} visible={visible} />
          </div>
          <div>
            <span className={`text text__medium font__black ${visible ? 'animate__animated animate__fadeIn' : ''}`}>Back-end</span>
            <ProjectsList projectsList={backEndProjects} visible={visible} />
          </div>
        </div>
      </div>
    </section>
  )
}