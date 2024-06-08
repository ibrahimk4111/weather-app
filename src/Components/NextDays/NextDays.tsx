import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FullWeatherData, hourlyStatementsData } from "../Redux/ApiCall";
interface IProps {
  data: FullWeatherData | null;
}

const NextDays = ({ data }: IProps) => {
  let hourlyData:hourlyStatementsData[] = [];
  if (!data) {
    console.log("data didn't fetched yet. Wait.............");
  } else {
    const {hourlyStatementsData} = data;
    hourlyData = hourlyStatementsData
  }
  
  const date = (dateFromHourly:number): string => {
    const result = new Date(dateFromHourly * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric"
    })
    return result;
  }
  const time = (dateFromHourly:number): string => {
    const result = new Date(dateFromHourly * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    })
    return result;
  }

  console.log({hourlyData})
  return (
    <>
      {data && (
        <div className="container mt-5">
          <div className=" bg-custom-color/30 backdrop-blur-sm rounded-md p-5 space-y-3 overflow-hidden">
            <h1 className=" font-semibold uppercase text-xl text-white ">
              Next 5 Days Forecast
            </h1>
            <div className=" flex gap-5 overflow-y-auto">
              {hourlyData.map((item, index) => (
                <div
                  key={index}
                  className="min-w-48 w-full bg-custom-color/50 backdrop-blur-sm p-3 rounded-md text-white "
                >
                  <div>
                    <div className=" flex flex-col justify-center items-center">
                      <h1 className=" text-lg ">{time(item.dateFromHourly)}{" "}|{" "}{date(item.dateFromHourly)}</h1>
                      <img src={item.iconForHourlyUrl} alt={item.description} />
                    </div>
                    <div className=" flex justify-between ">
                      <div className=" flex gap-1 items-center justify-end ">
                        <h1>
                          <BiUpArrowAlt size={20} />
                        </h1>
                        <p className=" font-bold ">{item.temp_max}°</p>
                      </div>
                      <div className=" flex gap-1 items-center justify-end ">
                        <h1>
                          <BiDownArrowAlt size={20} />
                        </h1>
                        <p className=" font-bold ">{item.temp_min}°</p>
                      </div>
                    </div>
                  </div>
                  <p className=" text-center text-sm ">{item.description}</p>
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
