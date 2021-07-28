import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
import AuthHero from "../../Components/AuthHero";
import ForgotPasswordPage from "./ForgotPassword.page";

const Auth: React.FC= () => {
  return (
    <>
          <div className="flex">
        <Switch>
          <Route path="/login">
            <LoginPage />
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

