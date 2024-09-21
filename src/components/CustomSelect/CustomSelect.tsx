import { useRef } from 'react'
import styles from './styles.module.scss'

import { GiBrazil } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import i18n from '../../i18n';

export const CustomSelect = () => {
  const ref = useRef<HTMLDivElement>(null)

  const changeInputValue = (e: any) => {
    const lang: string = e.target.value

    i18n.changeLanguage(lang.toLowerCase())
  }

  return (
    <div className={styles.select__container} ref={ref}>
      <GiBrazil />
      <span className='text text__small--2'>PT</span>
      <IoIosArrowDown />

        <form onInput={(e) => changeInputValue(e)} className={styles.select__optionsContainer}>
          <input type="radio" name="languageValue" id="PT" value="pt" />
          <label htmlFor="PT" className='text text__small-1 font__black'>Português</label>
          <input type="radio" name="languageValue" id="EN" value="en" />
          <label htmlFor="EN" className='text text__small-1 font__black'>English</label>
        </form>
      </div>
  )
}