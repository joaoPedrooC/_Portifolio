import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'

export const AboutSection = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const aboutRef = useRef<HTMLParagraphElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(aboutRef.current!)
  }, [])

  return (
    <section className={styles.about__section}>
      <div className="container">
        <div>
          <p className={`text text__big--1 ${visible ? 'animate__animated animate__fadeIn animate__delay-1s' : ''}`} ref={aboutRef}>Desenvolvedor web apaixonado pelo estudo em lógica de programação, iniciei meus estudos em C++ no fim do ano de 2021,
          linguagem que estudo até hoje devido sua complexidade. No decorrer da minha jornada, participei de cursos e maratonas de 
          programação que me ajudaram a desenvolver meu conhecimento. Hoje, estou cursando Ciência da Computação, com previsão 
          de formatura para 2026.</p>
          <p className={`text text__big--1 ${visible ? 'animate__animated animate__fadeIn animate__delay-1s' : ''}`}>Em 2024, iniciei meus estudos na Kenzie Academy Brasil, onde aprendi diversas tecnologias e soft skills. Também tive a
          oportunidade de atuar como Monitor de Ensino Full Stack, auxiliando outros alunos do curso com suas atividades e entregas.
          Desde então, tenho feito projetos pessoais como forma de praticar as tecnologias aprendidas e evoluir ainda mais!</p>
        </div>
        <button type="button" className={visible ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}><a href="" download className='text text__big--2'>Baixar currículo</a></button>
      </div>
      <div className={styles.about__sectionBackground}></div>
    </section>
  )
}