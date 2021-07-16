import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
// import DashboardPage from "./Dashboard.page";
import AuthHero from "../Components/AuthHero";
const Auth: React.FC = () => {
  return (
    <>
          <div className="flex">
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
        {/* <Router>
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
};

export default React.memo(Auth);
