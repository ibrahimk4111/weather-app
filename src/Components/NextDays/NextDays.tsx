import { BiCloudRain, BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const NextDays = () => {
  return (
    <div className="container mt-5">
      <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md p-5 space-y-3 overflow-hidden">
        <h1 className=" font-semibold uppercase text-xl text-white ">
          Next 5 Days Forecast
        </h1>
        <div className=" flex gap-5 overflow-y-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="min-w-40 w-full bg-custom-color/50 backdrop-blur-sm p-3 rounded-md text-white "
            >
              <div className="flex justify-between items-center">
                <div className=" flex flex-col justify-between items-start gap-2">
                  <h1 className=" text-lg ">Thu 9</h1>
                  <BiCloudRain size={35} />
                </div>
                <div className=" flex flex-col justify-between h-20 ">
                  <div className=" flex gap-1 items-center justify-end ">
                    <h1>
                      <BiUpArrowAlt size={20} />
                    </h1>
                    <p className=" font-bold ">38°</p>
                  </div>
                  <div className=" flex gap-1 items-center justify-end ">
                    <h1>
                      <BiDownArrowAlt size={20} />
                    </h1>
                    <p className=" font-bold ">18°</p>
                  </div>
                </div>
              </div>
              <p className=" text-center text-sm ">Mostly clear</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextDays;
