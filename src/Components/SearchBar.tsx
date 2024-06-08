import { ChangeEvent, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
interface IProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setUnits: React.Dispatch<React.SetStateAction<"metric" | "imperial">>;
}

const SearchBar = ({ setCity, setUnits }: IProps) => {
  const [toggleDegree, setToggleDegree] = useState<"metric" | "imperial">(
    "metric"
  );
  const [inputText, setInputeText] = useState<string>("");
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const text = e.target.value;
      setInputeText(text);
    }
  };
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputText);
  };

  const toggleHandler = (unit:"metric" | "imperial") =>{
    setToggleDegree(unit)
    setUnits(unit)
  }
  return (
    <div>
      {/* current location icons for search */}
      <div className=" z-[1000] fixed bottom-10 right-10 bg-green-500/40 backdrop-blur-sm text-white rounded-full p-2  ">
        <BiCurrentLocation
          size={25}
          className=" cursor-pointer hover:scale-125 transition-all ease-in duration-500"
        />
      </div>

      {/* city search bar */}
      <div className=" container ">
        <div className=" flex justify-between items-center gap-5">
          <form
            onSubmit={formHandler}
            className=" flex items-center justify-start w-full"
          >
            <input
              value={inputText}
              onChange={(e) => inputHandler(e)}
              type=" text "
              placeholder="Search for city..."
              className=" w-full bg-custom-color/50 backdrop-blur-sm placeholder:text-slate-200 text-slate-200 p-2 rounded-l-md focus:ring-1 ring-slate-300 outline-none"
            />
            <button
              type="submit"
              className=" flex justify-center items-center cursor-pointer bg-custom-color/50 hover:bg-custom-color/80 rounded-r-md"
            >
              <CiSearch
                strokeWidth={1}
                className="text-white w-10 h-10 p-2 hover:scale-125 transition-all ease-in"
              />
            </button>
          </form>

          {/* Fahrenheit (°F) Celsius (°C) */}
          <div className=" flex text-white">
            <p
              onClick={()=>toggleHandler("metric")}
              className={`${
                toggleDegree == "metric"
                  ? " bg-custom-color/80"
                  : "bg-slate-500/80"
              } backdrop-blur-sm cursor-pointer px-3 py-1 rounded-l-md transition-all ease-in duration-500`}
            >
              °C
            </p>
            <p
              onClick={()=>toggleHandler("imperial")}
              className={`cursor-pointer px-3 py-1 rounded-r-md ${
                toggleDegree == "imperial"
                  ? "bg-custom-color/80"
                  : "bg-slate-500/80"
              } backdrop-blur-sm transition-all ease-in duration-500`}
            >
              °F
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchBar;
