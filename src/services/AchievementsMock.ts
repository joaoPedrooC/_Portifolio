import maratonaRegional from '../assets/maratonaRegional.png'
import maratonaTech from '../assets/maratonaTech.png'
import certificadoKenzie from '../assets/certificadoKenzie.png'
import talentosDeFuturo from '../assets/talentosDeFuturo.png'

export interface IAchievementsMock {
  achievementTitle: string
  achievementDescription: string
  buttonContent?: string
  buttonUrl?: string
  image: string
}

export const AchievementsMock: Array<IAchievementsMock> = [
  {
    achievementTitle: 'achievements__title--1',
    achievementDescription: 'achievements__description--1',
    buttonContent: 'button__marathon--content',
    buttonUrl: 'https://algar-telecom-fic.github.io/websiteMaratonaRegional/',
    image: maratonaRegional
  },
  {
    achievementTitle: 'achievements__title--2',
    achievementDescription: 'achievements__description--2',
    buttonContent: 'button__marathon--content',
    buttonUrl: 'https://acervodenoticias.educacao.mg.gov.br/politica-de-privacidade/story/12150-aluno-da-rede-estadual-de-minas-e-premiado-em-competicao-tecnologica-maratona-tech',
    image: maratonaTech
  },
  {
    achievementTitle: 'achievements__title--3',
    achievementDescription: 'achievements__description--3',
    image: certificadoKenzie
  },
  {
    achievementTitle: 'achievements__title--4',
    achievementDescription: 'achievements__description--4',
    image: talentosDeFuturo
  },
]