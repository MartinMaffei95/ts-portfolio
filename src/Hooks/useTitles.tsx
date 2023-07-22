import { useState, useEffect } from 'react';

const useTitle = (title: string) => {
  const [titleSlice, setTitleSlice] = useState<string[]>([]);

  const createTitle = (title: string): string[] => {
    const firstLetter = title.slice(0, 1);
    const rest = title.slice(1);

    return [firstLetter, rest];
  };

  useEffect(() => {
    const slicedTitle = createTitle(title);
    setTitleSlice(slicedTitle);
  }, []);

  return titleSlice;
};

export default useTitle;
