import { TypedText } from '../Header/TypedText';
const HeroComponent = () => {
  return (
    <div className="flex flex-col p-6 h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 border-b-2 border-gray-400">
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
