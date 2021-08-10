
import axios, { Canceler } from "axios";
import { groupActions } from "../actions/group.actions";
import { fetchGroups, GroupRequest } from "../Components/Api/Group";
// import { groupQueryMapSelector } from "../selectors/groups.selectors";
// import { store } from "../Store";

// export const fetchGroup = (request: GroupRequest) => {
//   const query:string = request.query!;
//   groupActions.query(query)

//   fetchGroups(request).then((groups) => {
//     groupActions.fetch(query, groups!);
//   });
// };


// export const fetchGroup = (request: GroupRequest) => {
//   const query:string = request.query!;

//   const queryMap = groupQueryMapSelector(store.getState());
//   const groupId = queryMap[query];
//   groupActions.query(query);

//   if(groupId){
//     groupActions.search(false);
//     return;
//   }
//   fetchGroups(request).then((groups) => {
//     groupActions.fetch(query, groups!);
//   });
// };

let canceler:Canceler | undefined;
export const fetchGroup = (request: GroupRequest) => {
  const query:string = request.query!;
  groupActions.query(query);
  canceler && canceler();

  const {cancel, token} = axios.CancelToken.source();

  canceler = cancel;
  fetchGroups(request,token).then((groups) => {
    groupActions.fetch(query, groups!);
    canceler = undefined;
  });
};