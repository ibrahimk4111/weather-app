import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [toggleDegree, setToggleDegree] = useState<string | null>("c")
  return (
    <div>
      <div className=" container ">
        <div className=" flex justify-center items-center gap-5">
          <input
            name="address"
            type=" text "
            placeholder="Search for city..."
            className="  bg-[#0b3631]/30 placeholder:text-slate-200 text-slate-200 p-2 rounded-md w-full focus:ring-1 ring-slate-300 outline-none"
          />
          <CiSearch size={25} fill="white" className=" cursor-pointer hover:scale-125 transition-all ease-in  " />
          <BiCurrentLocation size={25} fill="white" className=" cursor-pointer hover:scale-125 transition-all ease-in  " />
          <div className=" flex text-white">
            <p onClick={()=>setToggleDegree('c')} className={`cursor-pointer px-3 py-1 rounded-l-md ${toggleDegree == "c"? "bg-[#0b3631]/50":"bg-slate-400/30" } transition-all ease-in duration-500`}>°C</p>
            <p onClick={()=>setToggleDegree('f')} className={`cursor-pointer px-3 py-1 rounded-r-md ${toggleDegree == "f"? "bg-[#0b3631]/50":"bg-slate-400/30" } transition-all ease-in duration-500`}>°F</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
