import { Dispatch, SetStateAction, useState } from "react"
import { IProjectsMock } from "../../../services/ProjectsMock"

import styles from './styles.module.scss'
import { useTranslation } from "react-i18next"
import { PiGithubLogoLight } from "react-icons/pi"
import { CgVercel } from "react-icons/cg"

interface IProjectsModalProps {
  project: IProjectsMock
  setOpen: Dispatch<SetStateAction<null | IProjectsMock>>
}

export const ProjectsModal = ({ project, setOpen }: IProjectsModalProps) => {
  const [closing, setClosing] = useState<boolean>(false)
  
  const { t } = useTranslation()

  const handleClose = () => {
    setClosing(true)

    setTimeout(() => { // Tempo para animação
      setClosing(false)
      setOpen(null)
    }, 500);
  }
  return (
    <div className={styles.modal__container}>
      <div className={`${styles.modal__controller} animate__animated ${!closing ? 'animate__fadeInDown' : ''} ${closing ? 'animate__fadeOutDown' : ''}`}>
        <button className='text text__medium' type="button" onClick={handleClose}>X</button>
        <div>
          <div className={styles.modal__content}>
            <h4 className="text text__big--1">{t(project.projectName)}</h4>
            <p>{t(project.projectDescription)}</p>
          </div>
          <div className={styles.modal__links}>
            <a href="" className="button__links text text__small--1">
              <PiGithubLogoLight />
              {t('projects__button--code')}
            </a>
            <a href="" className="button__links text text__small--1">
              <CgVercel />
              {t('projects__button--deploy')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}