import { BiCloud } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendar } from "react-icons/tb";

const DegreeShowcase = () => {
  return (
    <>
      {/* cols-span-4 left bar */}
      <div className=" max-w-96 bg-custom-color/30 backdrop-blur-sm lg:col-span-4 col-span-12 p-5 rounded-md text-white flex flex-col justify-between">
        <div className=" flex gap-2 justify-start items-center ">
          <CiLocationOn />
          <p className=" text-xl "> Dhaka, Bangladesh. </p>
        </div>
        <hr className=" border border-white/30 " />
        <div className=" flex items-center justify-between">
          <BiCloud className=" h-36 w-36" />
          <div className=" space-y-5 ">
            <h1 className=" text-7xl font-bold ">21°</h1>
            <p className="text-right"> RealFeel® 33° </p>
          </div>
        </div>
        <div className=" flex gap-2 justify-start items-center ">
          <TbCalendar />
          <p>Monday, 3 June 2024 </p>
          <p className=" font-bold">3:26 PM</p>
        </div>
      </div>
    </>
  );
};

export default DegreeShowcase;
