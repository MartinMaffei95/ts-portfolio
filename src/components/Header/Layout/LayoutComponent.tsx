import { Header } from '../Header';

type LayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen w-screen pt-20">
        <div className="w-screen h-full overflow-x-hidden">{children}</div>
      </div>
    </>
  );
};

export default LayoutComponent;
