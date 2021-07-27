import React from "react";
import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface btn extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  theme?: "primary" | "secondary" | "outline";
  type: "submit" | "reset" | "button";
  Icon?: IconType;
  className?: string;
}
const Button: React.FC<btn> = ({
  children,
  theme,
  type,
  className,
  Icon,
  ...rest
}) => {
  let themeClass = "";
  let iconThemeClass = "";
  if (theme === "outline") {
    themeClass =
      "bg-gray-100 hover:bg-gray-200 text-black focus:ring-gray-400 border-gray-500 border-2";
    iconThemeClass =
      "bg-gray-100 group-hover:bg-gray-200 text-blue-500 focus:ring-gray-500 ";
  } else {
    themeClass =
      theme === "primary"
        ? " bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-400 border-transparent"
        : "bg-gray-700 text-white hover:bg-gray-400 focus:ring-gray-500 border-transparent ";
  }
  iconThemeClass =
    theme === "primary"
      ? " bg-blue-500 group-hover:bg-blue-400  focus:ring-blue-400 "
      : "bg-gray-700 group-hover:bg-gray-400 focus:ring-gray-500 ";
  return (
    <button
      {...rest}
      className={
        "py-2 px-3    rounded-md group shadow-lg  focus:outline-none focus:ring-2 focus:ring-offset-2 " +
        themeClass +
        " " +
        className
      }
    >
      <div className="whitespace-no-wrap text-center">
        {Icon && (
          <span>
            <Icon
              className={"inline-block mr-2 mb-1  text-white " + iconThemeClass}
            ></Icon>
          </span>
        )}
        <span className="whitespace-nowrap">{children}</span>
      </div>
    </button>
  );
};
Button.defaultProps = {
  theme: "outline",
};

export default React.memo(Button);
