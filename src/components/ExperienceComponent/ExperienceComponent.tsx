import { FC } from 'react'
import { Heading } from '@chakra-ui/react'
import Section from '../Section/Section'
type Props = {}
const ExperienceComponent: FC<Props> = ({}) => {
  return (
    <Section extraCss="bg-neutral-900 h-screen text-neutral-100">
      <Heading className="font-shoulders text-4xl uppercase font-semibold relative z-20">
        Experiencia
      </Heading>
      <div></div>
    </Section>
  )
}

export default ExperienceComponent
