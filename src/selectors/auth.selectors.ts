import { createSelector } from "reselect";
import { AppState } from "../Store";
import { authStateSelector } from "./app.selectors";

export const meSelector = (state: AppState) =>
  state.auth.id !== undefined ? state.users.byId[state.auth.id] : undefined;


  export const passwordToggle = createSelector([authStateSelector], authState => authState.passwordToggle)