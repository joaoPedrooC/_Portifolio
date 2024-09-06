import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

import { technologiesMock } from '../../../services/TechnologiesMock'
import { TechnologiesListItem } from './TechnologiesListItem/TechnologiesListItem'

export const TechnologiesList = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const technologiesRef = useRef<HTMLUListElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(technologiesRef.current!)
  }, [])

  return (
    <ul className={styles.technologies__list} ref={technologiesRef}>
      {
        technologiesMock.map((technology, index) => <TechnologiesListItem technology={technology} index={index} key={index} visible={visible} />)
      }
    </ul>
  )
}