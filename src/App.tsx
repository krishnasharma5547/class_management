import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFoundPage from './pages/NotFound.page';
import AppContainer from './pages/AppContainer';
import Auth from './pages/Auth';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Redirect path="/" to="/login" exact></Redirect>
          <Route path={['/login', '/signup']} exact ><Auth /></Route>
          <Route path={['/dashboard', '/recordings']} exact><AppContainer /></Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
