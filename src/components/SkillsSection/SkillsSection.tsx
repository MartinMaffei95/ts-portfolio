import { Show, Tooltip } from '@chakra-ui/react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import { skillIcons } from './skills-icons.config';

const SkillsSection = () => {
  return (
    <Section extraCss="flex flex-col gap-4 bg-neutral-300">
      <div className="flex  items-baseline gap-4">
        {/* <Title title="Formacion" />
        <span className="font-shoulders text-4xl">&</span> */}
        <Title title="Skills" />
      </div>
      <div className="sm:flex flex-col ">
        <section className="[&>p]:font-normal md:text-base text-sm [&>p]:leading-relaxed flex flex-col sm:basis-2/3">
          <p>
            Como desarrollador,{' '}
            <span className="text-yellow-600">
              me especializo en el frontend{' '}
            </span>
            , donde utilizo React y TypeScript. Además, tengo{' '}
            <span className="text-yellow-600">
              experiencia en el desarrollo backend
            </span>{' '}
            con Node.
          </p>
          <p>
            Sin embargo, mi conocimiento se extiende más allá de estas
            tecnologías, también poseo{' '}
            <span className="text-yellow-600">
              bases sólidas en diversos lenguajes y herramientas de desarrollo.
            </span>
          </p>
          <p>
            Esta amplia gama de conocimientos me brinda una visión más completa
            y un enfoque más versátil en el proceso de desarrollo. Gracias a
            ello puedo abordar los proyectos de manera integral y{' '}
            <span className="text-neutral-100  bg-yellow-600 px-1 -">
              crear soluciones más completas y eficientes
            </span>{' '}
            para las necesidades de los usuarios.
          </p>
        </section>

        <div className="min-h-screen bg-neutral-300 flex items-center justify-center p-8  ">
          <div
            className="w-full 
            grid grid-cols-4 gap-4 auto-rows-[minmax(0,_.5fr)]
            sm:grid-cols-[repeat(12,_minmax(0,_1fr));]  sm:grid-rows-2  sm:auto-rows-[minmax(0,_.5fr)]
            md:grid-cols-[repeat(10,_minmax(0,_1fr));]  md:grid-rows-2  md:auto-rows-[minmax(0,_.5fr)]
      [&>button]:border [&>button]:bg-opacity-80
      [&>button]:backdrop-blur
      [&>button]:rounded-lg
    
    [&>button]:duration-200
    [&>button]:shadow-inner
    [&>button]:shadow-neutral-300
    [&>button]:from-neutral-200
[&>button]:to-neutral-400
[&>button]:text-neutral-600


    

    
        relative
      "
          >
            {skillIcons.map((skill) => (
              <Tooltip
                fontSize="md"
                className="bg-neutral-700 py-1 px-2 text-neutral-100"
                label={skill?.skillName}
              >
                <button
                  key={skill.skillName}
                  className={`rounded-t flex items-center  justify-center   ${skill.getStyle()}`}
                >
                  {skill.icon}
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
