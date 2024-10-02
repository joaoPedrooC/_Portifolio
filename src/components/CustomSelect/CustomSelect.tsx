import { ChangeEvent } from 'react'
import i18n from '../../i18n';

import { IoIosArrowDown } from 'react-icons/io';
import { IoLanguage } from 'react-icons/io5';

import styles from './styles.module.scss'

export const CustomSelect = () => {
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(e.target!.value)
    document.querySelectorAll('#lang').forEach(lang => lang.innerHTML = e.target!.value.toUpperCase())
  }

  return (
    <div className={styles.select__container}>
      <IoLanguage />
      <span className='text text__small--2' id='lang'>{i18n.language.toUpperCase()}</span>
      <IoIosArrowDown />

        <div className={styles.form__container}>
          <form className={styles.select__optionsContainer}>
            <input type="radio" name="languageValue" id="PT" value="pt" onChange={changeInputValue} />
            <label htmlFor="PT" className='text text__small-1 font__black'>Português</label>
            <input type="radio" name="languageValue" id="EN" value="en" onChange={changeInputValue} />
            <label htmlFor="EN" className='text text__small-1 font__black'>English</label>
          </form>
        </div>
      </div>
  )
}