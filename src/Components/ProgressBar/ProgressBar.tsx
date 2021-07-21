import React from "react";
interface props {
  progressPercentage: string;
  theme?: "primary" | "secondary";
  className?: string;
  placeholder: string;
}
const ProgressBar: React.FC<props> = ({
  progressPercentage,
  theme,
  className,
  placeholder,
}) => {
  const themeClass =
    theme === "primary" ? "bg-blue-500 h-full" : "bg-green-400 h-full";
  return (
    <>
      {placeholder}
      <div className="h-5 relative max-w-xl rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div
          className={"absolute " + themeClass+" " + className}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </>
  );
};

ProgressBar.defaultProps = {
    theme : "primary",
    progressPercentage:"80"
}
export default React.memo(ProgressBar);