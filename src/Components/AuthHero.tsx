import React from 'react'
import img from "../images/shield-1086703_960_720.webp";
const AuthHero: React.FC = () => {
    return (
      <div className="fixed right-0 hidden md:block w-1/2 bg-black h-screen text-white text-3xl text-center z-10">
        <img className="px-16 py-4 " src={img} alt="" />
     { console.log("hero render")}
      </div>
    );
}

export default React.memo(AuthHero)
