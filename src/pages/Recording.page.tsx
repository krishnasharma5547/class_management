import React from "react";
import LinkButton from "../Components/LinkButton";
import Sidebar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";
import H1 from '../Components/H1'
import BrandImage from '../images/logo.svg'
const Reacording: React.FC = () => {
  return (
    <>
      <TopBar img={BrandImage} brandName="CORK" />
      <div className="w-full h-10 shadow-md"> second bar</div>
      <div className="flex mt-10">
        <Sidebar />
        <div>
          <H1>This is Reacording Page</H1>
          <LinkButton
            theme={"text-white bg-red-500 m-4"}
            type={"button"}
            to={"/dashboard"}
          >
            Go to Dashboard
          </LinkButton>
        </div>
      </div>
    </>
  );
};
export default React.memo(Reacording);
