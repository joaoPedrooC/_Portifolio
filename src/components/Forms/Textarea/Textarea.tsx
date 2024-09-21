import styles from './styles.module.scss'

interface ITextareaProps {
  label: string
}

export const Textarea = ({ label, ...rest }: ITextareaProps) => {
  return (
    <div className={styles.textarea__container}>
      <textarea name="" id="" cols={80} rows={10} {...rest}></textarea>
      <label htmlFor="" className='text text__small--1'>{label}</label>
    </div>
  )
}