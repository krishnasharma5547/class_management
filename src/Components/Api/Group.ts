import axios from "axios";
import { GroupResponse } from "../../Models/GroupResponse";
import { BASE_URL } from "./Base";

 interface GroupRequest {
   limit?: number;
   offset?: number;
   query?: string;
   status: "all-groups" | "favourite" | "archieved";
 }

 export const fetchGroups = (data: GroupRequest) => {
   const url = BASE_URL + "/groups";
   return axios
     .get<GroupResponse>(url, { params: data })
     .then((response) => {
       console.log(response.data.data);
       return response.data.data;
     })
     .catch((error) => {
       console.error(error);
       return error;
     });
 };