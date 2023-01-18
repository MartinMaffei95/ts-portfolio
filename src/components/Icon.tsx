type IconProps = {
  text: string;
  iconSrc: string;
  link?: string;
  rel?: string;
  containerClassname?: string;
  iconClassname?: string;
  textClassname?: string;
};
export const Icon = ({
  text,
  iconSrc,
  link,
  rel = '',
  containerClassname,
  iconClassname,
  textClassname,
}: IconProps) => {
  return (
    <div>
      {link ? (
        <a target="_blank" rel={rel} href={link}>
          <div className={` ${containerClassname ? containerClassname : ''}`}>
            <span className={`${textClassname ? textClassname : ''}`}>
              {text}
            </span>
            <img
              className={`w-8 ${iconClassname ? iconClassname : ''}`}
              src={iconSrc}
            />
          </div>
        </a>
      ) : (
        <div className={` ${containerClassname ? containerClassname : ''}`}>
          <span className={`${textClassname ? textClassname : ''}`}>
            {text}
          </span>
          <img
            className={`w-8 ${iconClassname ? iconClassname : ''}`}
            src={iconSrc}
          />
        </div>
      )}
    </div>
  );
};
