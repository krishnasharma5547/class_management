import React from "react";
import { InputHTMLAttributes } from "react";
interface props extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string;
  touched?: boolean;
  placeholder?: string;
  className?: string;
  icon?: any;
  errorClasses?: string;
  label?: string;
  labelClass?: string;
}
const InputElement: React.FC<props> = ({
  errors,
  touched,
  className,
  placeholder,
  icon,
  errorClasses,
  label,
  labelClass,
  ...rest
}) => {
  return (
    <div>
      <label
        // eslint-disable-next-line no-useless-concat
        className={
          !label
            ? "hidden "
            : "block " +
              " " +
              "uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 " +
              labelClass
        }
        htmlFor="ie"
      >
        {label}
      </label>
      <div className="flex">
        {icon && <span className={"text-xl " + className}>{icon}</span>}
        <input
          id="ie"
          placeholder={placeholder}
          {...rest}
          className={
            " inline-block appearance-none bg-transparent  w-full text-gray-800 py-1 px-2 leading-tight focus:outline-none pb-4 " +
            className
          }
        ></input>
      </div>
      <div className={"h-6  ml-4 " + errorClasses}>
        {touched && <span className="text-red-500 ">{errors}</span>}
      </div>
    </div>
  );
};
InputElement.defaultProps = {
  icon: "",
};
export default React.memo(InputElement);
