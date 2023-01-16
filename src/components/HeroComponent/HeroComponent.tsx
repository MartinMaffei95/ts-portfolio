import { TypedText } from '../Header/TypedText';
const HeroComponent = () => {
  return (
    <div className="flex flex-col p-6 h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 ">
      <div className="">
        <TypedText />
      </div>
      <div className="overflow-hidden rounded-full w-32 h-32 self-end mt-auto">
        <img src="../public/profile.png" />
      </div>
    </div>
  );
};

export default HeroComponent;
