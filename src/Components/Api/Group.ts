import axios, { CancelToken } from "axios";
import { Group } from "../../Models/Group";
import { BASE_URL, get, LS_LOGIN_TOKEN } from "./Base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archieved";
}

export interface GroupResponse {
  data: Group[];
}

// export const fetchGroupsApi = (data: GroupRequest, token?:CancelToken) => {
//   const url = BASE_URL + "/groups";
//   // console.log("FetchAll Group is Working");
//   return axios
//     .get<GroupResponse>(url, { params: data, cancelToken:token })
//     .then((response) => {
//       // console.log(response.data.data);
//       return response.data.data;
//     }).catch((e) => console.error(e));
// };

// fetching group by id
export const fetchGroupById = (data: { id: number }) => {
  const url = BASE_URL + "/groups/" + data.id;
  // const url = BASE_URL + "/group/:id";
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return axios
    .get(url, { headers: { Authorization: token } })
    .then((response) => {
      return response.data.data;
    })
    .catch((e) => console.error(e));
};

export const fetchGroupsApi = (data: GroupRequest, token?: CancelToken) => {
  const url = BASE_URL + "/groups";
  // console.log("FetchAll Group is Working");
  return get<GroupResponse>(url, { params: data, cancelToken: token });
  // .then((response) => {
  //   // console.log(response.data.data);
  //   return response.data.data;
  // }).catch((e) => console.error(e));
};
