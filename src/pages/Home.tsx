import ExperienceComponent from '../components/ExperienceComponent/ExperienceComponent'
import Footer from '../components/FooterComponent/Footer'
import { Header } from '../components/Header/Header'
import HeroComponent from '../components/HeroComponent/HeroComponent'

import waves from '../assets/svg/svg_wave.svg'
import bigWaves from '../assets/svg/big_svg_wave.svg'
import { Hide, Image, Show } from '@chakra-ui/react'
import SkillsSection from '../components/SkillsSection/SkillsSection'
import WorkSection from '../components/WorkSection/WorkSection'
import steps from '../assets/svg/steps-layered.svg'
import bigSteps from '../assets/svg/big_steps-layered.svg'

export const Home = () => {
  return (
    <>
      <Header />

      <HeroComponent />
      <ExperienceComponent />
      <div className="w-screen relative bg-neutral-200  ">
        <Show above="md">
          <Image className="w-full" src={bigWaves} />
        </Show>
        <Hide above="md">
          <Image className="w-full " src={waves} />
        </Hide>
      </div>
      <SkillsSection />
      <div className="w-screen relative bg-neutral-200 rotate-180">
        <Show above="md">
          <Image className="w-full" src={bigWaves} />
        </Show>
        <Hide above="md">
          <Image className="w-full " src={waves} />
        </Hide>
      </div>
      <WorkSection />
      <div className="w-screen relative bg-neutral-900 ">
        <Show above="md">
          <Image className="w-full" src={bigSteps} />
        </Show>
        <Hide above="md">
          <Image className="w-full " src={steps} />
        </Hide>
      </div>
      {/* <Projects /> */}
      <Footer />
    </>
  )
}
