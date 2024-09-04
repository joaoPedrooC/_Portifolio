import styles from './styles.module.scss'
import { TbHandClick, TbHandFinger } from 'react-icons/tb'

export const ProjectsSection = () => {
  return (
    <section className={styles.projects__section}>
      <div className='container'>
      <h2 className='section__title'>Projetos</h2>
      <TbHandFinger className={styles.mouse}/>
      <TbHandClick className={styles.mouse__click} />
      </div>
      <div className={styles.projects__sectionBackground}></div>
    </section>
  )
}