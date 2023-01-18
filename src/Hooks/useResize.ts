import { useEffect, useState } from 'react';

export const useResize = () => {
  const [actualWidth, setActuaWidth] = useState<number>(window.innerWidth);
  // const [isPhone, setIsPhone] = useState<boolean>(
  //   window.innerWidth < 768 ? true : false
  // );

  const handleResize = () => {
    // if (window.innerWidth >= 768) setIsPhone(false);
    // else setIsPhone(true);
    setActuaWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return { actualWidth };
};
