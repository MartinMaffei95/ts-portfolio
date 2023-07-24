import ExperienceComponent from '../components/ExperienceComponent/ExperienceComponent';
import Footer from '../components/FooterComponent/Footer';
import { Header } from '../components/Header/Header';
import HeroComponent from '../components/HeroComponent/HeroComponent';

import waves from '../assets/svg/svg_wave.svg';
import { Image } from '@chakra-ui/react';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import WorkSection from '../components/WorkSection/WorkSection';
import steps from '../assets/svg/steps-layered.svg';

export const Home = () => {
  return (
    <>
      <Header />

      <HeroComponent />
      <ExperienceComponent />
      <div className="w-screen relative bg-neutral-300  md:hidden">
        <Image className="w-full" src={waves} />
      </div>
      {/* <EducationComponent /> */}
      <SkillsSection />
      <div className="w-screen relative bg-neutral-300 md:hidden rotate-180">
        <Image className="w-full" src={waves} />
      </div>
      <WorkSection />
      <div className="w-screen relative bg-neutral-900 md:hidden">
        <Image className="w-full" src={steps} />
      </div>
      {/* <Projects /> */}
      <Footer />
    </>
  );
};
