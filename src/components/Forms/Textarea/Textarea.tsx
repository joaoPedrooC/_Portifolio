import { ChangeEvent, forwardRef, Ref, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface ITextareaProps {
  label: string
  name: string
}

export const Textarea = forwardRef(({ label, name, ...rest }: ITextareaProps, ref: Ref<HTMLTextAreaElement>) => {
  const [dirty, setDirty] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const textareaRef = useRef<HTMLHeadingElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(textareaRef.current!)
  }, [])

  return (
    <div className={`${styles.textarea__container} ${dirty ? styles.filled : ''} ${visible ? 'animate__animated animate__bounceIn' : ''}`} ref={textareaRef}>
      <textarea onInput={(e: ChangeEvent<HTMLTextAreaElement>) => setDirty(e.target.value.trim().length > 0)} name={name} id={name} cols={80} rows={10} {...rest} ref={ref}></textarea>
      <label htmlFor={name} className='text text__small--1'>{label}</label>
    </div>
  )
})