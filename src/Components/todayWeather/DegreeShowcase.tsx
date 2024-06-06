import { BiCloud, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendar } from "react-icons/tb";

const DegreeShowcase = () => {
  return (
    <>
      {/* cols-span-4 left bar */}
      <div className=" max-w-96 bg-custom-color/50 backdrop-blur-sm lg:col-span-4 col-span-12 p-5 rounded-md text-white flex flex-col justify-between gap-3">
        <div className=" flex gap-2 justify-start items-center ">
          <CiLocationOn />
          <p className=" text-lg "> Dhaka, Bangladesh. </p>
        </div>
        <div className=" flex gap-2 justify-start items-center">
          <TbCalendar />
          <p>Monday, 3 June 2024 </p>
          <p>|</p>
          <p className=" font-bold"> 3:26 PM</p>
        </div>
        <hr className=" border border-white/30 " />
        <div className=" flex items-center justify-between">
          <BiCloud className=" h-28 w-28" />
          <div className=" space-y-1">
            <h1 className="relative text-7xl font-bold pr-3">
              21° <sup className=" absolute right-0 top-3 text-sm ">C</sup>
            </h1>
            <p className=" text-sm "> RealFeel® 33° </p>
          </div>
        </div>
        <div className=" flex justify-between items-center ">
          <div className=" flex gap-2 items-center justify-center ">
            <BiUpArrowAlt size={20} />
            <h1>MAX</h1>
            <p className=" font-bold text-xl ">38°</p>
          </div>
          <div className=" flex gap-2 items-center justify-center ">
            <BiDownArrowAlt size={20} />
            <h1>MIN</h1>
            <p className=" font-bold text-xl ">18°</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DegreeShowcase;
