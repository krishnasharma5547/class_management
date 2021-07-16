import React from "react";
import { Link } from "react-router-dom";

export interface btn {
  children: string | React.FC;
  theme: string;
  type: "submit" | "reset" | "button";
  to:string
}
const LinkButton: React.FC<btn> = ({ children, theme, type,to }) => {
  return (<button
        type={type}
        className={"block py-2 px-4 rounded-lg shadow-lg h-10 mt-4" + theme}
      >
        <Link to={to}>{children}</Link>
      </button>
  );
};

export default React.memo(LinkButton);
