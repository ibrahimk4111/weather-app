import "./App.css";
import MainDegreeShowCase from "./Components/TodayWeather/MainDegreeShowCase";
import SearchBar from "./Components/SearchBar";
// import rainy from '../public/rainy.jpg'
import HourlyForcast from "./Components/HourlyForcast/HourlyForcast";
import NavBar from "./Components/NavBar";
import NextDays from "./Components/NextDays/NextDays";
import clear from "../public/clear.jpg";
import { useEffect, useState } from "react";
import { FullWeatherData, getWeather } from "./Components/Redux/ApiCall";

export interface storedDataType {
  city: string;
  fullData: FullWeatherData;
}

function App() {
  const [storedData, setStoredData] = useState<storedDataType[]>([]);

  const [city, setCity] = useState<string>("Dhaka");
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [data, setData] = useState<FullWeatherData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const fullData = await getWeather(city, units);
      setData(fullData);
      const cityExist = storedData.some(
        (data) => data.city.toLowerCase() == city.toLowerCase()
      );
      if (!cityExist) {
        setStoredData([...storedData, { city, fullData }]);
      }
      if(storedData.length >= 2){
        setStoredData(prev=>prev.slice(2, 3))

      }
    };
    fetchData();
  }, [city, units]);

  useEffect(() => {
    // Set up the interval to clear storedData every 10 minutes (600000 ms)
    const interval = setInterval(() => {
      setStoredData([]);
    }, 600000); // 600000 ms = 10 minutes

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative min-h-screen py-5">
      <div className=" fixed top-0 left-0 overflow-hidden -z-50">
        <img
          src={clear}
          alt="clear"
          className=" w-full min-h-screen h-full object-cover "
        />
      </div>
      <NavBar />
      <SearchBar
        setCity={setCity}
        storedData={storedData}
        setUnits={setUnits}
      />
      <MainDegreeShowCase data={data} />
      <HourlyForcast />
      <NextDays />
    </div>
  );
}

export default App;
