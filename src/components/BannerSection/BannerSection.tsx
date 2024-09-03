import { lazy, Suspense } from 'react'

import styles from './styles.module.scss'

import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io";
import { Loader } from '../Loader/Loader.tsx'

const Avatar = lazy(() => import('../AvatarImage/AvatarImage.tsx'))

export const BannerSection = () => {
  return (
    <section className={styles.banner__section}>
      <div className="container">
        <div>
          <h1 className='page__title font__alternative'>Desenvolvedor Full Stack</h1>
          <p className='text text__big--1 font__alternative'>
            Obtendo experiência em desenvolvimento web full stack
            há mais de 1 ano por meio de projetos pessoais, focado 
            na evolução e buscando novos conhecimentos.
          </p>
          <div className={styles.banner__links}>
            <a href="https://www.linkedin.com/in/joaopedrocorreia-/" target='_blank'>
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/joaopedro9429/" target='_blank'>
              <FaInstagram />
            </a>
            <a href="https://github.com/joaoPedrooC" target='_blank'>
              <FaGithub />
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