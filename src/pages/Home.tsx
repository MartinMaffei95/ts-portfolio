import EducationComponent from '../components/EducationComponent/EducationComponent'
import ExperienceComponent from '../components/ExperienceComponent/ExperienceComponent'
import Footer from '../components/FooterComponent/Footer'
import HeroComponent from '../components/HeroComponent/HeroComponent'
import { Projects } from '../components/Projects/Projects'

export const Home = () => {
  return (
    <>
      <HeroComponent />
      <ExperienceComponent />
      <EducationComponent />
      <Projects />
      <Footer />
    </>
  )
}
