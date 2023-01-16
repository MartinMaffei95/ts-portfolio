import { Carrousel } from '../Carrousel/Carrouse';

const EducationComponent = () => {
  // bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700
  return (
    <div className="flex flex-col p-6 h-full bg-red-500">
      <Carrousel />
    </div>
  );
};

export default EducationComponent;
