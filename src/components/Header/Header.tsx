import { useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';
export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="fixed bg-slate-600 flex justify-between h-20 w-screen z-50 p-2 text-neutral-100 top-0">
        <div className="flex justify-center items-center">
          <p className="border-b-neutral-100 border-b-2 p-1 text-3xl">
            Martin Maffei
          </p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <button onClick={toggleMenu}>
            <BiDownArrow
              className={`transition ease-in ${open ? 'rotate-180' : ''}`}
            />
          </button>

          <div>
            <button className="primary-button">Contacto</button>
          </div>
        </div>
      </header>
      <div
        className={`flex absolute bg-slate-500 w-screen left-0 justify-center items-center transition-all text-neutral-100 border-b-slate-600 border-b-2 z-40  ${
          open ? 'top-20' : '-top-20'
        }`}
      >
        <ul className="flex flex-col relative text-xl p-2 ">
          <li>¿Quien soy?</li>
          <li>Formacion</li>
          <li>Proyectos</li>
          <li>Descargá mi cv</li>
        </ul>
      </div>
    </>
  );
};
