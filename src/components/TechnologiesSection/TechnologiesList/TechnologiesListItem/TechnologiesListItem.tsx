import styles from './styles.module.scss'

import { ITechnologiesMock } from "../../../../services/TechnologiesMock";

interface ITechnologiesListItemProps {
  technology: ITechnologiesMock
  index: number
  visible: boolean
}

export const TechnologiesListItem = ({ technology: { Icon, name }, index, visible}: ITechnologiesListItemProps) => {
  return (
    <li className={`${styles.item__container} ${visible? 'animate__animated animate__fadeInDown' : ''}`} style={{
      animationDelay: `${index*15}ms`,
    }}>
      <Icon />
      <span className='text text__small--2 font__alternative'>{name}</span>
    </li>
  )
}