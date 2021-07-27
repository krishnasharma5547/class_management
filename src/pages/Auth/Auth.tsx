import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
// import DashboardPage from "./Dashboard.page";
import AuthHero from "../../Components/AuthHero";

const Auth: React.FC = () => {
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
        </Switch>
         <AuthHero />
          </div>
    </>
  );
};

export default React.memo(Auth);
