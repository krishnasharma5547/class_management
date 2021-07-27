import React from "react";
import { AiOutlineHome, AiOutlineDrag } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import {
  FiCpu,
  FiTarget,
  FiAirplay,
  FiUsers,
  FiLock,
  FiMap,
  FiPieChart,
} from "react-icons/fi";
import { BiCube, BiTable, BiData } from "react-icons/bi";
import { SiGooglesheets } from "react-icons/si";
import { GiElectric } from "react-icons/gi";
import SidebarElement from "./SidebarElement";

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block fixed w-60 bg-gray-200 py-4 px-4 overflow-y-scroll h-full">
      {/* <SidebarElement>Dashboard</SidebarElement> */}
      <SidebarElement
        text={"Dashboard"}
        icon={<AiOutlineHome className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Apps "}
        icon={<FiCpu className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Components"}
        icon={<BiCube className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Font Icons"}
        icon={<GiElectric className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Font Icon"}
        icon={<FiTarget className="w-5 h-5" />}
        arrow={false}
      />
      <SidebarElement
        text={"Widgets"}
        icon={<FiAirplay className="w-5 h-5" />}
        arrow={false}
      />
      <SidebarElement
        text={"Tables"}
        icon={<BiTable className="w-5 h-5" />}
        arrow={false}
      />
      <SidebarElement
        text={"Data Tables"}
        icon={<BiData className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Forms"}
        icon={<FaWpforms className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Users"}
        icon={<FiUsers className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Pages"}
        icon={<SiGooglesheets className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Authentication"}
        icon={<FiLock className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Drag and Drop"}
        icon={<AiOutlineDrag className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Maps"}
        icon={<FiMap className="w-5 h-5" />}
        arrow={true}
      />
      <SidebarElement
        text={"Charts"}
        icon={<FiPieChart className="w-5 h-5" />}
        arrow={true}
      />
      {console.log("sidebar run")}
    </div>
  );
};
export default React.memo(Sidebar);
