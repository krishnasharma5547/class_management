import React, { useContext, useState } from "react";
import AppContext from "../AppContext";
import H4 from "./H4";
import PopUp from "./PopUp";

interface props {
  img: string;
  brandName: string;
}
const TopBar: React.FC<props> = ({ img, brandName}) => {

  const {user} = useContext(AppContext);
  const [popUpToggle, setPopUpToggle] = useState(false);
  const handlePopUp = () => {
    setPopUpToggle(!popUpToggle);
  };
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
            className="hidden md:block bg-search px-2 h-7 w-72 text-white border border-gray-500 text-xs rounded-md focus:rounded-md "
          />
        </div>
      </div>
      <div className="flex py-0.5">
        <div>
          <img
            src={user!.profile_pic_url}
            alt={"not found"}
            className="rounded w-8 h-8 mx-4 mt-1 fixed right-2 "
            onClick={handlePopUp}
          ></img>
          {popUpToggle && <PopUp popUpToggle = {popUpToggle}/>}
        </div>
      </div>
    </div>
  );
};

export default React.memo(TopBar);
