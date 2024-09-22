import { ChangeEvent, forwardRef, Ref, useState } from 'react'
import styles from './styles.module.scss'

interface ITextareaProps {
  label: string
  name: string
}

export const Textarea = forwardRef(({ label, name, ...rest }: ITextareaProps, ref: Ref<HTMLTextAreaElement>) => {
  const [dirty, setDirty] = useState<boolean>(false)

  return (
    <div className={`${styles.textarea__container} ${dirty ? styles.filled : ''}`}>
      <textarea onInput={(e: ChangeEvent<HTMLTextAreaElement>) => setDirty(e.target.value.trim().length > 0)} name={name} id="" cols={80} rows={10} {...rest} ref={ref}></textarea>
      <label htmlFor="" className='text text__small--1'>{label}</label>
    </div>
  )
})