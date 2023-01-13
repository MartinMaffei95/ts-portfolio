import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(true);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="bg-slate-600 flex justify-between h-16 w-screen fixed z-10 p-2">
        <div className="flex justify-center items-center">
          <p className="border-b-neutral-100 border-b-2 p-1">Martin Maffei</p>
        </div>

        <div className="flex justify-center items-center">
          <button onClick={toggleMenu}>9</button>

          <div>
            <button className="bg-neutral-100 text-black p-2 font-bold">
              Contacto
            </button>
          </div>
        </div>
      </header>
      <div
        className={`flex absolute bg-slate-500 w-screen left-0 justify-center items-center transition-all ${
          open ? 'top-16' : '-top-16'
        }`}
      >
        <ul className="flex flex-col relative">
          <li>¿Quien soy?</li>
          <li>Formacion</li>
          <li>Proyectos</li>
          <li>Descargá mi cv</li>
        </ul>
      </div>
    </>
  );
};
