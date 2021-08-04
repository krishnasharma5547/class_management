// import { Menu } from "@headlessui/react";
import React from "react";
import { FiMail } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { User } from "../Models/User";
import { useAppSelector } from "../Store";
// import AppContext from "../AppContext";
// import { AppState } from "../Store";
import MyDropDown from "./MyDropDown";

interface props {
  img: string;
  brandName: string;
}
const TopBar: React.FC<props> = ({ img, brandName }) => {
  // const { user } = useContext(AppContext); const dispatch = useDispatch();
  const me = useAppSelector((state) => state.users.byId[state.auth.id!]);
  // console.log("top bar", me)

  return (
    <div className="flex justify-between fixed top-0 h-12 bg-navColor w-full px-6 z-20">
      <div className=" flex space-x-10 items-center">
        <div className="flex justify-center items-center space-x-3 py-1">
          <img className="w-7 h-7" src={img} alt="Url not found" />
          <Link to="/dashboard">
            <button className="text-white font-semibold text-xl">
              {brandName}
            </button>
          </Link>
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
      <div className="flex py-0.5 mr-10 justify-center items-center">
        <IoMdNotificationsOutline className="text-white text-2xl mx-2 mt-1 cursor-pointer hover:text-blue-500" />
        <FiMail className="text-white text-2xl mx-2 mt-1 cursor-pointer hover:text-blue-500" />
        {/* <div>
          <img
            src={user!.profile_pic_url}
            alt={"not found"}
            className="rounded w-8 h-8 mx-4 mt-1"
            onClick={handlePopUp}
          ></img>
        </div> */}
        <div className="fixed right-0 top-1">
          <MyDropDown user={me} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TopBar);
