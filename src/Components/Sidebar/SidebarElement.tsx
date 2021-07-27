import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
interface props {
  text: string;
  icon: any;
  arrow:boolean
}
const SidebarElement: React.FC<props> = ({ text, icon,arrow }) => {
  return (
    <>
      <div className="relative w-full  flex items-center justify-between py-3 hover:bg-gray-400 transition-all rounded-md cursor-pointer px-3 my-1">
        <div>{icon}</div>
        <div className=" font-normal  ml-4 mr-8 absolute left-8">{text}</div>
        <div>
         {arrow && <MdKeyboardArrowRight className="mt-1 "></MdKeyboardArrowRight>}
        </div>
      </div>
    </>
  );
};

export default React.memo(SidebarElement);
