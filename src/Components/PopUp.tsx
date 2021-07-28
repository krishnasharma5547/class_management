import { Transition } from "@headlessui/react";
import React from "react";
import { FiInbox, FiLock, FiUser } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import { logout } from "./Api/Auth";
interface props {
  popUpToggle:boolean;
}
const PopUp: React.FC<props> = ({ popUpToggle }) => {
  return (
    <>
      <Transition
        show={popUpToggle}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-300"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-300"
        leaveTo="opacity-0"
      >
        <div className="text-gray-900 bg-gray-200 py-2 px-2  rounded shadow-xl mt-10 w-40 min-w-max">
          <div>
            <Link to="/UserAccountSetting">
              <span className="py-2  pr-4 block cursor-pointer hover:text-blue-500">
                <FiUser className="inline mx-2 mb-1" /> Profile
              </span>
            </Link>
            <span className="py-2  pr-4 block cursor-pointer hover:text-blue-500">
              <FiInbox className="inline mx-2 mb-1" />
              Inbox
            </span>
            <span className="py-2  pr-4 block cursor-pointer hover:text-blue-500">
              <FiLock className="inline mx-2 mb-1" />
              Lock Screen
            </span>
            <span
              className="py-2  pr-4 block cursor-pointer hover:text-blue-500"
              onClick={() => {
                logout();
                window.location.href = "/login";
              }}
            >
              <IoMdExit className="inline mx-2 mb-1" /> Sign Out
            </span>
          </div>
        </div>
      </Transition>
    </>)
};

export default React.memo(PopUp);