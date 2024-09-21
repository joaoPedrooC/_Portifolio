import styles from './styles.module.scss'

interface IInputProps {
  label: string
  type: string
  id: string
}

export const Input = ({ label, type, id, ...rest }: IInputProps) => {
  return (
    <div className={styles.input__container}>
      <input type={type} id={id} {...rest} />
      <label htmlFor={id} className='text text__small--1'>{label}</label>
    </div>
  )
}