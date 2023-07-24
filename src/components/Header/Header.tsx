import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useResize } from '../../Hooks/useResize';
import { Image } from '@chakra-ui/react';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Icon from '../Icon/Icon';

export const Header = () => {
  const { state } = useLocation();
  const { targetId } = state || {};
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const goTo = (url: string, section: string) => {
    navigate(`${url}`, { state: { targetId: `${section}` } });
    toggleMenu();
  };

  const pdfLink = useRef<HTMLAnchorElement>(null!);
  const { actualWidth } = useResize();
  const navigate = useNavigate();
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);
  return (
    <>
      <header className=" flex flex-col z-50   p-2  bg-yellow-400 w-screen">
        <div className="text-center  font-poiret text-lg tracking-wider md:text-2xl ">
          Martin Maffei
        </div>
        <div
          className="flex justify-center items-center gap-2 w-full text-2xl 
         [&>div]:w-full [&>div]:py-2  [&>div]:border-black 
         [&>div]:border-t [&>div]:border-b 
         [&>div]:flex [&>div]:justify-center [&>div]:md:justify-around "
        >
          <div>
            {/* <Icon>
              <BsFillFileEarmarkPersonFill />
            </Icon> */}
            <a href="#contact" className="text-sm md:text-xl">
              Contactame
            </a>
          </div>
          <Image
            boxSize={{ base: '80px', md: '200px' }}
            objectFit="cover"
            objectPosition="top"
            className="z-20 self-end rounded-full aspect-square"
            src="/profile.png"
          />
          <div className=" flex gap-2">
            <Icon
              As={'a'}
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://www.linkedin.com/in/martinmaffei95/"
            >
              <FaLinkedinIn />
            </Icon>
            <Icon
              As="a"
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://github.com/MartinMaffei95"
            >
              <FaGithub />
            </Icon>
          </div>
        </div>
      </header>
    </>
  );
};
