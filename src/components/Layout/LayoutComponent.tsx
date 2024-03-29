import { Header } from '../Header/Header';
import { useContext } from 'react';
import ModalContext from '../../context/Modal/ModalContext';
import { ModalContainer } from '../ModalContainer';

//## CONTEXT

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const LayoutComponent = ({ children }: LayoutProps) => {
  const { isOpen } = useContext(ModalContext);
  return (
    <>
      <div className="flex flex-col min-h-screen h-screen min-w-screen  select-none">
        {isOpen ? <ModalContainer /> : null}
        <div className="w-full h-full overflow-x-hidden">{children}</div>
      </div>
    </>
  );
};

export default LayoutComponent;
