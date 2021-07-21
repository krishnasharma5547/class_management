import React from "react";
import Sidebar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";
import LinkButton from "../Components/LinkButton";
import BrandImage from '../images/logo.svg'
import {FaBars} from "react-icons/fa"

const Dashboard: React.FC = () => {
  return (
    <>
      <TopBar img={BrandImage} brandName="CORK" />
      <div className="w-full h-10 shadow-m mt-10 fixed top-0 bg-white ">
        <div className="flex items-center">
          <FaBars className="w-6 h-6"></FaBars>
          <p>path</p>
        </div>
      </div>
      <div className="flex mt-20">
        <Sidebar />
        <div>
          <h1 className="block">This is Dashboard Page</h1>
          <LinkButton
            theme={"text-white bg-red-500 m-4"}
            type={"button"}
            to={"/recordings"}
          >
            Go to recording
          </LinkButton>
        </div>
      </div>
    </>
  );
};
export default React.memo(Dashboard);
