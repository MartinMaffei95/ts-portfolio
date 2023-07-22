import Section from '../Section/Section';
import Title from '../Title/Title';
import { skillIcons } from './skills-icons.config';

const SkillsSection = () => {
  return (
    <Section>
      <div className="flex  items-baseline gap-4">
        <Title title="Formacion" />
        <span className="font-shoulders text-4xl">&</span>
        <Title title="Skills" />
      </div>

      <div className="min-h-screen bg-neutral-300 flex items-center justify-center p-8  ">
        <div
          className="w-full grid grid-cols-2 gap-4
        auto-rows-fr
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
            <button
              key={skill.skillName}
              className={`rounded-t flex items-center  justify-center   ${skill.getStyle()}`}
            >
              {skill.icon}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
