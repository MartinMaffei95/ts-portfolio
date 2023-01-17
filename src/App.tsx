import EducationComponent from './components/EducationComponent/EducationComponent';
import LayoutComponent from './components/Layout/LayoutComponent';
import HeroComponent from './components/HeroComponent/HeroComponent';
import { Projects } from './components/Projects/Projects';
import Footer from './components/FooterComponent/Footer';
import ModalState from './context/Modal/ModalState';

function App() {
  return (
    <ModalState>
      <LayoutComponent>
        <HeroComponent />
        <EducationComponent />
        <Projects />
        <Footer />
      </LayoutComponent>
    </ModalState>
  );
}

export default App;
