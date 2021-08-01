import { User } from "./Models/User";
import { AnyAction, createStore, Reducer } from "redux";
import { GroupResponse } from "./Models/GroupResponse";
export interface AppState {
  me?: User;
  group?: GroupResponse[];
  popUpShowHide: boolean;
  isCardShow: boolean;
  passwordToggle: boolean; 
  isSearching : boolean; 
}

const initialState: AppState = {
  me: undefined,
  group: undefined,
  popUpShowHide: true,
  isCardShow: false,
  passwordToggle: false,
  isSearching : false,

};

const reducer:Reducer<AppState> = (currentState = initialState, dispachedAction: AnyAction) => {
  switch (dispachedAction.type) {
    case "login/me":
      return { ...currentState, me: dispachedAction.payload };
    case "group/fetch":
        return {...currentState,group:dispachedAction.payload }
    case "groups/showHide":
        return {...currentState, isCardShow: dispachedAction.payload}
    case "login/passwordToggle":
        return {...currentState, passwordToggle:dispachedAction.payload}
    case "groups/searching" : 
        return {...currentState, isSearching : dispachedAction.payload}
    default:
      return currentState;
  }
};

export const store =  createStore(reducer)
