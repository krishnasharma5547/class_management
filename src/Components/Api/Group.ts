import axios from "axios";
import { Group } from "../../Models/Group";
import { BASE_URL } from "./Base";

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse {
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
    })

    .catch((e) => console.error(e));
};


//fetching group by id
// export const fetchGroupById = (cardId: number) => {
//   console.log("fetch Called")
//   const url = BASE_URL + "/groups/" + cardId;
//   // const url = BASE_URL + "/group/:id";

//   console.log("fetch Called")
//   return axios
//     .get<Group>(url)
//     .then((response) => {
//       console.log(response.data);
//       return response.data;
//     })

//     .catch((e) => console.error(e));
// };
