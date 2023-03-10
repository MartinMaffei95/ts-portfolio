import { Icon } from '../Icon';

const Footer = () => {
  return (
    <div className="flex flex-col p-6 pb-2 w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-neutral-200 gap-2">
      <h3 id="footer" className="section-title">
        Contacto
      </h3>
      <div className="flex gap-2 w-full basis-2/3 items-center">
        <p className=" basis-2/4">Nos encontramos por:</p>
        <div className="flex justify-around  w-full basis-2/4">
          <Icon
            text="LinkedIn"
            containerClassname="icon-module-style"
            iconSrc="/icons/linkedin.png"
            link="https://www.linkedin.com/in/martinmaffei95/"
            rel="me"
          />
          <Icon
            text="GitHub"
            containerClassname="icon-module-style"
            iconSrc="/icons/008-github.png"
            link="https://github.com/MartinMaffei95"
            rel="me"
          />
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
