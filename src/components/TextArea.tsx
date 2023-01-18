import { ChangeEventHandler, FocusEventHandler } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface TextAreaProps {
  label: string;
  inputName: string;
  value: string | number;
  placeholder?: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  handleBlur: FocusEventHandler<HTMLTextAreaElement>;
  errorMessage?: string | null;
  inputClassname?: string;
  labelClassname?: string;
  icon?: JSX.Element;
  iconPosition?: string;
  iconFX?: Function;
}

const TextArea = ({
  label,
  inputName,
  value,
  placeholder,
  handleBlur,
  handleChange,
  errorMessage,
  inputClassname,
  labelClassname,
  icon,
  iconPosition,
  iconFX,
}: TextAreaProps) => {
  return (
    <div className="relative">
      <label
        htmlFor={inputName}
        className={labelClassname ? `${labelClassname}` : ''}
      >
        {label}
      </label>
      <textarea
        placeholder={placeholder ? placeholder : ''}
        name={inputName}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        className={inputClassname ? `resize-none h-36 ${inputClassname}` : ''}
      />
      <span
        onClick={() => iconFX && iconFX()}
        className="absolute z-1000000 text-primary-800 text-2xl right-0 top-0 m-2"
      >
        {icon ? icon : null}
      </span>
      {/* iconPosition */}
      {errorMessage ? (
        <p className="error-alert">
          <FiAlertCircle /> {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default TextArea;
