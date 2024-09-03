import avatar from '../../assets/avatar.svg'

import styles from './styles.module.scss'

const AvatarImage = () => {
  return (
    <img src={avatar} alt="Avatar criado com inteligência artificial." className={styles.avatar}/>
  )
}

export default AvatarImage