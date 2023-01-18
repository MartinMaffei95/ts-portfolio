import { useRef, useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useResize } from '../../Hooks/useResize';
export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const pdfLink = useRef<HTMLAnchorElement>(null!);
  const { actualWidth } = useResize();
  const navigate = useNavigate();
  return (
    <>
      <header className="fixed flex w-full h-20 z-50 top-0">
        <div className="bg-slate-600 flex justify-between w-full h-full z-50 p-2 text-neutral-100">
          <div
            onClick={() => {
              setOpen(false);
              navigate('/');
            }}
            className="flex justify-center items-center "
          >
            <p className="border-b-neutral-100 border-b-2 p-1 text-3xl">
              Martin Maffei
            </p>
          </div>

          <div className="flex justify-center items-center gap-2">
            {actualWidth > 768 ? (
              <ul className="flex relative text-lg items-end self-end gap-2">
                <a href="#hero" onClick={toggleMenu}>
                  <li>¿Quien soy?</li>
                </a>
                <a href="#formation" onClick={toggleMenu}>
                  <li>Formacion</li>
                </a>
                <a href="#projects" onClick={toggleMenu}>
                  <li>Proyectos</li>
                </a>

                <a
                  className="hidden"
                  ref={pdfLink}
                  href="/pdf/CvMartinMaffei160622.pdf"
                  target="_blank"
                  rel="me"
                >
                  a
                </a>

                <a
                  onClickCapture={() => {
                    pdfLink.current.click();
                  }}
                  href="#footer"
                  onClick={toggleMenu}
                >
                  <li>Descargá mi cv</li>
                </a>
              </ul>
            ) : (
              <button onClick={toggleMenu}>
                <BiDownArrow
                  className={`transition ease-in ${open ? 'rotate-180' : ''}`}
                />
              </button>
            )}

            <div>
              <button
                onClick={() => {
                  navigate('contact');
                }}
                className="primary-button"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
        {actualWidth > 768 ? null : (
          <div
            className={`flex absolute bg-slate-500 w-screen left-0 justify-center items-center transition-all text-neutral-100 border-b-slate-600 border-b-2 z-20  ${
              open ? 'top-20' : '-top-20'
            }`}
          >
            <ul className="flex flex-col relative text-xl p-2 ">
              <a href="#hero" onClick={toggleMenu}>
                <li>¿Quien soy?</li>
              </a>
              <a href="#formation" onClick={toggleMenu}>
                <li>Formacion</li>
              </a>
              <a href="#projects" onClick={toggleMenu}>
                <li>Proyectos</li>
              </a>

              <a
                className="hidden"
                ref={pdfLink}
                href="/pdf/CvMartinMaffei160622.pdf"
                target="_blank"
                rel="me"
              >
                a
              </a>

              <a
                onClickCapture={() => {
                  pdfLink.current.click();
                }}
                href="#footer"
                onClick={toggleMenu}
              >
                <li>Descargá mi cv</li>
              </a>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
