import { ChangeEvent, useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/createStore";
import { fetchData } from "../Redux/fetchData";

interface CitySuggestion {
  name: string;
  country: string;
  state?: string;
}

const SearchBar = () => {
  const status = useSelector((state:RootState)=>state.weather.status);
  const dispatch = useDispatch<AppDispatch>();
  const [inputText, setInputeText] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);

  const fetchCitySuggestions = async (query: string) => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=0fefc06467470fbdc6c6545407c150be`
    );
    const data = await res.json();
    if(status === 'succeed'){
      setSuggestions([])
    }
    setSuggestions(data);
  };

  const inputHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const text = e.target.value as string;
      setInputeText(text);
      if (inputText.length > 2) {
        await fetchCitySuggestions(text);
      } else {
        setSuggestions([]);
      }
    }
  };

  const selectCityHandler = (cityName: string) => {
    setInputeText(cityName);
    setCity(inputText);
    setSuggestions([]);
    setInputeText("")
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputText);
    setInputeText("");
    setSuggestions([]);
  };

  useEffect(() => {
    dispatch(fetchData({ city, units }));
  }, [dispatch, city, units]);

  return (
    <div className=" py-8 ">
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
            onSubmit={submitHandler}
            className=" flex items-center justify-start w-full"
          >
            <div className=" relative w-full">
              <input
                value={inputText}
                onChange={(e) => inputHandler(e)}
                placeholder= {city.length>2 ? city : "Search for city..."}
                className=" w-full bg-custom-color/30 backdrop-blur-sm placeholder:text-slate-200 text-slate-200 p-2 rounded-l-md focus:ring-1 ring-slate-300 outline-none"
              />
              {suggestions.length > 0 && (
                <ul className="absolute bg-white text-black w-full lg:max-w-[60%] max-h-60 overflow-y-auto rounded-md mt-1 shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => selectCityHandler(suggestion.name)}
                      className="cursor-pointer p-2 hover:bg-gray-200"
                    >
                      {suggestion.name},{" "}
                      {suggestion.state && `${suggestion.state},`}{" "}
                      {suggestion.country}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              type="submit"
              className=" flex justify-center items-center cursor-pointer bg-custom-color/30 hover:bg-custom-color/80 rounded-r-md"
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
              onClick={() => setUnits("metric")}
              className={`${units == "metric"? " bg-custom-color/80": "bg-slate-500/80"} backdrop-blur-sm cursor-pointer px-3 py-1 rounded-l-md transition-all ease-in duration-500`}
            >
              °C
            </p>
            <p
              onClick={() => setUnits("imperial")}
              className={`cursor-pointer px-3 py-1 rounded-r-md ${ units == "imperial"? "bg-custom-color/80": "bg-slate-500/80"} backdrop-blur-sm transition-all ease-in duration-500`}
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
