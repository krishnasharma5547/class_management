import React from "react";
import { Link } from "react-router-dom";
const Signup: React.FC = () => {
  return (<div>
      This is Sign UP page <hr></hr>
          Already have Account
          <Link to={"/login"}>
            <span className="text-red-500"> Click Here </span>
          </Link>
    </div>
  );
};
export default React.memo(Signup);
