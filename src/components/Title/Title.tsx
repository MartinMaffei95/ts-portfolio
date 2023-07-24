import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import useTitle from '../../Hooks/useTitles';
import { CSSProperties } from '@emotion/serialize';
import { twMerge } from 'tailwind-merge';
type Props = {
  title: string;
  firstLetterClassName?: string;
  restOfTextClassName?: string;
  id?: string;
};

const Title: FC<Props> = ({
  title,
  id,
  firstLetterClassName = 'text-yellow-400',
  restOfTextClassName = 'border-b-2 border-b-yellow-500',
}) => {
  const sliceTitle = useTitle(title);

  return (
    <Heading
      id={id}
      fontFamily={''}
      className="font-shoulders text-4xl uppercase  font-semibold relative z-20 flex items-center "
    >
      <span className={twMerge(` text-5xl`, firstLetterClassName)}>
        {sliceTitle[0]}
      </span>
      {!!sliceTitle[1] ? (
        <span
          className={twMerge(
            `border-b-2 mb-2 border-b-yellow-500`,
            restOfTextClassName
          )}
        >
          {sliceTitle[1]}
        </span>
      ) : null}
    </Heading>
  );
};

export default Title;
