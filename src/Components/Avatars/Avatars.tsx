import { divide } from "lodash";
import React from "react";
import { useState } from "react";
import Avatar from '../../images/profile-12.jpeg'

interface props{
    size : "small" | "medium" | "large"
    status : true
    shape : "squre"| "circular"
}
const Avatars: React.FC<props> = ({size,status,shape}) =>{
    let cont = ""
    let img = "";
   if( shape === "circular" ){ 
    cont = "w-12 h-12";
     img = "h-3 w-3 my-1";   
    if (size === "small"){
        cont ="w-8 h-8"
         img = "h-2 w-2 my-1";
    }else if(size === "large"){
        cont = "w-16 h-16";
        img = "h-3 w-3 mb-2";
    }}else{
         cont = "w-12 h-12";
         img = "h-3 w-3"; 
        if (size === "small"){
        cont ="w-8 h-8"
         img = "h-2 w-2 mt-1";
    }else if(size === "large"){
        cont = "w-16 h-16";
        img = "h-3 w-3 mt-2";}}
   
    const statusClass = status === true ? "bg-green-400" : "bg-gray-400"
    const shapeClass = shape === "circular" ? "rounded-full" : "rounded-md"
return (<>
      <div className={"relative " + cont}>
     <img
          className={"border border-gray-100 shadow-sm " +" " + shapeClass}
          src={Avatar}
          alt="user img"
        />
         <div className={"absolute bottom-0 right-0  border-2 border-white rounded-full bg-gray-400 z-10" + " " + statusClass + " " + img}></div>
      </div>
  </>
);
}

Avatars.defaultProps = {
  size: "medium",
  shape: "circular",
};

export default React.memo(Avatars);