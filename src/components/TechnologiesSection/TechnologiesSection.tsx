import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

import { TechnologiesList } from './TechnologiesList/TechnologiesList'

export const TechnologiesSection = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const technologiesRef = useRef<HTMLHeadingElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(technologiesRef.current!)
  }, [])

  return (
    <section className={styles.technologies__section}>
      <div className="container">
        <h2 className={`section__title font__alternative ${ visible ? 'animate__animated animate__fadeInDown' : ''}`} ref={technologiesRef}>Tecnologias</h2>
        <TechnologiesList />
      </div>
    </section>
  )
}