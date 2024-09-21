import { FaWhatsapp } from 'react-icons/fa'
import { ContactForm } from '../Forms/ContactForm/ContactForm'
import styles from './styles.module.scss'

export const ContactSection = () => {
  return (
    <section className={styles.contact__section}>
      <div className="container">
        <h1 className="section__title font__black">Contato</h1>
        <div className={styles.form__divisor}>
          <ContactForm />
          <span className='text text__small--1'>OU</span>
          <div className={styles.whatsapp__container}>
            <p className='text text__medium'>Entre em contato comigo via WhatsApp</p>
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}