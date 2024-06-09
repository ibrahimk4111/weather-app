import React from "react";

const NavBar: React.FC = () => {
  return (
    <div>
      <div className="container h-10 ">
        <h1 className="  font-bold text-white ">
          <span className=" px-5 bg-gradient-to-tl from-red-500 via-tomato-400 to-yellow-500 text-2xl rounded-md">WEATHER</span>_NOW
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
