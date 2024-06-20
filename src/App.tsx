import "./App.css";
import MainDegreeShowCase from "./Components/TodayWeather/MainDegreeShowCase";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import rainy from "../public/rainy.jpg";
// import clear from "../public/clear.jpg";
import NextDays from "./Components/NextDays/NextDays";
function App() {
  
  return (
    <div className="relative min-h-screen py-3">
      <div className=" fixed top-0 left-0 overflow-hidden -z-50">
        <img
          loading="lazy"
          decoding="async"
          src={rainy}
          alt="clear"
          className=" w-full min-h-screen h-full object-cover "
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
