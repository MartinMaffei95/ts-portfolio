import { Show, Tooltip } from '@chakra-ui/react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import { skillIcons } from './skills-icons.config';

const SkillsSection = () => {
  return (
    <Section>
      <div className="flex  items-baseline gap-4">
        {/* <Title title="Formacion" />
        <span className="font-shoulders text-4xl">&</span> */}
        <Title title="Skills" />
      </div>
      <div className="md:flex flex-col">
        <Show above="md">
          <div className="bg-red-500 w-full">asd</div>
        </Show>
        <div className="min-h-screen bg-neutral-300 flex items-center justify-center p-8  ">
          <div
            className="w-full 
            grid grid-cols-2 gap-4 auto-rows-fr
            md:grid-cols-6  md:grid-rows-2 
      [&>button]:border [&>button]:bg-opacity-80
      [&>button]:backdrop-blur
      [&>button]:rounded-lg

    
    [&>button]:duration-200
    [&>button]:shadow-inner
    [&>button]:shadow-neutral-300
    [&>button]:from-neutral-200
[&>button]:to-neutral-400
[&>button]:text-neutral-600

    

      [&>button]:bg-gradient-to-tr
    
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
