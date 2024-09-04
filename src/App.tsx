import 'animate.css'
import './styles/index.scss'

import { DefaultTemplate } from './components/DefaultTemplate/DefaultTemplate'
import { BannerSection } from './components/BannerSection/BannerSection'
import { AboutSection } from './components/AboutSection/AboutSection'
import { TechnologiesSection } from './components/TechnologiesSection/TechnologiesSection'

export const App = () => {
  return (
    <DefaultTemplate>
      <BannerSection />
      <AboutSection />
      <TechnologiesSection />
    </DefaultTemplate>
  )
}
