import { Heading } from '@chakra-ui/react'
import { FC } from 'react'
import useTitle from '../../Hooks/useTitles'
import { CSSProperties } from '@emotion/serialize'

type Props = {
  title: string
  firstLetterClassName?: string
  restOfTextClassName?: string
}

const Title: FC<Props> = ({
  title,
  firstLetterClassName = 'text-yellow-400',
  restOfTextClassName = 'border-b-2 border-b-yellow-500',
}) => {
  const sliceTitle = useTitle(title)

  return (
    <Heading
      fontFamily={''}
      className="font-shoulders text-4xl uppercase  font-semibold relative z-20 flex items-center "
    >
      <span className={` text-5xl ${firstLetterClassName}`}>
        {sliceTitle[0]}
      </span>
      {!!sliceTitle[1] ? (
        <span className={` ${restOfTextClassName}`}>{sliceTitle[1]}</span>
      ) : null}
    </Heading>
  )
}

export default Title
