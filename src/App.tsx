/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import MainDegreeShowCase from "./Components/TodayWeather/MainDegreeShowCase";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import NextDays from "./Components/NextDays/NextDays";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/createStore";
import { weatherImages } from "./utils/backgroundImages";
import { useEffect, useState } from "react";
import { fetchData } from "./Redux/fetchData";
function App() {
  const dispatch = useDispatch<AppDispatch>()
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const data = useSelector((state: RootState) => state.weather);
  const { weatherStatement }: any = data.weatherData;

  if(weatherStatement?.status === "wrong url"){
    dispatch(fetchData({city: "London", units: "metric"}))
    console.log("1st call")
  }

  if (data?.status === "failed") {
    dispatch(fetchData({city: "London", units: "metric"}))
    console.log("2nd call")
  }
  
  const weatherCondition = weatherStatement?.weather[0]?.main as string;

  useEffect(() => {
    const img = async () => {
      if (weatherCondition) {
        const imgData = weatherImages.find((item) => {
          return item.condition.includes(weatherCondition?.toLowerCase());
        });
        if (imgData) {
          setBackgroundImage(imgData?.imageUrl);
        }
      }
    };
    img();
  }, [weatherCondition]);

  return (
    <div className="relative min-h-screen py-3">
      <div className=" fixed top-0 left-0 h-full overflow-hidden -z-50">
        <img
          loading="lazy"
          decoding="async"
          src={backgroundImage}
          alt={backgroundImage}
          className=" min-h-full w-full object-cover"
        />
      </div>
      <NavBar />
      <SearchBar />
      <MainDegreeShowCase />
      <NextDays />
      {/* <HourlyForcast /> */}
    </div>
  );
}

export default App;
