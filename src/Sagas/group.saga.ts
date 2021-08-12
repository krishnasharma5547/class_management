import { AnyAction } from "redux";
import { debounce, call, put } from "@redux-saga/core/effects";
import { fetchGroupsApi } from "../Components/Api/Group";
import { GROUP_QUERY } from "../actions/Constants";
import { groupFetchAction } from "../actions/group.actions";

export function* fetchGroups(action: AnyAction): Generator<any> {
  const groupResponce: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });
  yield put(groupFetchAction(action.payload, groupResponce.data.data));
}
export function* watchGroupQueryChange() {
  // yield takeLatest(GROUP_QUERY, fetchGroups);
  yield debounce(1000,GROUP_QUERY,fetchGroups)
}
