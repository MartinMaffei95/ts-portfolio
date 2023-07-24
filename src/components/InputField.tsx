import { ChangeEventHandler, FocusEventHandler } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface InputField {
  label: string;
  inputName: string;
  type?: string;
  value: string | number;
  placeholder?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  errorMessage?: string | null;
  inputClassname?: string;
  labelClassname?: string;
  icon?: JSX.Element;
  iconPosition?: string;
  iconFX?: Function;
}

const InputField = ({
  label,
  inputName,
  type,
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
}: InputField) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={inputName}
        className={labelClassname ? `${labelClassname}` : ''}
      >
        {label}
      </label>
      <input
        type={type ? type : 'text'}
        placeholder={placeholder ? placeholder : ''}
        name={inputName}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        className={inputClassname ? `${inputClassname}` : ''}
      />
      <span
        onClick={() => iconFX && iconFX()}
        className="absolute z-1000000 text-primary-800 text-2xl right-0 top-0 m-2"
      >
        {icon ? icon : null}
      </span>
      {/* iconPosition */}
      {errorMessage ? (
        <p className=" my-2 flex items-center justify-center gap-4 rounded text-red-600 border border-red-600 p-2 ">
          <FiAlertCircle /> {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
