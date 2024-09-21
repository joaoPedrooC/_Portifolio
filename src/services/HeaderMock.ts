interface IHeaderMock {
  sectionName: string
  href: string
}

export const HeaderMock: Array<IHeaderMock> = [
  {
    sectionName: 'header__beginning',
    href: 'top'
  },
  {
    sectionName: 'header__about',
    href: '#about'
  },
  {
    sectionName: 'header__techs',
    href: '#techs'
  },
  {
    sectionName: 'header__projects',
    href: '#projects'
  },
  {
    sectionName: 'header__achievements',
    href: '#achievements'
  },
  {
    sectionName: 'header__contact',
    href: '#contact'
  }
]