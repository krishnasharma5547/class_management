import React from 'react'

const TopBar: React.FC =() => {
    return <div className="h-12  bg-red-300 w-full text-center">
        This is Top bar
        {console.log("topbar run")}
        </div>;
}

export default React.memo(TopBar)