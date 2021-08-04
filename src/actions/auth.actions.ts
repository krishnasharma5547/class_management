import { User } from "../Models/User";

export const LOGIN_ME = "login/me";
export const LOGIN_PASSWORD_TOGGLE = "login/passwordToggle";
export const ME_FETCH = "login/fetch/me";

export const loginAction = (user: User) => ({
  type: LOGIN_ME,
  payload: user,
});

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const loginPasswordToggleAction = (value: boolean) => ({
  type: LOGIN_PASSWORD_TOGGLE,
  payload: value,
});
