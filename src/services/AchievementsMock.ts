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
    achievementTitle: '20ª Maratona Regional de Programação',
    achievementDescription: 'Participei da 20ª Maratona Regional de Programação em 2022, onde conquistei uma das medalhas de bronze do nível médio (competição entre os estudantes do 1° ao 3° ano do ensino médio)',
    buttonContent: 'Saiba mais sobre a Maratona',
    buttonUrl: 'https://algar-telecom-fic.github.io/websiteMaratonaRegional/',
    image: maratonaRegional
  },
  {
    achievementTitle: 'Maratona Tech',
    achievementDescription: 'Participei da primeira edição da Maratona Tech em 2022, conquistando a medalha de ouro.',
    buttonContent: 'Saiba mais sobre a Maratona',
    buttonUrl: 'https://acervodenoticias.educacao.mg.gov.br/politica-de-privacidade/story/12150-aluno-da-rede-estadual-de-minas-e-premiado-em-competicao-tecnologica-maratona-tech',
    image: maratonaTech
  },
  {
    achievementTitle: 'Formação Full Stack',
    achievementDescription: 'Como premiação da Maratona Tech, tive a oportunidade de estudar desenvolvimento web Full Stack na Kenzie Academy Brasil. Entre Março de 2023 e Março de 2024 me dediquei aos estudos, aprendendo diversas tecnologias.',
    image: certificadoKenzie
  },
  {
    achievementTitle: 'Reconhecimento - Aluno destaque módulo de comunicação',
    achievementDescription: 'Participei do programa Talentos de Futuro em 2021, em que fui eleito aluno destaque no módulo de comunicação, além de desenvolver habilidades importantes, como trabalho em equipe, ética e inovação.',
    image: talentosDeFuturo
  },
]