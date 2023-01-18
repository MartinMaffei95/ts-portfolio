import { TypedText } from '../Header/TypedText';
const HeroComponent = () => {
  return (
    <div id="hero" className="section-bg ">
      <div className="">
        <TypedText />
      </div>
      <div className="overflow-hidden rounded-full self-end mt-auto w-52 h-52">
        <img src="../public/profile.png" />
      </div>
    </div>
  );
};

export default HeroComponent;
