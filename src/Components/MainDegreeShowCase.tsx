import { BiCloud } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendar } from "react-icons/tb";

const MainDegreeShowCase = () => {
  return (
    <div className=" mt-10 ">
      <div className=" container grid grid-cols-12 gap-5">
        {/* cols-span-4 left bar */}
        <div className=" bg-[#0b3631]/30 backdrop-blur-sm lg:col-span-4 p-5 rounded-md text-white space-y-3 ">
          <div className=" flex gap-2 justify-between items-center">
            <BiCloud className=" h-28 w-28" />
            <h1 className=" text-7xl font-bold ">31°</h1>
          </div>
          <div className=" flex gap-2 justify-start items-center text-sm">
            <BiCloud />
            <p>clear</p>
          </div>
          <hr className=" border border-white/30 " />
          <div className=" flex gap-2 justify-start items-center ">
            <CiLocationOn />
            <p> Dhaka, Bangladesh. </p>
          </div>
          <div className=" flex gap-2 justify-start items-center text-sm ">
            <TbCalendar />
            <p>Monday, 3 June 2024 </p>
            <p className=" font-bold">3:26 PM</p>
          </div>
        </div>

        {/* cols-span-8 right bar */}
        <div className=" bg-[#0b3631]/30 backdrop-blur-sm lg:col-span-8 p-5 rounded-md text-white space-y-3 ">
          <h1 className=" mb-3 text-slate-200 ">Today's Hightlights</h1>
          
          <div className=" columns-3 ">
            <div className=" bg-[#0b3631]/30 backdrop-blur-sm rounded-md p-2 ">
              box 1
            </div>
            <div className=" bg-[#0b3631]/30 backdrop-blur-sm rounded-md p-2 ">
              box 2
            </div>
            <div className=" bg-[#0b3631]/30 backdrop-blur-sm rounded-md p-2 ">
              box 3
            </div>
          </div>
          <div className=" columns-3 ">
            <div className=" bg-[#0b3631]/30 backdrop-blur-sm rounded-md p-2 ">
              box 1
            </div>
            <div className=" bg-[#0b3631]/30 backdrop-blur-sm rounded-md p-2 ">
              box 2
            </div>
            <div className=" bg-[#0b3631]/30 backdrop-blur-sm rounded-md p-2 ">
              box 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDegreeShowCase;
