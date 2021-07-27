import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_LOGIN_TOKEN } from "./Components/Api/Base";
import { Suspense } from "react";
import Spinner from "./Components/SpinnerModel/Spinner";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";


function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return (
    <>
      <Suspense fallback={<Spinner message={"We are working on it......"} />}>
        <Router>
          <Switch>
            <Route path="/" exact>
              {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {token ? <Redirect to="/dashboard" /> : <AuthLazy />}
            </Route>

            <Route path={["/dashboard", "/recordings"]} exact>
              {token ? <AppContainerLazy /> : <Redirect to="/login" />}
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
