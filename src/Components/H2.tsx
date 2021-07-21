import React from "react";

interface props {
  children: string;
  classes?: string;
}
const H2: React.FC<props> = ({ children, classes }) => {
  return <h2 className={"text-2xl " + classes}>{children}</h2>;
};

export default React.memo(H2);
