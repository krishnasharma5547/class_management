// import { bindActionCreators } from "redux";
import { bindActionCreators } from "redux";
import { User } from "../Models/User";
import { store } from "../Store";
import { LOGIN_ME, LOGIN_PASSWORD_TOGGLE, ME_FETCH } from "./Constants";
// import { store } from "../Store";



export const loginAction = (user: User) => ({
  type: LOGIN_ME,
  payload: user,
});

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const loginPasswordToggleAction = (value: boolean) => ({
  type: LOGIN_PASSWORD_TOGGLE,
  payload: value,
});

export const authActions = bindActionCreators({
  meFetch: meFetchAction,
  login:loginAction,
  passwordToggle:loginPasswordToggleAction,
},store.dispatch)