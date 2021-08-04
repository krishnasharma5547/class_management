import { Reducer } from "redux";
import { GROUP_FETCH, GROUP_QUERY, GROUP_SEARCHING, GROUP_SHOW_HIDE } from "../actions/group.actions";
import { Group } from "../Models/Group";

export interface GroupState {
  byId: {
    [id: number]: Group;
  };
  query: string;
  queryMap: { [query: string]: number[] };
  isSearching: boolean;
  isCardShow:boolean
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  isSearching: false,
  isCardShow: false
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_SEARCHING:
      return {...state, isSearching:action.payload}
    case GROUP_SHOW_HIDE:
      return {...state, isCardShow: action.payload}
    case GROUP_QUERY:
      console.log(action.payload);
      return { ...state, query: action.payload };
    case GROUP_FETCH:
      const groups = action.payload.groups as Group[];
      const groupIds = groups.map((g) => g.id);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        byId: { ...state.byId, ...groupMap },
      };
      default:
        return state
  }
};
