import React from "react";
import LinkButton from "../../Components/LinkButton";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TopBar from "../../Components/TopBar";
import H1 from '../../Components/H1'
import BrandImage from '../../images/logo.svg'

interface props {
}

const Reacording: React.FC<props> = () => {
  return (
    <>
      <TopBar img={BrandImage} brandName="CORK"/>
      <div className="flex mt-12">
        <Sidebar />
        <div className="md:ml-60">
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
