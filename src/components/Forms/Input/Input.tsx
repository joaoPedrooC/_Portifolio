import { ChangeEvent, forwardRef, Ref, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface IInputProps {
  label: string
  type: string
  id: string
  name: string
}

export const Input = forwardRef(({ label, type, id, name, ...rest }: IInputProps, ref: Ref<HTMLInputElement>) => {
  const [dirty, setDirty] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false)
  const InputRef = useRef<HTMLDivElement>(null)

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setVisible(true)
    }
  }))

  useEffect(() => {
    observer.observe(InputRef.current!)
  }, [])

  return (
    <div className={`${styles.input__container} ${dirty ? styles.filled : ''} ${visible ? 'animate__animated animate__bounceIn' : ''}`} ref={InputRef}>
      <input onInput={(e: ChangeEvent<HTMLInputElement>) => setDirty(e.target!.value.length > 0)} type={type} id={id} name={name} {...rest} ref={ref}/>
      <label htmlFor={id} className='text text__small--1'>{label}</label>
    </div>
  )
})