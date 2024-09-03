import { useRef } from 'react'
import styles from './styles.module.scss'

import { GiBrazil } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

export const CustomSelect = () => {
  const ref = useRef<HTMLDivElement>(null)

  const changeInputValue = () => {
    const checkedInput = document.querySelector('input[type="radio"]:checked')
  }

  return (
    <div className={styles.select__container} ref={ref}>
      <GiBrazil />
      <span className='text text__small-2'>PT</span>
      <IoIosArrowDown />

        <form onInput={() => changeInputValue()} className={styles.select__optionsContainer}>
          <input type="radio" name="languageValue" id="PT" value={"PT"} />
          <label htmlFor="PT" className='text text__small-1 font__black'>Português</label>
          <input type="radio" name="languageValue" id="EN" value="EN" />
          <label htmlFor="EN" className='text text__small-1 font__black'>English</label>
        </form>
      </div>
  )
}