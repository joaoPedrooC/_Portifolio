import { useEffect, useRef, useState } from 'react'
import { AchievementsList } from './AchievementsList/AchievementsList'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

export const AchievementsSection = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const achievementsRef = useRef<HTMLHeadingElement>(null)

  const { t } = useTranslation()

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(achievementsRef.current!)
  }, [])

  return (
    <section className={styles.achievements__section} id='achievements'>
      <div className='container'>
        <h2 className={`section__title font__alternative ${visible ? 'animate__animated animate__fadeInDown' : ''}`} ref={achievementsRef}>{t('achievements__title')}</h2>
        <AchievementsList />
      </div>
    </section>
  )
}