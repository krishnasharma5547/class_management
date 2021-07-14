import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";
import DashboardPage from "./Dashboard.page";
import RecordingPage from "./Recording.page";

const AppContainer: React.FC = () => {
  return <div>
      <TopBar />
      <div className="flex">
          <Sidebar /> 
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
  </div>;
};
export default React.memo(AppContainer);
