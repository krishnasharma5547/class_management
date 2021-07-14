import React from 'react'
import { Link, BrowserRouter as Router } from "react-router-dom";

const  Login : React.FC = () =>  {
    return (<div>
        This is Login Page
        <hr></hr>
        don't have an Account
          <Link to={"/signup"}> <span className="text-red-500"> Click Here </span>
          </Link>
      </div>
    );
}
export default React.memo(Login);