import React from "react";
interface props{
    children:string 
    classes?:string
}

const BlueLink: React.FC<props> = ({ children, classes }) => {
  return <span className={"text-blue-500 cursor-pointer " + classes}>{children}</span>;
};

export default React.memo(BlueLink);
