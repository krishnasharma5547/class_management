import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";

const AppContainer: React.FC = () => {
  return <div>
           <Router>
               <Switch>
                   <Route path="/dashboard">
                        <DashboardPage />
                   </Route>
                   <Route path="/recordings">
                       <RecordingPage />
                   </Route>
               </Switch>
           </Router>
      </div>
};
export default React.memo(AppContainer);
