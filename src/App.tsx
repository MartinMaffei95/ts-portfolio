import EducationComponent from './components/EducationComponent/EducationComponent';
import LayoutComponent from './components/Header/Layout/LayoutComponent';
import HeroComponent from './components/HeroComponent/HeroComponent';

function App() {
  return (
    <LayoutComponent>
      <HeroComponent />
      <EducationComponent />
    </LayoutComponent>
  );
}

export default App;
