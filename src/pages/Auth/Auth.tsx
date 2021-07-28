import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
// import DashboardPage from "./Dashboard.page";
import AuthHero from "../../Components/AuthHero";
import { User } from "../../Models/User";
import ForgotPasswordPage from "./ForgotPassword.page";
interface props {
  onLogin: (user: User) => void;
}
const Auth: React.FC<props> = (props) => {
  return (
    <>
          <div className="flex">
        <Switch>
          <Route path="/login">
            <LoginPage onLogin={props.onLogin}/>
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/forgotPassword">
                <ForgotPasswordPage />
          </Route>
        </Switch>
         <AuthHero />
          </div>
    </>
  );
};

export default React.memo(Auth);

