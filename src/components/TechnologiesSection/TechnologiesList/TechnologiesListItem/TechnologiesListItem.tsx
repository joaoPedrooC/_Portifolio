import styles from './styles.module.scss'

import { ITechnologiesMock } from "../../../../services/TechnologiesMock";

interface ITechnologiesListItemProps {
  technology: ITechnologiesMock
  index: number
}

export const TechnologiesListItem = ({ technology: { Icon, name }, index}: ITechnologiesListItemProps) => {
  return (
    <li className={`${styles.item__container} animate__animated animate__fadeInDown`} style={{
      animationDelay: `${index*15}ms`
    }}>
      <Icon />
      <span className='text text__small--2 font__alternative'>{name}</span>
    </li>
  )
}