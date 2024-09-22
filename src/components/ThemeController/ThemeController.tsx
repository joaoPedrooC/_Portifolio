import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import { MdOutlineWbSunny } from "react-icons/md"
import { FaRegMoon } from "react-icons/fa"

export const ThemeController = () => {
  const [themePreference, setThemePreference] = useState<string>(localStorage.getItem('@theme') || 'l');
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
    
    if(themePreference == 'd') {
      localStorage.setItem('@theme', 'l')
      setThemePreference('l')
    } else {
      localStorage.setItem('@theme', 'd')
      setThemePreference('d')
    }

    setTimeout(() => { // Timeout para animação rodar
      setAnimation(false)
    }, 1000)
  }  

  return (
    <div className={`${styles.theme__controller} ${animation ? styles.animation : ''}`} onClick={setTheme}>
      <MdOutlineWbSunny className={themePreference == 'd' ? styles.hidden : ''} />
      <FaRegMoon className={themePreference == 'l' ? styles.hidden : ''} />
    </div>
  )
}