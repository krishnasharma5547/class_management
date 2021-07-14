import React from 'react'

const AuthHero: React.FC = () => {
    return (
      <div className="w-1/2 bg-gray-400 h-screen">
        this is AuthHero Section
        {console.log("hero run")}
      </div>
    );
}

export default React.memo(AuthHero)
