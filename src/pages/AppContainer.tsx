import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";

const AppContainer: React.FC = () => {
  return <div>
               <Switch>
                   <Route path="/dashboard">
                        <DashboardPage />
                   </Route>
                   <Route path="/recordings">
                       <RecordingPage />
                   </Route>
               </Switch>
      </div>
};
export default React.memo(AppContainer);
