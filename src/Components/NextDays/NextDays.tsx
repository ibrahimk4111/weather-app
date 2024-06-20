/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/createStore";
import { useState } from "react";
import { fetchData } from "../../Redux/fetchData";

const NextDays = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.weather);

  if (data.status === "idle") {
    dispatch(fetchData({ city: "London", units: "metric" })); // Replace with actual params
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
      nextFiveDays.push(list[list.length-1])
    }
  }

  if (data?.status === "loading") {
    <div>Loading....</div>;
  }

  if (data?.status === "failed") {
    throw new Error("data fetching failed");
  }

  const date = (dateFromHourly: number): string => {
    const result = new Date(dateFromHourly * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
    });
    return result;
  };

  return (
    <>
      {data && (
        <div className="container mt-5 text-sm">
          <div className=" overflow-hidden">
            <h1 className=" font-semibold uppercase text-white mb-2 ">
              5 Days Forecast
            </h1>
            <div className=" flex gap-5 overflow-y-auto">
              {nextFiveDays.map((item: any, index: number) => (
                <div
                  key={index}
                  className="mb-2 min-w-40 w-full bg-custom-color/50 backdrop-blur-sm p-2 rounded-md text-white "
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
        </div>
      )}
    </>
  );
};

export default NextDays;
