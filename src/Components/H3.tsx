import React from "react";

interface props {
  children: string;
  classes?: string;
}
const H3: React.FC<props> = ({ children, classes }) => {
  return <h3 className={"text-2xl " + classes}>{children}</h3>;
};

export default React.memo(H3);
