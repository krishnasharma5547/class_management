import React from "react";

interface props {
  children: string;
  classes?: string;
}
const H1: React.FC<props> = ({ children, classes }) => {
  return <h1 className={"text-4xl " + classes}>{children}</h1>;
};

export default React.memo(H1);
