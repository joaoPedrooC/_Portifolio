import { technologiesMock } from '../../../services/TechnologiesMock'
import styles from './styles.module.scss'
import { TechnologiesListItem } from './TechnologiesListItem/TechnologiesListItem'

export const TechnologiesList = () => {
  return (
    <ul className={styles.technologies__list}>
      {
        technologiesMock.map((technology, index) => <TechnologiesListItem technology={technology} index={index} key={index} />)
      }
    </ul>
  )
}