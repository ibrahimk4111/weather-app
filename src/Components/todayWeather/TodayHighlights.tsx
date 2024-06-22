/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiDew } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
import sunriseandsunset from "/assets/sunriseandsunset.svg";
import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { AppDispatch, RootState } from "../../Redux/createStore";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/fetchData";

const TodayHighlights = () => {
  const data = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch<AppDispatch>()

  if (data?.status === "failed") {
    dispatch(fetchData({city: "London", units: "metric"}))
    console.log("2nd call")
  }

  const { weatherStatement, airPollutionStatement, units }: any =
    data && data.weatherData;

  const time = (dateFromHourly: number): string => {
    const result = new Date(dateFromHourly * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return result;
  };

  const dewPoint = (temperature: number, humadity: number) => {
    return (temperature - (100 - humadity) / 5).toFixed(2);
  };

  return (
    <div className=" lg:col-span-8 col-span-12 text-white">
      {/* cols-span-8 right bar */}
      {data.status === "loading" ? (
        <h1>Loading ... </h1>
      ) : (
        weatherStatement && (
          <div className=" space-y-3">
            <h1 className=" font-semibold uppercase text-white mb-2 ">
              Today's Highlights
            </h1>
            <hr className=" border border-white/30 " />
            <div className=" grid grid-cols-12 gap-3">
              <h1 className=" p-5 bg-custom-color/30 backdrop-blur-sm text-4xl rounded-lg font-semibold lg:col-span-7 sm:col-span-6 col-span-12 flex justify-center items-center">
                {weatherStatement.weather[0].description}
              </h1>
              <div className=" flex w-full gap-2 bg-custom-color/30 backdrop-blur-sm rounded-md px-3 py-2 lg:col-span-5 sm:col-span-6 col-span-12">
                <div className="w-full flex flex-col justify-between items-center ">
                  <WiSunrise size={55} />
                  <span className=" text-xs sm:text-sm ">Sunrise</span>
                  <span className=" font-bold text-sm sm:text-base ">
                    {time(weatherStatement.sys.sunrise)}
                  </span>
                </div>
                <img src={sunriseandsunset} alt="sunrise and sunset" />
                <div className="w-full flex flex-col justify-between items-center ">
                  <WiSunset size={55} />
                  <span className=" text-xs sm:text-sm ">Sunset</span>
                  <span className=" font-bold text-sm sm:text-base ">
                    {time(weatherStatement.sys.sunset)}
                  </span>
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
                <span className=" font-bold text-sm sm:text-base ">
                  {airPollutionStatement.list[0].main.aqi}
                </span>
              </div>
              <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
                <p className=" flex gap-1 items-center">
                  <FiWind />
                  <span className=" text-xs sm:text-sm ">Wind</span>
                </p>
                <span className=" font-bold text-sm sm:text-base ">
                  {weatherStatement.wind.speed} km/h
                </span>
              </div>
              <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
                <p className=" flex gap-1 items-center">
                  <WiHumidity size={20} />
                  <span className=" text-xs sm:text-sm ">Humidity</span>
                </p>
                <span className=" font-bold text-sm sm:text-base ">
                  {weatherStatement.main.humidity}%
                </span>
              </div>
              <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
                <p className=" flex gap-1 items-center">
                  <MdVisibility />
                  <span className=" text-xs sm:text-sm ">Visibility</span>
                </p>
                <span className=" font-bold text-sm sm:text-base ">
                  {weatherStatement.visibility} mi
                </span>
              </div>
              <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
                <p className=" flex gap-1 items-center">
                  <FaThermometerEmpty />
                  <span className=" text-xs sm:text-sm ">Pressure </span>
                </p>
                <span className=" font-bold text-sm sm:text-base ">
                  {weatherStatement.main.pressure} in
                </span>
              </div>
              <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md md:px-3 px-1 py-1 flex justify-between items-center ">
                <p className=" flex gap-1 items-center">
                  <GiDew />
                  <span className=" text-xs sm:text-sm ">Dew point</span>
                </p>
                <span className=" font-bold text-sm sm:text-base ">
                  {dewPoint(
                    weatherStatement.main.temp,
                    weatherStatement.main.humidity
                  )}{" "}
                  °<sup>{units == "metric" ? " c" : " f"}</sup>
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TodayHighlights;
