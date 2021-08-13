import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";
import UserAccountSetting from "./UserAccountSetting.page";
import Groups from "./Groups.page"
import FullCardShowPage from "./FullCardShow.page";

interface props {}
const AppContainer: React.FC<props> = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/recordings">
          <RecordingPage />
        </Route>
        <Route path="/userAccountSetting">
          <UserAccountSetting />
        </Route>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/groups/:groupId">
          <FullCardShowPage />
        </Route>
      </Switch>
    </div>
  );
};
export default React.memo(AppContainer);
