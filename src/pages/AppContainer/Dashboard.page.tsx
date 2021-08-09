import React from "react";
import TopBar from "../../Components/TopBar";
// import { User } from "../../Models/User";
import { meSelector } from "../../selectors/auth.selectors";
import { useAppSelector } from "../../Store";
import img from "../../images/logo.svg";
import Sidebar from "../../Components/Sidebar/Sidebar";
interface props {}

const Dashboard: React.FC<props> = () => {
  const user = useAppSelector(meSelector);
  return (
    <>
      <TopBar brandName={"CodeYogi"} img={img}></TopBar>
      <div className="mt-12">
        <Sidebar />
        <div className="text-center md:ml-60 pt-4">
          <h1 className="border-b-2 inline pb-2 text-2xl text-gray-800 border-green-400">
            Hello "
            {user!.first_name + " " + user!.middle_name + " " + user!.last_name}
            " Welcome
          </h1>
        </div>
      </div>
    </>
  );
};
export default React.memo(Dashboard);
