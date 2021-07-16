import React from "react";
import { Link } from "react-router-dom";
const Signup: React.FC = () => {
  return (
    <div className="w-1/2 absolute left-0">
      <div className="flex flex-row justify-between px-24">
        This is Sign UP page <hr></hr>
        Already have Account
        <Link to={"/login"}>
          <span className="text-red-500"> Click Here </span>
        </Link>
      </div>
    </div>
  );
};
export default React.memo(Signup);
