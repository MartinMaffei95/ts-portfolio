import { Icon } from '../Icon';

const Footer = () => {
  return (
    <div className="flex flex-col p-6 pb-2 w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-neutral-200 gap-2">
      <h3 className="section-title">Contacto</h3>
      <div className="flex gap-2 w-full basis-2/3 items-center">
        <p className=" basis-2/4">Nos encontramos por:</p>
        <div className="flex justify-around  w-full basis-2/4">
          <Icon text="LinkedIn" iconSrc="/icons/linkedin.png" />
          <Icon text="GitHub" iconSrc="/icons/008-github.png" />
        </div>
      </div>
      <button className="ghost-button border-neutral-200">
        Descarga mi Cv!
      </button>
      <div className="flex font-light text-sm justify-between text-gray-400">
        <p>Martín Maffei</p>
        <p>Rosario, Santa Fe. Argentina</p>
      </div>
    </div>
  );
};

export default Footer;
