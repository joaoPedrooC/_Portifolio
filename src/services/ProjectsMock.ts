export interface IProjectsMock {
  id: string
  projectName: string
  projectDescription: string
}

export const frontEndProjects: Array<IProjectsMock> = [
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--1',
    projectDescription: 'projects__description--1'
  },
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--2',
    projectDescription: 'projects__description--2'
  },
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--3',
    projectDescription: 'projects__description--3'
  }
]

export const backEndProjects: Array<IProjectsMock> = [
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--4',
    projectDescription: 'projects__description--4'
  },
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--5',
    projectDescription: 'projects__description--5'
  },
  {
    id: crypto.randomUUID(),
    projectName: 'projects__title--6',
    projectDescription: 'projects__description--6'
  }
]