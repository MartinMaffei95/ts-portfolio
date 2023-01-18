import EducationComponent from '../components/EducationComponent/EducationComponent';
import Footer from '../components/FooterComponent/Footer';
import HeroComponent from '../components/HeroComponent/HeroComponent';
import { Projects } from '../components/Projects/Projects';

export const Home = () => {
  return (
    <>
      <HeroComponent />
      <EducationComponent />
      <Projects />
      <Footer />
    </>
  );
};
