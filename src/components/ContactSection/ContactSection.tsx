import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FaWhatsapp } from 'react-icons/fa'
import { ContactForm } from '../Forms/ContactForm/ContactForm'

import styles from './styles.module.scss'

export const ContactSection = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const contactRef = useRef<HTMLDivElement>(null)

  const { t } = useTranslation()

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(contactRef.current!)
  }, [])

  return (
    <section className={styles.contact__section} id='contact'>
      <div className="container" ref={contactRef}>
        <h1 className={`section__title font__black ${visible ? 'animate__animated animate__fadeInDown' : ''}`}>{t('contacts__title')}</h1>
        <div className={styles.form__divisor}>
          <ContactForm />
          <span className={`text text__small--1 ${visible ? 'animate__animated animate__flipInY' : ''}`}>{t('contacts__or')}</span>
          <div className={`${styles.whatsapp__container} ${visible ? 'animate__animated animate__fadeInRight' : ''}`}>
            <p className='text text__medium'>{t('contacts__whatsapp')}</p>
            <a href="https://wa.me/5534991860491" target='_blank'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}