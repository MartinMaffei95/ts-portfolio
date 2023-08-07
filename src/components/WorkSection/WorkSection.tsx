import Section from '../Section/Section'
import Title from '../Title/Title'
import { works } from '../../data/work'
import SimpleBadge from '../Generics/SimpleBadge/SimpleBadge'
import { useTranslation } from 'react-i18next'
import { Language } from '../../interfaces'

const WorkSection = () => {
  const [translate, i18n] = useTranslation('global')

  return (
    <Section extraCss="bg-neutral-900 text-neutral-100 flex flex-col gap-4 ">
      <div className="flex gap-2 items-center">
        <Title title={translate('lastWorkSection.title.title')} />
        <SimpleBadge text={translate('lastWorkSection.title.badge')} />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:grid md:grid-cols-2 md:auto-row-auto ">
        {works[i18n.language as Language]?.slice(0, 3).map((job, index) => (
          <>
            <div className="text-xl bg-neutral-900 md:bg-neutral-700 md:rounded-md md:p-4 md:last:col-span-2 md:last:w-[50%] md:last:place-self-center ">
              <h3>{job.title}</h3>
              <p className="text-base font-dosis font-normal px-2">
                {job.description}
              </p>
              <h4 className="font-semibold text-base text-yellow-400 my-2">
                {translate('lastWorkSection.tasks')}
              </h4>
              <ul className="text-base font-thin tracking-wider list-disc  px-8 flex flex-col gap-2">
                {job.task_realized.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </Section>
  )
}

export default WorkSection
