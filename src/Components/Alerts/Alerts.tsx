import React from "react";
import { useState } from "react";
import {GrFormClose} from "react-icons/gr";

interface props {
    theme:"warning" | "error" | "success"
    className?: string 
    children : string 
}
const Alerts: React.FC<props> = ({ className,children,theme }) => {
    const [close,setClose] = useState(false);
    let showClass = "block";
    if(close === true){
      showClass = "block"
    } 
    else{
      showClass = "hidden"
    }
    let themeClass = "bg-green-300"
    let type = "Success! "
    if(theme === "warning"){
            themeClass = "bg-red-100"
            type = "Warning! "
    }else if(theme === "error"){
        themeClass = "bg-red-400"
        type = "Error! ";

    }
    const handleClick = ()=>setClose(!close)
  return (
    <>
      <div
        className={
          "h-8 w-full px-4 rounded-md shadow-md leading-8 " +" " +  themeClass + " "+ showClass
        }
      >
        <span className="absolute h-8 right-4 top-4 cursor-pointer leading-8 ">
          <GrFormClose
            className="w-5 h-full leading-8 hover:text-red-500 hover:bg-red-500"
            onClick={handleClick}
          ></GrFormClose>
        </span>
        <div className="">{type + children}</div>
      </div>
    </>
  );
};
Alerts.defaultProps={
    children: "Success",
    theme:"success",
}

export default React.memo(Alerts);
