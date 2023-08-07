import { Show, Tooltip } from '@chakra-ui/react'
import Section from '../Section/Section'
import Title from '../Title/Title'
import { skillIcons } from './skills-icons.config'
import Highlight from '../Higlight/Highlight'
import { useTranslation } from 'react-i18next'

const SkillsSection = () => {
  const [translate] = useTranslation('global')

  return (
    <Section extraCss="flex flex-col gap-4 bg-neutral-200">
      <div className="flex  items-baseline gap-4">
        <Title title={translate('skillsSection.title.title')} />
      </div>
      <div className="sm:flex flex-col ">
        <section className="[&>p]:font-normal md:text-base text-sm [&>p]:leading-relaxed flex flex-col sm:basis-2/3 sm:px-12 text-justify pb-4">
          <Highlight
            focus={translate('skillsSection.paragraph1.focus')}
            colored={translate('skillsSection.paragraph1.colored')}
          >
            {translate('skillsSection.paragraph1.text')}
          </Highlight>
          <Highlight
            focus={translate('skillsSection.paragraph2.focus')}
            colored={translate('skillsSection.paragraph2.colored')}
          >
            {translate('skillsSection.paragraph2.text')}
          </Highlight>
          <Highlight
            focus={translate('skillsSection.paragraph3.focus')}
            colored={translate('skillsSection.paragraph3.colored')}
          >
            {translate('skillsSection.paragraph3.text')}
          </Highlight>
        </section>

        <div className="min-h-screen  flex  justify-center p-8  ">
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
  )
}

export default SkillsSection
