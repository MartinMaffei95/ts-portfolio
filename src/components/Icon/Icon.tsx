import { ReactNode } from 'react';

const Icon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-neutral-200 flex p-2 text-lg shadow-md shadow-neutral-800 rounded-full text-neutral-800">
      {children}
    </div>
  );
};

export default Icon;
