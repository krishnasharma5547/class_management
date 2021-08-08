import { Entity } from "./Entity";

export interface User extends Entity{
  first_name: string;
  middle_name: string;
  last_name: string;
  roles: "staff" | "admin";
  profile_pic_url: string;
}