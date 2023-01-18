type IconProps = {
  text: string;
  iconSrc: string;
  link?: string;
  rel?: string;
};
export const Icon = ({ text, iconSrc, link, rel = '' }: IconProps) => {
  return (
    <div>
      {link ? (
        <a target="_blank" rel={rel} href={link}>
          <div className="border border-neutral-200 w-16 rounded flex flex-col justify-center items-center text-neutral-200">
            <span>{text}</span>
            <img className="w-8" src={iconSrc} />
          </div>
        </a>
      ) : (
        <div className="border border-neutral-200 w-16 rounded flex flex-col justify-center items-center text-neutral-200">
          <span>{text}</span>
          <img className="w-8" src={iconSrc} />
        </div>
      )}
    </div>
  );
};
