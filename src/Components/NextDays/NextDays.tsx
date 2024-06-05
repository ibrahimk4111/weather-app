
import { BiCloudRain } from "react-icons/bi";

const NextDays = () => {
  return (
    <div className="container mt-5">
      <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md p-5 space-y-3">
        <h1 className=" font-semibold uppercase text-2xl text-white ">
          Next 5 Days Forecast
        </h1>
        <div className=" columns-5 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className=" bg-custom-color/50 backdrop-blur-sm flex justify-between items-center p-2 rounded-md text-white">
              <div className=" flex flex-col justify-between items-center gap-2">
                <h1 className=" text-2xl ">Thu 9</h1>
                <BiCloudRain size={55} />
                <p className=" font-semibold text-xl">Mostly clear</p>
              </div>
              <div className=" flex flex-col justify-between items-center gap-5 ">
                <div className=" flex flex-col gap-2 items-center justify-between ">
                  <h1>MAX</h1>
                  <p className=" font-bold text-xl ">38°</p>
                </div>
                <div className=" flex flex-col gap-2 items-center justify-between ">
                  <h1>MIN</h1>
                  <p className=" font-bold text-xl ">18°</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextDays;
