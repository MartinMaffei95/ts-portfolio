import React from 'react';
import { twMerge } from 'tailwind-merge';

const Divider = ({ extraCss }: { extraCss?: string }) => {
  return (
    <span
      className={twMerge(
        'flex self-center w-[50%] h-[2px] rounded bg-yellow-400',
        extraCss
      )}
    />
  );
};

export default Divider;
