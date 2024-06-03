import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [toggleDegree, setToggleDegree] = useState<string | null>("c");
  return (
    <div>
      {/* current location icons for search */}
      <div className=" z-[1000] fixed bottom-10 right-10 bg-green-500/40 backdrop-blur-sm text-white rounded-full p-2  ">
        <BiCurrentLocation
          size={25}
          className=" cursor-pointer hover:scale-125 transition-all ease-in duration-500"
        />
      </div>

      {/* city search bar */}
      <div className=" container ">
        <div className=" flex justify-between items-center gap-5">
          <div className=" flex items-center justify-start w-full">
            <input
              name="address"
              type=" text "
              placeholder="Search for city..."
              className=" w-full bg-custom-color/30 backdrop-blur-sm placeholder:text-slate-200 text-slate-200 p-2 rounded-l-md focus:ring-1 ring-slate-300 outline-none"
            />
            <div className=" flex justify-center items-center cursor-pointer bg-custom-color/30 hover:bg-custom-color/60 rounded-r-md">
              <CiSearch
                strokeWidth={1}
                className="text-white w-10 h-10 p-2 hover:scale-125 transition-all ease-in"
              />
            </div>
          </div>

          {/* searched cities */}
          <div className=" gap-2 md:flex hidden">
            {Array.from({ length: 5 }).map((item, index) => (
              <div
                key={index}
                className=" cursor-pointer flex items-center justify-between gap-2 h-10 w-auto bg-custom-color/30 hover:bg-custom-color/80 backdrop-blur-sm rounded-md p-2 text-white transition-all ease-in duration-300 "
              >
                <h1>Dhaka</h1>
                <p>{index}°</p>
              </div>
            ))}
          </div>

          {/* Fahrenheit (°F) Celsius (°C) */}
          <div className=" flex text-white">
            <p
              onClick={() => setToggleDegree("c")}
              className={`${
                toggleDegree == "c" ? " bg-custom-color/80" : "bg-slate-500/80"
              } backdrop-blur-sm cursor-pointer px-3 py-1 rounded-l-md transition-all ease-in duration-500`}
            >
              °C
            </p>
            <p
              onClick={() => setToggleDegree("f")}
              className={`cursor-pointer px-3 py-1 rounded-r-md ${
                toggleDegree == "f" ? "bg-custom-color/80" : "bg-slate-500/80"
              } backdrop-blur-sm transition-all ease-in duration-500`}
            >
              °F
            </p>
          </div>
        </div>
      </div>

      {/* searched cities for small device*/}
      <div className=" md:hidden columns-3 mt-3 px-10">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            className=" cursor-pointer flex items-center justify-between gap-2 w-auto bg-custom-color/30 hover:bg-custom-color/80 backdrop-blur-sm rounded-md p-2 text-white transition-all ease-in duration-300 "
          >
            <h1>Dhaka</h1>
            <p>31°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
