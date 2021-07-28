import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_LOGIN_TOKEN } from "./Components/Api/Base";
import { Suspense, useEffect, useState } from "react";
import Spinner from "./Components/SpinnerModel/Spinner";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import { User } from "./Models/User";
import { me } from "./Components/Api/Auth";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => setUser(u));
  }, );

  if(!user && token){
    return <Spinner message="We are Working on it...."/>
  }
  return (
    <>
      <Suspense fallback={<Spinner message={"We are working on it......"} />}>
        <Router>
          <Switch>
            <Route path="/" exact>
              {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup", "/forgotPassword"]} exact>
              {user ? (
                <Redirect to="/dashboard" />
              ) : (
                <AuthLazy onLogin={setUser} />
              )}
            </Route>

            <Route path={["/dashboard", "/recordings"]} exact>
              {user ? (
                <AppContainerLazy user={user!} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
