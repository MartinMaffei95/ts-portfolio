import EducationComponent from '../components/EducationComponent/EducationComponent';
import ExperienceComponent from '../components/ExperienceComponent/ExperienceComponent';
import Footer from '../components/FooterComponent/Footer';
import { Header } from '../components/Header/Header';
import HeroComponent from '../components/HeroComponent/HeroComponent';
import { Projects } from '../components/Projects/Projects';

import waves from '../assets/svg/svg_wave.svg';
import { Image } from '@chakra-ui/react';
import SkillsSection from '../components/SkillsSection/SkillsSection';

export const Home = () => {
  return (
    <>
      <Header />

      <HeroComponent />
      <ExperienceComponent />
      <div className="w-screen relative bg-neutral-300 ">
        <Image src={waves} />
      </div>
      {/* <EducationComponent /> */}
      <SkillsSection />
      <Projects />
      <Footer />
    </>
  );
};
