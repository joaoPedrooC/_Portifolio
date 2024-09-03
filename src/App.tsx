import 'animate.css'
import './styles/index.scss'

import { DefaultTemplate } from './components/DefaultTemplate/DefaultTemplate'
import { BannerSection } from './components/BannerSection/BannerSection'

export const App = () => {
  return (
    <DefaultTemplate>
      <BannerSection />
    </DefaultTemplate>
  )
}
