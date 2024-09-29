import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

export const AboutSection = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const aboutRef = useRef<HTMLParagraphElement>(null)

  const { t } = useTranslation()

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(aboutRef.current!)
  }, [])

  return (
    <section className={styles.about__section} id='about'>
      <div className="container">
        <div>
          <p className={`text text__big--1 ${visible ? 'animate__animated animate__fadeIn' : ''}`} ref={aboutRef}>{t('about__text--1')}</p>
          <p className={`text text__big--1 ${visible ? 'animate__animated animate__fadeIn' : ''}`}>{t('about__text--2')}</p>
        </div>
        <button type="button" className={visible ? 'animate__animated animate__fadeInUp animate__delay-1s button__links' : ''}><a href="" download className='text text__big--2'>{t('about__button')}</a></button>
      </div>
    </section>
  )
}