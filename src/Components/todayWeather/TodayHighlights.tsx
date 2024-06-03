import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsFillSunriseFill, BsSunsetFill } from "react-icons/bs";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiDew } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
import sunriseandsunset from "../../../public/assets/sunriseandsunset.svg";

const TodayHighlights = () => {
  return (
    <>
      {/* cols-span-8 right bar */}
      <div className=" bg-custom-color/30 backdrop-blur-sm lg:col-span-8 col-span-12 p-5 rounded-md text-white space-y-3 ">
        <h1 className=" mb-3 text-slate-200 ">Today's Hightlights</h1>
        <hr className=" border border-white/30 " />
        <div className=" grid grid-cols-12 gap-3">
          <h1 className="text-slate-300 p-5 bg-custom-color/30 text-4xl rounded-lg font-semibold lg:col-span-7 sm:col-span-6 col-span-12 flex justify-center items-center">
            Mostly Cloud
          </h1>
          <div className=" flex w-full gap-2 bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-2 lg:col-span-5 sm:col-span-6 col-span-12">
            <div className="w-full flex flex-col justify-between items-center ">
              <BsFillSunriseFill size={35} fill=" yellow " />
              <span>Sunrise</span>
              <span className=" font-bold text-xl ">5:30</span>
            </div>
            <img src={sunriseandsunset} alt="sunrise and sunset" />
            <div className="w-full flex flex-col justify-between items-center ">
              <BsSunsetFill size={35} fill=" orange " />
              <span>Sunset</span>
              <span className=" font-bold text-xl ">5:30</span>
            </div>
          </div>
        </div>

        {/* highlights tabs */}
        <div className=" md:columns-3 columns-2 space-y-2 ">
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-1 flex justify-between items-center ">
            <p className=" flex gap-2 items-center">
              <AiOutlineExclamationCircle />
              <span>Air quality</span>
            </p>
            <span className=" font-bold text-xl ">66</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-1 flex justify-between items-center ">
            <p className=" flex gap-2 items-center">
              <FiWind />
              <span>Wind</span>
            </p>
            <span className=" font-bold text-xl ">4 km/h</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-1 flex justify-between items-center ">
            <p className=" flex gap-2 items-center">
              <AiOutlineExclamationCircle />
              <span>Humidity</span>
            </p>
            <span className=" font-bold text-xl ">88%</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-1 flex justify-between items-center ">
            <p className=" flex gap-2 items-center">
              <MdVisibility />
              <span>Visibility</span>
            </p>
            <span className=" font-bold text-xl ">3.1 mi</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-1 flex justify-between items-center ">
            <p className=" flex gap-2 items-center">
              <FaThermometerEmpty />
              <span>Pressure </span>
            </p>
            <span className=" font-bold text-xl ">29.69 in</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-1 flex justify-between items-center ">
            <p className=" flex gap-2 items-center">
              <GiDew />
              <span>Dew point</span>
            </p>
            <span className=" font-bold text-xl ">75°</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayHighlights;
