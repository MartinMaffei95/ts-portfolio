import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import Section from '../Section/Section';
import Title from '../Title/Title';
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from 'react-icons/fa';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <Section extraCss="bg-yellow-400 text-base flex flex-col gap-4 relative">
      <Title
        firstLetterClassName=""
        restOfTextClassName="border-b-neutral-900 border-b-4 mb-0 border-t-4 pr-1 border-neutral-900"
        title="Contacto"
      />
      <div className="flex gap-2 w-full justify-around bg-yellow-400 items-center">
        <Icon>
          <FaLinkedinIn />
        </Icon>
        <Icon>
          <FaGithub />
        </Icon>
      </div>
      <button className=" flex gap-2  justify-center items-center p-2 border rounded-md font-shoulders tracking-widest font-bold text-xl border-neutral-900">
        Descarga mi Cv!
        <FaRegFilePdf />
      </button>
      <div className="flex font-bold font-poiret text-sm justify-between text-neutral-900">
        <p>Martín Maffei</p>
        <p>Rosario, Santa Fe. Argentina</p>
      </div>
    </Section>
  );
};

export default Footer;
