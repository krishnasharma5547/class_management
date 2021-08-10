import { bindActionCreators } from "redux";
import { Group } from "../Models/Group";
import { store } from "../Store";
import {
  FETCH_CARD,
  FETCH_FROM_ID,
  GROUP_FETCH,
  GROUP_QUERY,
  GROUP_SEARCHING,
  GROUP_SHOW_HIDE,
} from "./Constants";

export const groupQueryAction = (query: string) => ({
  type: GROUP_QUERY,
  payload: query,
});

export const groupFetchAction = (query: string, groups: Group[]) => ({
  type: GROUP_FETCH,
  payload: { query, groups },
});

export const groupSerchingAction = (payload: boolean) => ({
  type: GROUP_SEARCHING,
  payload: payload,
});

export const groupShowHide = (payload: boolean) => ({
  type: GROUP_SHOW_HIDE,
  payload: payload,
});

export const fetchFromId = (id: number) => ({
  type: FETCH_FROM_ID,
  payload: id,
});

export const fetchCard = (card: Group) => ({
  type: FETCH_CARD,
  payload: card,
});

// export const groupOffset = (offset:number) => ({
//     type:GROUP_OFFSET,
//     payload:offset
// })

export const groupActions = bindActionCreators({
  query: groupQueryAction,
  fetch:groupFetchAction,
  search:groupSerchingAction,
  groupShowHide:groupShowHide,
  fetchFromId:fetchFromId,
  fetchCard:fetchCard,
}, store.dispatch)
