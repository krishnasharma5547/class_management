import { Reducer } from "redux";
import {
  FETCH_CARD,
  FETCH_FROM_ID,
  GROUP_FETCH,
  // GROUP_OFFSET,
  GROUP_QUERY,
  GROUP_SEARCHING,
  GROUP_SHOW_HIDE,
} from "../actions/Constants";
import { Group } from "../Models/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  isSearching: boolean;
  isCardShow: boolean;
  CardId?: number;
  card?: void | Group;
  offset?: number;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  isSearching: false,
  isCardShow: true,
  cardId: 23,
  offset: 10,
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_SEARCHING:
      return { ...state, isSearching: action.payload };
    case GROUP_SHOW_HIDE:
      return { ...state, isCardShow: action.payload};
    case GROUP_QUERY:
      return { ...state, query: action.payload,isSearching:true };
    // case GROUP_OFFSET:
    //   return { ...state, offset: action.payload };
    case FETCH_FROM_ID:
      return { ...state, id: action.payload };
    case FETCH_CARD:
      return { ...state, card: action.payload };
    case GROUP_FETCH:
      console.log("reducer working");
      const groups = action.payload.groups as Group[];
      // const groupIds = groups.map((e) => e.id)
      const groupIds = groups && getIds(groups);
      // const entityMap = entities.reduce((prev, entity) => {
      //   return { ...prev, [entity.id]: entity };
      // }, {});
      const newState = addMany(state, groups) as GroupState;
      return {
        ...newState,
        isSearching:false,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        // byId: { ...state.byId, ...groupMap },
      };
    default:
      return state;
  }
};
