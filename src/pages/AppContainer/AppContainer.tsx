import React from "react";
import { Switch, Route } from "react-router-dom";
import { User } from "../../Models/User";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";

interface props{
  user:User
}
const AppContainer: React.FC<props> = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage user={props.user} />
        </Route>
        <Route path="/recordings">
          <RecordingPage user={props.user} />
        </Route>
      </Switch>
    </div>
  );
};
export default React.memo(AppContainer);
