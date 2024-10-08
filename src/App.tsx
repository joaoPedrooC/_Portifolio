import 'animate.css'
import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';

import { DefaultTemplate } from './components/DefaultTemplate/DefaultTemplate'
import { BannerSection } from './components/BannerSection/BannerSection'
import { AboutSection } from './components/AboutSection/AboutSection'
import { TechnologiesSection } from './components/TechnologiesSection/TechnologiesSection'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'
import { AchievementsSection } from './components/AchievementsSection/AchievementsSection'
import { ContactSection } from './components/ContactSection/ContactSection'

import './i18n'

export const App = () => {
  return (
    <DefaultTemplate>
      <BannerSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </DefaultTemplate>
  )
}
