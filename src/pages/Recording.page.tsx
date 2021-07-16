import React from "react";
import LinkButton from "../Components/LinkButton";
import Sidebar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";
import H1 from '../Components/H1'

const Reacording: React.FC = () => {
  return (
    <>
      <TopBar />
      <div className="flex">
        <Sidebar />
        <div>
          <H1 >This is Reacording Page</H1>
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
