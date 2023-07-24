import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import Section from '../Section/Section';
import Title from '../Title/Title';
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from 'react-icons/fa';
import Icon from '../Icon/Icon';
import { ContactForm } from '../Contact/ContactForm';
import Divider from '../Divider/Divider';

const Footer = () => {
  return (
    <Section extraCss="bg-yellow-400 text-base flex flex-col gap-4 relative">
      <Title
        id="contact"
        firstLetterClassName=""
        restOfTextClassName="border-b-neutral-900 border-b-4 mb-0 border-t-4 pr-1 border-neutral-900"
        title="Contacto"
      />
      <div className="flex flex-col gap-2 w-full justify-around bg-yellow-400 items-center">
        <section className="flex w-full">
          <ContactForm />
        </section>
        <section className="flex p-2 items-center gap-8 bg-yellow-400 w-screen justify-center">
          <Divider extraCss="bg-neutral-900 " />
          <Icon
            As={'a'}
            target="_blank"
            referrerPolicy="no-referrer"
            href="/pdf/MartinMaffeiCV.pdf"
          >
            Curriculum
            <FaRegFilePdf />
          </Icon>
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
          <Divider extraCss="bg-neutral-900 " />
        </section>
      </div>

      <div className="flex font-bold font-poiret text-sm justify-between text-neutral-900">
        <p>Martín Maffei</p>
        <p>Rosario, Santa Fe. Argentina</p>
      </div>
    </Section>
  );
};

export default Footer;
