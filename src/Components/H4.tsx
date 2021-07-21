import React from "react";

interface props {
  children: string;
  classes?: string;
}
const H4: React.FC<props> = ({ children, classes }) => {
  return <h4 className={"text-xl " + classes}>{children}</h4>;
};

export default React.memo(H4);
