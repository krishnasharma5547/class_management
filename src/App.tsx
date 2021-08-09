import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound.page";
import { LS_LOGIN_TOKEN } from "./Components/Api/Base";
import { Suspense, useEffect } from "react";
import Spinner from "./Components/SpinnerModel/Spinner";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
// import { User } from "./Models/User";
import { me } from "./Components/Api/Auth";
// import AppContext from "./AppContext";
// import { AppState } from "./Store";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./Store";
import { meFetchAction } from "./actions/auth.actions";
import FullCardShowPage from "./pages/AppContainer/FullCardShow.page";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  // const [user, setUser] = useState<User>();
  const user = useAppSelector(
    (state) => state.auth.id && state.users.byId[state.auth.id!]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }
    // me().then((u) => setUser(u));
    me().then((u) => {
      return dispatch(meFetchAction(u));
    });
  }, []);

  if (!user && token) {
    return <Spinner message="We are Working on it...." />;
  }
  return (
    <>
      {/* <AppContext.Provider value={{ user, setUser }}> */}
      <Suspense fallback={<Spinner message={"We are Working on it...."} />}>
        <Router>
          <Switch>
            <Route path="/" exact>
              {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup", "/forgotPassword"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
            </Route>

            <Route
              path={[
                "/dashboard",
                "/recordings",
                "/userAccountSetting",
                "/groups",
              ]}
              exact
            >
              {user ? <AppContainerLazy /> : <Redirect to="/login" />}
            </Route>
            <Route
              exact
              path="/groups/:id"
              component={FullCardShowPage}
            ></Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
      {/* </AppContext.Provider> */}
    </>
  );
}

export default App;
