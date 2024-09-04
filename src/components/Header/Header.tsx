import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

import { CustomSelect } from '../CustomSelect/CustomSelect'
import { ThemeController } from '../ThemeController/ThemeController'

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [closing, setClosing] = useState<boolean>(false)

  const handleOpenModal = () => {
    setClosing(prevState => !prevState && open)
    
    if (closing) {
      setTimeout(() => {
        setOpen(false)
        setClosing(false)
      }, 600);
      
      return
    }

    setOpen(prevState => !prevState)
  }

  const headerRef = useRef<HTMLHeadElement>(null)
  let scrollHeight = 0

  const handleScroll = () => {
    let currentScrollHeight = window.scrollY
  
    if(currentScrollHeight > scrollHeight) {
      headerRef.current!.style.opacity = "0"
      headerRef.current!.style.width = "200%"
      scrollHeight = currentScrollHeight
    } else {
      headerRef.current!.style.width = "100%"
      headerRef.current!.style.opacity = "1"
      scrollHeight = currentScrollHeight
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={styles.header__container} ref={headerRef}>
      <div className="container">

        {/* Esqueleto do header mobile */}
        <div className={styles.header__mobileBox} onClick={handleOpenModal}>
          <div className={`${styles.header__mobileStyle} ${open ? styles.open : ''} ${closing ? styles.closing : ''}`}></div>
        </div>
        <nav className={`${styles.header__mobile} ${open ? styles.modal__open : ''}`}>
          <ul>
            <li>
              <a className='text text__small--1 font__black' href="">Início</a>
            </li>
            <li>
              <a className='text text__small--1 font__black' href="">Sobre mim</a>
            </li>
            <li>
              <a className='text text__small--1 font__black' href="">Tecnologias</a>
            </li>
            <li>
              <a className='text text__small--1 font__black' href="">Projetos</a>
            </li>
            <li>
              <a className='text text__small--1 font__black' href="">Conquistas</a>
            </li>
            <li>
              <a className='text text__small--1 font__black' href="">Contato</a>
            </li>
          </ul>

          <div className={styles.desktop__options}>
            <CustomSelect />
            <ThemeController />
          </div>
        </nav>

        {/* Esqueleto do header desktop */}
        <nav className={styles.header__desktop}>
          <ul>
            <li className={styles.desktop__headerLi}>
              <a className='text text__small--1 font__alternative' href="">Início</a>
            </li>
            <li className={styles.desktop__headerLi}>
              <a className='text text__small--1 font__alternative' href="">Sobre mim</a>
            </li>
            <li className={styles.desktop__headerLi}>
              <a className='text text__small--1 font__alternative' href="">Tecnologias</a>
            </li>
            <li className={styles.desktop__headerLi}>
              <a className='text text__small--1 font__alternative' href="">Projetos</a>
            </li>
            <li className={styles.desktop__headerLi}>
              <a className='text text__small--1 font__alternative' href="">Conquistas</a>
            </li>
            <li className={styles.desktop__headerLi}>
              <a className='text text__small--1 font__alternative' href="">Contato</a>
            </li>
          </ul>

          <div className={styles.desktop__options}>
            <CustomSelect />
            <ThemeController />
          </div>
        </nav>
      </div>
    </header>
  )
}