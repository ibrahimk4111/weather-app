import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendar } from "react-icons/tb";
import { FullWeatherData } from "../Redux/ApiCall";

interface IProps {
  data: FullWeatherData | null;
}

const DegreeShowcase = ({ data }: IProps) => {
  let date;
  if (!data) {
    console.log("data didn't fetched yet. Wait.............");
  } else {
    date = new Date(data.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      day: "numeric",
      month: "long",
    });
  }

  return (
    <>
      {/* cols-span-4 left bar */}
      {data && (
        <div className=" max-w-96 bg-custom-color/50 backdrop-blur-sm lg:col-span-4 col-span-12 p-5 rounded-md text-white flex flex-col justify-between gap-3">
          <div className=" flex gap-2 justify-start items-center ">
            <CiLocationOn />
            <p className=" text-lg ">
              {" "}
              {data.name}, {data.country}{" "}
            </p>
          </div>
          <div className=" flex gap-2 justify-start items-center">
            <TbCalendar />
            <p>{date}</p>
          </div>
          <hr className=" border border-white/30 " />
          <div className=" flex items-center justify-between">
            <img src={data.iconUrl} alt="icon" className=" bg-white rounded-md" />
            {/* <BiCloud className=" h-28 w-28" /> */}
            <div className=" space-y-1">
              <h1 className="relative text-7xl font-bold pr-3">
                {Math.ceil(data.temp)}°{" "}
                <sup className=" absolute right-0 top-3 text-sm ">{data.units == "metric"? "C": "F"}</sup>
              </h1>
              <p className=" text-sm "> RealFeel® {data.feels_like}° </p>
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className=" flex gap-2 items-center justify-center ">
              <BiUpArrowAlt size={20} />
              <h1>MAX</h1>
              <p className=" font-bold text-xl ">{data.temp_max}°</p>
            </div>
            <div className=" flex gap-2 items-center justify-center ">
              <BiDownArrowAlt size={20} />
              <h1>MIN</h1>
              <p className=" font-bold text-xl ">{data.temp_min}°</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DegreeShowcase;
