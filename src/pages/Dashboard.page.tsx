import React from "react";
import Sidebar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";
import LinkButton from "../Components/LinkButton";

const Dashboard: React.FC = () => {
  return (
    <>
      <TopBar />
      <div className="flex">
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
