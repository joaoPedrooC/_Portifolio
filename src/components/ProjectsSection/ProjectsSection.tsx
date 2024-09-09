import { backEndProjects, frontEndProjects } from '../../services/ProjectsMock'
import { ProjectsList } from './ProjectsList/ProjectsList'
import styles from './styles.module.scss'
import { TbHandClick, TbHandFinger } from 'react-icons/tb'

export const ProjectsSection = () => {
  return (
    <section className={styles.projects__section}>
      <div className='container'>
        <h2 className='section__title'>Projetos</h2>
        <TbHandFinger className={styles.mouse}/>
        <TbHandClick className={styles.mouse__click} />

        <div className={styles.section__cardsContainer}>
          <div>
            <span className='text text__medium font__black'>Font-end</span>
            <ProjectsList projectsList={frontEndProjects} />
          </div>
          <div>
            <span className='text text__medium font__black'>Back-end</span>
            <ProjectsList projectsList={backEndProjects} />
          </div>
        </div>
      </div>
      <div className={styles.projects__sectionBackground}></div>
    </section>
  )
}