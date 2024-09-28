import { useEffect, useRef, useState } from 'react'
import { IAchievementsMock } from '../../../../services/AchievementsMock'

import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

interface IAchievementsCardProps {
  achievement: IAchievementsMock
}

export const AchievementsCard = ({ achievement }: IAchievementsCardProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const achievementsRef = useRef<HTMLLIElement>(null)

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
    <li className={`${styles.card__container} ${visible ? 'animate__animated animate__fadeInUp' : ''}`} ref={achievementsRef}>
      <div>
        <span className='text text__medium font__alternative animate__animated animate__fadeInDown'>{t(achievement.achievementTitle)}</span>
        <img src={achievement.image} alt={`Imagem de ${achievement.achievementTitle}`} className={styles.card__image} />
      </div>
      <div>
        <p className='text text__small--1 font__alternative'>{t(achievement.achievementDescription)}</p>
        { achievement.buttonContent && <a href={achievement.buttonUrl} target='_blank' className='text__bold font__alternative'>{t(achievement.buttonContent)}</a> }
      </div>
    </li>
  )
}