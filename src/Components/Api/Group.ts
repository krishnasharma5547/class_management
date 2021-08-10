import axios from "axios";
import { Group } from "../../Models/Group";
import { BASE_URL, LS_LOGIN_TOKEN } from "./Base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archieved";
}

export interface GroupResponse {
  data: Group[];
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  // console.log("FetchAll Group is Working");
  return axios
    .get<GroupResponse>(url, { params: data })
    .then((response) => {
      // console.log(response.data.data);
      return response.data.data;
    }).catch((e) => console.error(e));
};

// fetching group by id
export const fetchGroupById = (data: { id: number }) => {
  const url = BASE_URL + "/groups/" + data.id;
  // const url = BASE_URL + "/group/:id";
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return axios
    .get(url,{headers:{Authorization:token}})
    .then((response) => {
      return response.data.data;
    }).catch((e) => console.error(e));
};
