import { AppState } from "../Store";
import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";
// export const groupQuerySelector = (state:AppState) => state.groups.query;

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);
export const groupCardShowSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.isCardShow
);
export const groupIsSerchingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.isSearching
);

export const fetchCardIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.CardId
);
export const fetchGroupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.card
);

// export const groupSelector = (state: AppState) => {
//   const groupIds = state.groups.queryMap[state.groups.query] || [];
//   const group = groupIds.map((id) => state.groups.byId[id]);
//   console.log("........", group);
//   return group;
// };

export const groupSelector = (state: AppState) => {
  const query = groupQuerySelector(state);
  const queryMap = groupQueryMapSelector(state);
  const byId = groupByIdSelector(state);
  const groupIds = queryMap[query] || [];
  const groups = groupIds.map((id) => byId[id]);
  return groups;
};
