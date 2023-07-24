import { FC, PropsWithChildren, ComponentProps, HTMLAttributes } from 'react';
interface Props extends PropsWithChildren {
  As?: keyof Partial<JSX.IntrinsicElements>;
}
const Icon: FC<Props & ComponentProps<any>> = ({
  children,
  As = 'div',
  ...props
}) => {
  return (
    <As
      className="bg-neutral-200 flex md:p-4 [&_*]:md:text-4xl p-2 text-lg shadow-md shadow-neutral-800 rounded-full text-neutral-800 justify-center items-center"
      {...props}
    >
      {children}
    </As>
  );
};

export default Icon;
