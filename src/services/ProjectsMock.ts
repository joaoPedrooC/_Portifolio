export interface IProjectsMock {
  id: string
  projectName: string
  projectDescription: string
  sourceCode: string
  deployUrl?: string
}

export const frontEndProjects: Array<IProjectsMock> = [
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--1',
    projectDescription: 'projects__description--1',
    sourceCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/Desafio-FullStack-frontend-joaoPedrooC',
    deployUrl: 'https://contacts-olive.vercel.app/'
  },
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--2',
    projectDescription: 'projects__description--2',
    sourceCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/entrega-s3-hamburgueria-joaoPedrooC',
    deployUrl: 'https://hamburgueria-kenzie-joaopedroc.vercel.app/'
  },
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--3',
    projectDescription: 'projects__description--3',
    sourceCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-joaoPedrooC',
    deployUrl: 'https://kenzie-hub-joaopedrooc.vercel.app/'
  }
]

export const backEndProjects: Array<IProjectsMock> = [
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--4',
    projectDescription: 'projects__description--4',
    sourceCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/Desafio-FullStack-backend-joaoPedrooC'
  },
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--5',
    projectDescription: 'projects__description--5',
    sourceCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/m4-movies-typeorm-joaoPedrooC'
  },
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--6',
    projectDescription: 'projects__description--6',
    sourceCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/crud_admin_m4-joaoPedrooC'
  }
]