import React from 'react'

const Sidebar: React.FC = () =>{
    return (
      <div className="h-screen w-60 bg-green-400">
        sidebar
        {console.log("sidebar run")}
      </div>
    );
}
export default React.memo(Sidebar);
