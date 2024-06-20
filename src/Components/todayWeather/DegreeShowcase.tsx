/* eslint-disable @typescript-eslint/no-explicit-any */
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendar } from "react-icons/tb";
// import { stateType } from "../../Redux/weatherSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/createStore";


const iconMap: { [key: string]: string } = {
  "01d": "wi-day-sunny",
  "01n": "wi-night-clear",
  "02d": "wi-day-cloudy",
  "02n": "wi-night-alt-cloudy",
  "03d": "wi-cloud",
  "03n": "wi-cloud",
  "04d": "wi-cloudy",
  "04n": "wi-cloudy",
  "09d": "wi-showers",
  "09n": "wi-showers",
  "10d": "wi-day-rain",
  "10n": "wi-night-rain",
  "11d": "wi-thunderstorm",
  "11n": "wi-thunderstorm",
  "13d": "wi-snow",
  "13n": "wi-snow",
  "50d": "wi-fog",
  "50n": "wi-fog",
};

const DegreeShowcase = () => {
  const data = useSelector((state:RootState)=>state.weather)

  if (data?.status === "loading") {
    <div>Loading....</div>;
  }
  
  if (data?.status === "failed") {
    throw new Error("data fetching failed");
  }
  

    const {weatherStatement}:any = data && data.weatherData
    
    const date = new Date( weatherStatement && weatherStatement.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      day: "numeric",
      month: "long",
    });


  return (
    <div className=" max-w-96 bg-custom-color/50 backdrop-blur-sm lg:col-span-4 col-span-12 p-5 rounded-md text-white flex flex-col justify-between gap-3">
      {/* cols-span-4 left bar */}
      {data.status === "loading" ? (
        <h1 >
          Loading...
        </h1>
      ) : ( weatherStatement && (
        <div className=" flex flex-col justify-between gap-3">
          <div className=" flex gap-2 justify-start items-center ">
            <CiLocationOn />
            <p className=" text-lg ">
              {" "}
              {weatherStatement.name}, {weatherStatement.country}{" "}
            </p>
          </div>
          <div className=" flex gap-2 justify-start items-center">
            <TbCalendar />
            <p>{date}</p>
          </div>
          <hr className=" border border-white/30 " />
          <div className=" flex items-center justify-between">
            <div className=" flex justify-center items-center">
              <i className={`wi ${iconMap[weatherStatement.weather[0].icon]} text-6xl`}></i>
            </div>
            <div className=" space-y-1">
              <h1 className="relative text-7xl font-bold pr-3">
                {Math.ceil(weatherStatement.main.temp)}°{" "}
                <sup className=" absolute right-0 top-3 text-sm ">
                  {weatherStatement.units == "metric" ? "C" : "F"}
                </sup>
              </h1>
              <p className=" text-sm "> RealFeel® {weatherStatement.feels_like}° </p>
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className=" flex gap-2 items-center justify-center ">
              <BiUpArrowAlt size={20} />
              <h1>MAX</h1>
              <p className=" font-bold text-xl ">{weatherStatement.main.temp_max}°</p>
            </div>
            <div className=" flex gap-2 items-center justify-center ">
              <BiDownArrowAlt size={20} />
              <h1>MIN</h1>
              <p className=" font-bold text-xl ">{weatherStatement.main.temp_min}°</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DegreeShowcase;
