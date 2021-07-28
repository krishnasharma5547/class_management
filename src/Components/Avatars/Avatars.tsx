import React from "react";

interface props {
  size: "small" | "medium" | "large";
  status?: boolean;
  shape: "squre" | "circular";
  url: string;
}

const Avatars: React.FC<props> = ({ size, status, shape, url }) => {
  let cont = "";
  let img = "";
  if (shape === "circular") {
    cont = "w-12 h-12";
    img = "h-3 w-3 my-1";
    if (size === "small") {
      cont = "w-8 h-8";
      img = "h-2 w-2 my-1";
    } else if (size === "large") {
      cont = "w-16 h-16";
      img = "h-3 w-3 mb-2";
    }
  } else {
    cont = "w-12 h-12";
    img = "h-3 w-3";
    if (size === "small") {
      cont = "w-8 h-8";
      img = "h-2 w-2 mt-1";
    } else if (size === "large") {
      cont = "w-16 h-16";
      img = "h-3 w-3 mt-2";
    }
  }
  let statusClass = undefined;
  if (status === true) {
    statusClass = "bg-green-400";
  } else if(status === false){
    statusClass = "bg-gray-400";
  }else{}
  const shapeClass = shape === "circular" ? "rounded-cir" : "rounded-md";
  return (
    <>
      <div className={"relative " + cont}>
        <img
          className={"border border-gray-100 shadow-sm  " + " " + shapeClass}
          src={url}
          alt="user img"
        />
        { status !== undefined && (
          <div
            className={
              "absolute bottom-0 right-0  border-2 border-white rounded-full  z-10 hover:transform hover:translate-y-4 " +
              " " +
              statusClass +
              " " +
              img
            }
          ></div>
        )}
      </div>
    </>
  );
};

Avatars.defaultProps = {
  size: "medium",
  shape: "circular",
  url: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
};

export default React.memo(Avatars);
