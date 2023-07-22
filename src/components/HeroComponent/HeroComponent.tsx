import { Image, Heading, Divider } from '@chakra-ui/react';
import { useResize } from '../../Hooks/useResize';
import { TypedText } from '../Header/TypedText';

import topSvg from '../../assets/svg/top-corner.svg';
import bottomSvg from '../../assets/svg/bottom-corner.svg';
const HeroComponent = () => {
  const { actualWidth } = useResize();
  return (
    <div
      id="hero"
      className="bg-neutral-300 text-black h-full relative flex flex-col 
      justify-center gap-6 text-center overflow-hidden p-4"
    >
      {/* <span className="bg-yellow-400 flex h-28 w-[100vh] absolute top-0 -right-10 z-10 rotate-12 -translate-y-[50%]  " /> */}
      {/* <span className="bg-yellow-400 flex h-28  w-[100vh] absolute bottom-0 -left-10 z-1h0 rotate-12 translate-y-[50%] " /> */}
      <Image src={topSvg} className="absolute left-0 top-0 w-screen " />
      <Heading className="font-shoulders  text-7xl uppercase font-bold relative text-neutral-900 z-20">
        Front-end developer
      </Heading>

      <span className="flex self-center w-full h-[2px] rounded bg-yellow-400" />
      <p className="z-10 tracking-wider leading-relaxed">
        Soy un apasionado desarrollador Full Stack especializado en el
        desarrollo Front-end. Mi experiencia se centra en la creación de
        soluciones web eficientes y atractivas, combinando tecnologías modernas
        para brindar experiencias de usuario excepcionales.
      </p>
      {/* <Image
        boxSize="250px"
        objectFit="cover"
        className="z-20 self-end rounded"
        src="/profile.png"
      /> */}
      <Image
        src={bottomSvg}
        className="absolute left-0 bottom-0 w-screen rotate-180"
      />
    </div>
  );
};

export default HeroComponent;
