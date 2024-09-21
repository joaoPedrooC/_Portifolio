import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'

import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io";
import { Loader } from '../Loader/Loader.tsx'

const Avatar = lazy(() => import('../AvatarImage/AvatarImage.tsx'))

export const BannerSection = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  const { t } = useTranslation()

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(bannerRef.current!)
  }, [])

  return (
    <section className={styles.banner__section}>
      <div className="container" ref={bannerRef}>
        <div>
          <h1 className={`page__title font__alternative ${visible? 'animate__animated animate__fadeInLeft' : ''}`}>{ t('banner__title') }</h1>
          <p className={`text text__big--1 font__alternative ${visible ? 'animate__animated animate__fadeInLeft' : ''}`}>
            {t('banner__text')}
          </p>
          <div className={`${styles.banner__links} ${visible ? 'animate__animated animate__fadeInLeft' : ''}`}>
            <a href="https://www.linkedin.com/in/joaopedrocorreia-/" target='_blank'>
              <FaLinkedin className='animate__animated animate__pulse animate__infinite'/>
            </a>
            <a href="https://www.instagram.com/joaopedro9429/" target='_blank'>
              <FaInstagram className='animate__animated animate__pulse animate__infinite' style={{ animationDelay: ".3s" }}/>
            </a>
            <a href="https://github.com/joaoPedrooC" target='_blank'>
              <FaGithub className='animate__animated animate__pulse animate__infinite animate__delay-3s' style={{ animationDelay: ".5s" }}/>
            </a>
          </div>

          <IoIosArrowDown className={`${styles.banner__arrow}`}/>
        </div>
        
        <Suspense fallback={<Loader />}>
          <Avatar  />
        </Suspense>
      </div>
    </section>
  )
}