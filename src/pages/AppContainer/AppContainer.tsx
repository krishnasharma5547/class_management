import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";
import UserAccountSetting from './UserAccountSetting.page'

interface props{
}
const AppContainer: React.FC<props> = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage  />
        </Route>
        <Route path="/recordings">
          <RecordingPage />
        </Route>
        <Route path="/userAccountSetting">
          <UserAccountSetting />
        </Route>
      </Switch>
    </div>
  );
};
export default React.memo(AppContainer);
