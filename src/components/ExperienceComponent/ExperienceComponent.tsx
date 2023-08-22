import { FC } from 'react'
import { Image } from '@chakra-ui/react'
import Section from '../Section/Section'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BiBuildings } from 'react-icons/bi'
import { experiences } from '../../data/experience'
import Title from '../Title/Title'
import topSvg from '../../assets/svg/top-corner.svg'
import SimpleBadge from '../Generics/SimpleBadge/SimpleBadge'
import { Language } from '../../interfaces'
import { useTranslation } from 'react-i18next'

type Props = {}

const ExperienceComponent: FC<Props> = ({}) => {
  const [translate, i18n] = useTranslation('global')

  return (
    <Section
      sectionId="section-experience"
      extraCss="bg-neutral-900 relative  min-h-screen text-neutral-100 gap-4 flex flex-col  "
    >
      <Image
        src={topSvg}
        className="absolute left-0 top-0 w-screen brightness-50  "
      />

      <div className="flex gap-2 items-center z-10">
        <Title title={translate('experienceSection.title.title')} />
        <SimpleBadge text={translate('experienceSection.title.badge')} />
      </div>
      {experiences[i18n.language as Language]?.map((exp, index) => (
        <>
          <article className="text-sm font-normal md:px-12 z-10 ">
            <header className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{exp?.position}</h3>
              <h4 className="text-base font-medium flex gap-1 items-baseline">
                <BiBuildings className="text-base" />
                {exp?.company_name}
              </h4>
              <div className="flex gap-1 items-baseline ">
                <FaRegCalendarAlt className="text-base" />

                <span>
                  {exp?.init_date} -{' '}
                  {!!exp?.end_date ? exp?.end_date : 'ACTUALIDAD'}
                </span>
              </div>
            </header>
            <section>
              <ul className="list-disc font-base  px-8 [&>li]:py-1">
                {exp?.job_tasks?.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </section>
          </article>
          {index + 1 < experiences[i18n.language as Language]?.length ? (
            <span className="flex self-center w-[50%] h-[2px] rounded bg-yellow-400" />
          ) : null}
        </>
      ))}
    </Section>
  )
}

export default ExperienceComponent
