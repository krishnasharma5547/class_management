import React from "react";
import { User } from "../Models/User";
import { logout } from "./Api/Auth";
import Button from "./Button/Button";
import H4 from "./H4";

interface props {
  img: string;
  brandName: string;
  user: User;
}
const TopBar: React.FC<props> = ({ img, brandName, user }) => {
  return (
    <div className="flex justify-between fixed top-0 h-10 bg-navColor w-full px-6">
      <div className=" flex space-x-10 items-center">
        <div className="flex justify-center items-center space-x-3 py-1">
          <img className="w-7 h-7" src={img} alt="Url not found" />
          <H4 classes="text-white font-semibold ">{brandName}</H4>
        </div>
        <div className="mt-1">
          <input
            type="text"
            id="search"
            autoComplete="new-search"
            name="search"
            placeholder="Search"
            className="bg-search px-2 h-7 w-72 text-white border border-gray-500 text-xs rounded-md focus:rounded-md "
          />
        </div>
      </div>

      <div className="flex py-0.5">
        <img src={user.profile_pic_url} alt={"not found"}  className="rounded-full w-8 h-8 mx-4" ></img>
        <Button
          type={"button"}
          theme={"outline"}
          className={"h-9 text-sm leading-3"}
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          Log out
        </Button>
        {/* <h2 className="text-4xl text-red-500">{user}</h2> */}
      </div>
    </div>
  );
};

export default React.memo(TopBar);
