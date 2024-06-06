import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiDew } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
import sunriseandsunset from "/assets/sunriseandsunset.svg";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";

const TodayHighlights = () => {
  return (
    <>
      {/* cols-span-8 right bar */}
      <div className=" text-sm bg-custom-color/30 backdrop-blur-sm lg:col-span-8 col-span-12 p-2 rounded-md text-white space-y-3 ">
        <h1 className=" mb-3 text-slate-200 ">Today's Hightlights</h1>
        <hr className=" border border-white/30 " />
        <div className=" grid grid-cols-12 gap-3">
          <h1 className=" p-5 bg-custom-color/50 text-4xl rounded-lg font-semibold lg:col-span-7 sm:col-span-6 col-span-12 flex justify-center items-center">
            Mostly Cloud
          </h1>
          <div className=" flex w-full gap-2 bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-2 lg:col-span-5 sm:col-span-6 col-span-12">
            <div className="w-full flex flex-col justify-between items-center ">
              <WiSunrise size={55}  />
              <span className=" text-xs sm:text-sm ">Sunrise</span>
              <span className=" font-bold text-sm sm:text-base ">5:30</span>
            </div>
            <img src={sunriseandsunset} alt="sunrise and sunset" />
            <div className="w-full flex flex-col justify-between items-center ">
              <WiSunset size={55} />
              <span className=" text-xs sm:text-sm ">Sunset</span>
              <span className=" font-bold text-sm sm:text-base ">5:30</span>
            </div>
          </div>
        </div>

        {/* highlights tabs */}
        <div className=" md:columns-3 columns-2 space-y-2 gap-1 md:gap-5">
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
            <p className=" flex gap-1 items-center">
              <AiOutlineExclamationCircle />
              <span className=" text-xs sm:text-sm ">Air quality</span>
            </p>
            <span className=" font-bold text-sm sm:text-base ">66</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
            <p className=" flex gap-1 items-center">
              <FiWind />
              <span className=" text-xs sm:text-sm ">Wind</span>
            </p>
            <span className=" font-bold text-sm sm:text-base ">4 km/h</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
            <p className=" flex gap-1 items-center">
              <WiHumidity size={20} />
              <span className=" text-xs sm:text-sm ">Humidity</span>
            </p>
            <span className=" font-bold text-sm sm:text-base ">88%</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
            <p className=" flex gap-1 items-center">
              <MdVisibility />
              <span className=" text-xs sm:text-sm ">Visibility</span>
            </p>
            <span className=" font-bold text-sm sm:text-base ">3.1 mi</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
            <p className=" flex gap-1 items-center">
              <FaThermometerEmpty />
              <span className=" text-xs sm:text-sm ">Pressure </span>
            </p>
            <span className=" font-bold text-sm sm:text-base ">29.69 in</span>
          </div>
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
            <p className=" flex gap-1 items-center">
              <GiDew />
              <span className=" text-xs sm:text-sm ">Dew point</span>
            </p>
            <span className=" font-bold text-sm sm:text-base ">75°</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayHighlights;
