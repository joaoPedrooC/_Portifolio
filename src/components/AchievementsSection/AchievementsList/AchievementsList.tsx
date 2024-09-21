import { AchievementsMock } from "../../../services/AchievementsMock"
import { AchievementsCard } from "./AchievementsCard/AchievementsCard"

import styles from './styles.module.scss'

export const AchievementsList = () => {
  return (
    <ul className={styles.achievements__listContainer}>
      {AchievementsMock.map(achievement => <AchievementsCard achievement={achievement} key={achievement.achievementTitle} />)}
    </ul>
  )
}