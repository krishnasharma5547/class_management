import axios from "axios";
import { User } from "../../Models/User";
import { BASE_URL, LS_LOGIN_TOKEN } from "./Base";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}



export const login = (data: LoginData) => {
  const url = BASE_URL + "/login";
  console.log(data);
  //   return fetch(url, {
  //     method: "POST",
  //     body : JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     res.json().then(data => console.log("res = " ,data));
  //     return res;
  //   });
  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data.token);
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
};

interface meResponse{
    data:User;
}
export const me = (() => {
   const url = BASE_URL + "/me";
    return axios.get<meResponse>(url).then((response) =>response.data.data)
})

export const updateProfile = (data: User)=>{
  const url = BASE_URL + "/me";
  console.log(data);
  return axios.put(url,data)
      .then((response) => {
        window.location.href = "/dashboard";
          console.log(response);
      })
      .catch((error) => {
          console.log(error);
      })
}