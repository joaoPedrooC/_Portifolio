import { Input } from "../Input/Input"
import { Textarea } from "../Textarea/Textarea"

import styles from './styles.module.scss'

export const ContactForm = () => {
  return (
    <form className={styles.contact__formContainer}>
      <Input type="text" id="nome" label="Seu nome" />
      <Input type="email" id="email" label="Seu e-mail" />
      <Textarea label="Digite sua mensagem aqui" />
      <button type="submit" className="text__bold">Enviar mensagem</button>
    </form>
  )
}