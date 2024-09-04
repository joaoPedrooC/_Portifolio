import styles from './styles.module.scss'
import { TechnologiesList } from './TechnologiesList/TechnologiesList'

export const TechnologiesSection = () => {
  return (
    <section className={styles.technologies__section}>
      <div className="container">
        <h2 className="section__title font__alternative">Tecnologias</h2>
        <TechnologiesList />
      </div>
    </section>
  )
}