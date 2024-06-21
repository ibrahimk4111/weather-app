/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/createStore";
import { fetchData } from "../../Redux/fetchData";

const NextDays = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.weather);

  if (data.status === "idle") {
    dispatch(fetchData({ city: "London", units: "metric" })); // Replace with actual params
  }

  if (data?.status === "loading") {
    <div>Loading....</div>;
  }

  if (data?.status === "failed") {
    console.log("data fetching failed");
  }

  const nextFiveDays = [];
  if (data?.status === "succeed") {
    const { hourlyStatement }: any = data.weatherData;
    if (hourlyStatement) {
      const { list } = hourlyStatement;
      for (let i = 0; i < list.length - 2; i++) {
        if (
          list[i].dt_txt.split(" ")[0].split("-")[2] !==
          list[i + 1].dt_txt.split(" ")[0].split("-")[2]
        ) {
          nextFiveDays.push(list[i]);
        }
      }
      nextFiveDays.push(list[list.length - 1]);
    }
  }

  const date = (dateFromHourly: number): string => {
    const result = new Date(dateFromHourly * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
    });
    return result;
  };

  return (
    <div className="container mt-5 text-sm">
      {data.status === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        <div className=" overflow-hidden">
          <h1 className=" font-semibold uppercase text-white mb-2 ">
            5 Days Forecast
          </h1>
          <div className=" flex gap-5 overflow-y-auto">
            {/* current day */}
            {nextFiveDays.length > 0 && (
              <div className="mb-2 min-w-60 max-w-72 w-full bg-custom-color/30 backdrop-blur-sm p-2 rounded-md text-white ">
                <div className=" flex justify-between">
                  <div className=" flex flex-col justify-center items-center gap-1">
                    <h1 className=" ">{date(nextFiveDays[0].dt)}</h1>
                    <div className=" bg-gradient-to-tl from-red-500 via-tomato-400 to-yellow-500 rounded-full w-12 h-12">
                      <img
                        src={`https://openweathermap.org/img/wn/${nextFiveDays[0].weather[0].icon}@2x.png`}
                        alt="ima"
                      />
                    </div>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className=" font-bold text-xl ">
                      {nextFiveDays[0].weather[0].main}
                    </p>
                  </div>
                  <div className=" flex flex-col justify-between ">
                    <div className=" flex gap-1 items-center justify-end ">
                      <p className=" font-semibold ">
                        {nextFiveDays[0].main.temp_max}°
                      </p>
                    </div>
                    <div className=" flex gap-1 items-center justify-end ">
                      <p className=" font-semibold ">
                        {nextFiveDays[0].main.temp_min}°
                      </p>
                    </div>
                  </div>
                </div>
                <p className=" text-center text-sm mt-2 ">
                  {nextFiveDays[0].weather[0].description}
                </p>
              </div>
            )}

            {/* next five  */}
            {nextFiveDays &&
              nextFiveDays.slice(1, 6).map((item: any, index: number) => (
                <div
                  key={index}
                  className="mb-2 w-full min-w-36 max-w-40 bg-custom-color/30 backdrop-blur-sm p-2 rounded-md text-white "
                >
                  <div className=" flex justify-between">
                    <div className=" flex flex-col justify-center items-center gap-1">
                      <h1 className=" ">{date(item.dt)}</h1>
                      <div className=" bg-gradient-to-tl from-red-500 via-tomato-400 to-yellow-500 rounded-full w-12 h-12">
                        <img
                          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                          alt="ima"
                        />
                      </div>
                    </div>
                    <div className=" flex flex-col justify-between ">
                      <div className=" flex gap-1 items-center justify-end ">
                        <p className=" font-semibold ">{item.main.temp_max}°</p>
                      </div>
                      <div className=" flex gap-1 items-center justify-end ">
                        <p className=" font-semibold ">{item.main.temp_min}°</p>
                      </div>
                    </div>
                  </div>
                  <p className=" text-center text-sm mt-2 ">
                    {item.weather[0].description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NextDays;
