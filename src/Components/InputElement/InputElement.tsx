import React from "react";
import { InputHTMLAttributes } from "react";
interface props extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string;
  touched?: boolean;
  placeholder: string;
  className?: string;
}
const InputElement: React.FC<props> = ({
  errors,
  touched,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <div>
      <label
        className="hidden uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="email"
      >
        {placeholder}
      </label>
      <div>
        <input
          placeholder={placeholder}
          {...rest}
          className={
            " inline-block appearance-none bg-transparent  w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none my-2  pb-4 " +
            className
          }
        ></input>
      </div>
        <div className="h-6">
          {touched && <span className="text-red-500">{errors}</span>}
        </div>
    </div>
  );
};

export default React.memo(InputElement);
