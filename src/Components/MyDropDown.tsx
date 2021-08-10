import { Transition, Menu } from "@headlessui/react";
import React from "react";
import { FiInbox, FiLock, FiUser } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import { logout } from "./Api/Auth";
import { User } from "../Models/User";
import { handleError } from "./Card/Card";
interface props {
  user?: User;
}

// const PopUp: React.FC<props> = ({ popUpToggle }) => {
const MyDropdown: React.FC<props> = ({ user }) => {
  return (
    <Menu>
      <Menu.Button>
        <div>
          <button>
            <img
              src={user!.profile_pic_url}
              alt={"not found"}
              onError={handleError}
              className="rounded w-8 h-8 mx-4 mt-1"
            ></img>
          </button>
        </div>
      </Menu.Button>

      <Transition
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-300"
        leave="transition-opacity ease-linear duration-100"
        leaveFrom="opacity-300"
        leaveTo="opacity-0"
      >
        <div className="fixed right-1 mt-1 text-gray-900 bg-gray-200 py-2 px-2  rounded shadow-xl w-40 min-w-max">
          <div>
            <Menu.Items>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/UserAccountSetting">
                    <span
                      className={
                        active
                          ? "text-blue-500 py-2  pr-4 block cursor-pointer"
                          : "py-2  pr-4 block cursor-pointer "
                      }
                    >
                      <FiUser className="inline mx-2 mb-1" /> Profile
                    </span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <span
                    className={
                      active
                        ? "text-blue-500 py-2  pr-4 block cursor-pointer"
                        : "py-2  pr-4 block cursor-pointer "
                    }
                  >
                    <FiInbox className="inline mx-2 mb-1" />
                    Inbox
                  </span>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <span
                    className={
                      active
                        ? "text-blue-500 py-2  pr-4 block cursor-pointer"
                        : "py-2  pr-4 block cursor-pointer "
                    }
                  >
                    <FiLock className="inline mx-2 mb-1" />
                    Lock Screen
                  </span>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <span
                    className={
                      active
                        ? "text-blue-500 py-2  pr-4 block cursor-pointer"
                        : "py-2  pr-4 block cursor-pointer "
                    }
                    onClick={() => {
                      logout();
                      window.location.href = "/login";
                    }}
                  >
                    <IoMdExit className="inline mx-2 mb-1" /> Sign Out
                  </span>
                )}
              </Menu.Item>
            </Menu.Items>
          </div>
        </div>
      </Transition>
    </Menu>
  );
};

export default React.memo(MyDropdown);
