export interface IProjectsMock {
  projectName: string
  projectDescription: string
}

export const frontEndProjects: Array<IProjectsMock> = [
  {
    projectName: 'Contacts',
    projectDescription: 'Aplicação para cadastrar, editar, excluir e visualizar seus contatos.'
  },
  {
    projectName: 'Hamburgueria',
    projectDescription: 'Aplicação que simula a página de uma hamburgueria.'
  },
  {
    projectName: 'KenzieHub',
    projectDescription: 'Aplicação para cadastrar, deletar e visualizar suas tecnologias cadastradas.'
  }
]

export const backEndProjects: Array<IProjectsMock> = [
  {
    projectName: 'Contacts',
    projectDescription: 'Aplicação para cadastrar, editar, excluir e visualizar seus contatos.'
  },
  {
    projectName: 'Movies',
    projectDescription: 'Aplicação simula uma API Rest de uma locadora de filmes.'
  },
  {
    projectName: 'User e Courses',
    projectDescription: 'Aplicação simula uma API Rest de uma plataforma de cursos.'
  }
]