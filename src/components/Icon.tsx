type IconProps = {
  text: string;
  iconSrc: string;
};
export const Icon = ({ text, iconSrc }: IconProps) => {
  return (
    <div className="border border-neutral-200 w-16 rounded flex flex-col justify-center items-center text-neutral-200">
      <span>{text}</span>
      <img className="w-8" src={iconSrc} />
    </div>
  );
};
