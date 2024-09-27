import { useForm } from "react-hook-form"
import { Input } from "../Input/Input"
import { Textarea } from "../Textarea/Textarea"

import styles from './styles.module.scss'
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactFormSchema } from './contactFormSchema'
import { toast } from "react-toastify"
import { useEffect, useRef, useState } from "react"

interface IFormData {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  const { handleSubmit, register, formState: { isValid } } = useForm<IFormData>({
    resolver: zodResolver(ContactFormSchema)
  })

  const [visible, setVisible] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(buttonRef.current!)
  }, [])

  const submit = async (formData: IFormData) => {
    await fetch('https://portifolio-db.onrender.com/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      toast.success('Recebi sua mensagem! Muito obrigado e em breve retornarei o contato 😁!', {
        position: "bottom-right"
      })
    })
    .catch(() => {
      toast.error('Oops, algo deu errado... Por favor, tente novamente mais tarde!', {
        position: "bottom-right"
      })
    })

  }  

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.contact__formContainer}>
      <Input type="text" id="nome" label="Seu nome" {...register('name')} />
      <Input type="email" id="email" label="Seu e-mail" {...register('email')} />
      <Textarea label="Digite sua mensagem aqui" {...register('message')} />
      <button type="submit" className={`text__bold ${visible ? 'animate__animated animate__slideInUp' : ''}`} disabled={!isValid} ref={buttonRef}>Enviar mensagem</button>
    </form>
  )
}