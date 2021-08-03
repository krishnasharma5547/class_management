import { User } from "./Models/User";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./Models/Group";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const LOGIN_ME = "login/me";
export const GROUP_FETCH = "group/fetch";
export const GROUP_SHOW_HIDE = "group/fetch";
export const GROUP_PASSWORD_TOGGLE = "login/passwordToggle";
export const GROUP_SEARCHING = "groups/searching";
export const GROUP_QUERY = "group/query";

export interface AppState {
  me?: User;
  groupQuery: string;
  groupQueryMap: { [keyword: string]: number[] };
  groups: { [id: number]: Group };
  popUpShowHide: boolean;
  isCardShow: boolean;
  passwordToggle: boolean;
  isSearching: boolean;
}

const initialState: AppState = {
  me: undefined,
  popUpShowHide: true,
  isCardShow: true,
  passwordToggle: false,
  isSearching: false,
  groupQuery: "",
  groupQueryMap: {},
  groups: {},
};

const reducer: Reducer<AppState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case LOGIN_ME:
      return { ...state, me: action.payload };
    case GROUP_QUERY:
      console.log(action.payload);
      return { ...state, groupQuery: action.payload };
    case GROUP_FETCH:
      const groups = action.payload.groups as Group[];
      const groupIds = groups.map((g) => g.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});

      return {
        ...state,
        groupQueryMap: {
          ...state.groupQueryMap,
          [action.payload.query]: groupIds,
        },
        groups: { ...state.groups, ...groupMap },
      };
    case GROUP_SHOW_HIDE:
      return { ...state, isCardShow: action.payload };
    case GROUP_PASSWORD_TOGGLE:
      return { ...state, passwordToggle: action.payload };
    case GROUP_SEARCHING:
      return { ...state, isSearching: action.payload };
    default:
      return state;
  }
};

// export const store = createStore(reducer);

export const meFetchAction = (u: User) => ({ type: LOGIN_ME, payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore(reducer);
