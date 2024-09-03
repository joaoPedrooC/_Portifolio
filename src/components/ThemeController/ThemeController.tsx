import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import { MdOutlineWbSunny } from "react-icons/md"
import { FaRegMoon } from "react-icons/fa"

export const ThemeController = () => {
  const [themePreference, setThemePreference] = useState<null | string>(localStorage.getItem('@theme') || null);
  const [animation, setAnimation] = useState<boolean>(false)
  
  useEffect(() => {
    if(themePreference == 'd') {
      document.querySelector('html')!.classList.add('dark-mode')
    } else {
      document.querySelector('html')!.classList.remove('dark-mode')
    }
  }, [themePreference])

  const setTheme = () => {
    setAnimation(true)
    
    setTimeout(() => { // Timeout para animação rodar
      if(themePreference == 'd') {
        localStorage.setItem('@theme', 'l')
        setThemePreference('l')
      } else {
        localStorage.setItem('@theme', 'd')
        setThemePreference('d')
      }
    }, 300)

    setAnimation(false)
  }

  return (
    <div className={`${styles.theme__controller} ${animation ? styles.animation : ''}`} onClick={setTheme}>
      <MdOutlineWbSunny className={themePreference == 'd' ? styles.hidden : ''} />
      <FaRegMoon className={themePreference == 'l' ? styles.hidden : ''} />
    </div>
  )
}