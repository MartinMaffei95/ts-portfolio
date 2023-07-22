import { Heading } from '@chakra-ui/react';
import React from 'react';
import useTitle from '../../Hooks/useTitles';

const Title = ({ title }: { title: string }) => {
  const sliceTitle = useTitle(title);

  return (
    <Heading className="font-shoulders text-4xl uppercase  font-semibold relative z-20 flex items-center">
      <span className="text-yellow-400 text-5xl">{sliceTitle[0]}</span>
      {!!sliceTitle[1] ? (
        <span className="border-b border-b-yellow-500 ">{sliceTitle[1]}</span>
      ) : null}
    </Heading>
  );
};

export default Title;
