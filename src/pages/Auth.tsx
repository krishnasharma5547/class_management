import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
import AuthHero from "../Components/AuthHero";
const Auth: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>

      <AuthHero />
    </div>
  );
};

export default React.memo(Auth);
