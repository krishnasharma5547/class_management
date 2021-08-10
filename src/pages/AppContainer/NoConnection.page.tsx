import React from "react";
interface props {}
const NoConnection: React.FC<props> = () => {
  return (
    <>
      <h1 className="text-center mt-4 bg-gray-300 py-8 px-8">
        oops.... Looks Like You are Not Connected to the internet
      </h1>
    </>
  );
};

export default React.memo(NoConnection);
