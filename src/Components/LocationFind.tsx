import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { fetchDataWithLatLong } from "../Redux/fetchData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/createStore";

const LocationFind = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState<string | null>(null);

  const handleFindLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const  lat = parseFloat(position.coords.latitude.toFixed(2));
          const  lon = parseFloat(position.coords.longitude.toFixed(2));
          setError(null);
          dispatch(fetchDataWithLatLong({lat, lon, units:"metric"}));
      },
      (error)=>{
        switch(error.code){
          case error.PERMISSION_DENIED:
            setError("User denied the request for Geolocation.")
            break;
          
          case error.POSITION_UNAVAILABLE:
              setError("Location information is unavailable.");
              break;
          case error.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
          
          default: 
              setError("An unknown error occurred.");
              break;
        }
      }
      )
      
    } else {
      setError("GeoLocation doesn't support by this browser");
    }
  };

  return (
    <div>
      {error && <h1>{error}</h1> }
      <div
        onClick={handleFindLocation}
        className=" z-[1000] fixed bottom-10 right-10 bg-slate-500/40 backdrop-blur-sm text-white rounded-full p-2  "
      >
        <BiCurrentLocation
          size={25}
          className=" cursor-pointer hover:scale-125 transition-all ease-in duration-500"
        />
      </div>
    </div>
  );
};

export default LocationFind;
