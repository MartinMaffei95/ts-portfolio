import {
  Image,
  Heading,
  Grid,
  GridItem,
  ResponsiveValue,
} from '@chakra-ui/react'
import { useResize } from '../../Hooks/useResize'
import { useTranslation } from 'react-i18next'

import topSvg from '../../assets/svg/top-corner.svg'
import bottomSvg from '../../assets/svg/bottom-corner.svg'
const HeroComponent = () => {
  const [translate] = useTranslation('global')

  const { actualWidth } = useResize()
  return (
    <div
      id="section-hero"
      className="bg-neutral-300 text-black relative flex flex-col 
      justify-center gap-6 text-center overflow-hidden p-4
      md:flex-row md:items-center md:justify-around md:px-12 md:gap-
      
      "
    >
      <Image src={topSvg} className="absolute left-0 top-0 w-screen " />
      <div className="flex flex-col gap-6 md:basis-1/3">
        <Heading
          fontFamily={''}
          className="font-shoulders  text-9xl uppercase font-bold relative text-neutral-900 z-20"
        >
          Front-end developer
        </Heading>

        <span className="flex  z-10 self-center w-full h-[2px] rounded bg-yellow-700 " />
        <p className="z-10 tracking-wider leading-relaxed">
          {translate('heroSection.text')}
        </p>
      </div>

      {/* <Show above="md"> */}
      <Grid
        templateColumns={{
          base: 'repeat(2,1fr)',
          sm: 'repeat(3,1fr)',
          md: 'repeat(2,1fr)',
        }}
        className="z-20  md:basis-1/3 w-full gap-4 "
      >
        <Stat
          col={{ base: 'span 2', sm: 'span 1', md: 'span 2' }}
          helpText={translate('heroSection.stats.years.auxiliar')}
          label={translate('heroSection.stats.years.main')}
          statNumber="+1"
        />
        <Stat
          label={translate('heroSection.stats.projects')}
          statNumber="+20"
        />
        <Stat label={translate('heroSection.stats.clients')} statNumber="+10" />
      </Grid>
      {/* </Show> */}
      <Image
        src={bottomSvg}
        className="absolute left-0 bottom-0 w-screen rotate-180"
      />
    </div>
  )
}

export default HeroComponent

type Props = {
  label: string
  statNumber: string
  helpText?: string
  col?: ResponsiveValue<any> | undefined
  row?: ResponsiveValue<any> | undefined
}
const Stat = ({ label, statNumber, helpText, col, row }: Props) => {
  return (
    <GridItem
      gridColumn={col}
      gridRow={row}
      className="flex flex-col  p-2 rounded shadow-inner shadow-neutral-100 bg-neutral-200 bg-opacity-50 "
    >
      <p className="font-poiret  flex items-baseline justify-center gap-1 ">
        <span className="text-6xl font-shoulders">{statNumber}</span>
        {helpText ? <span className="font-bold">{helpText}</span> : null}
      </p>
      <p className="">{label}</p>
    </GridItem>
  )
}
