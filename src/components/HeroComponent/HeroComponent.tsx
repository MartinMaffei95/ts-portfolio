import { useResize } from '../../Hooks/useResize';
import { TypedText } from '../Header/TypedText';
const HeroComponent = () => {
  const { actualWidth } = useResize();
  return (
    <div id="hero" className="section-bg ">
      <div className="">
        <TypedText />
      </div>
      <div
        className={`overflow-hidden rounded-full self-end mt-auto  ${
          actualWidth > 768 ? 'w-72 h-72' : 'w-52 h-52'
        }`}
      >
        <img src="/profile.png" />
      </div>
    </div>
  );
};

export default HeroComponent;
