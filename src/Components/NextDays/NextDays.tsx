import { FullWeatherData, hourlyStatementsData } from "../Redux/ApiCall";
interface IProps {
  data: FullWeatherData | null;
}

const NextDays = ({ data }: IProps) => {
  const date = (dateFromHourly: number): string => {
    const result = new Date(dateFromHourly * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
    });
    return result;
  };

  const nextFiveDayData: hourlyStatementsData[] = [];
  if (!data) {
    console.log("data didn't fetched yet. Wait.............");
  } else {
    const { hourlyStatementsData } = data;
    // nextFiveDayData = hourlyStatementsData;
    for (let i = 0; i < hourlyStatementsData.length - 1; i++) {
      if (
        hourlyStatementsData[i].dt_txt.split(" ")[0] !==
        hourlyStatementsData[i + 1].dt_txt.split(" ")[0]
      ) {
        nextFiveDayData.push(hourlyStatementsData[i]);
      }
    }
  }

  return (
    <>
      {data && (
        <div className="container mt-5 text-sm">
          <div className=" overflow-hidden">
            <h1 className=" font-semibold uppercase text-white mb-2 ">
              5 Days Forecast
            </h1>
            <div className=" flex gap-5 overflow-y-auto">
              {nextFiveDayData.map((item, index) => (
                <div
                  key={index}
                  className="mb-2 min-w-40 w-full bg-custom-color/50 backdrop-blur-sm p-2 rounded-md text-white "
                >
                  <div className=" flex justify-between">
                    <div className=" flex flex-col justify-center items-center gap-1">
                      <h1 className=" ">{date(item.dateFromHourly)}</h1>
                      <div className=" bg-gradient-to-tl from-red-500 via-tomato-400 to-yellow-500 rounded-full w-12 h-12">
                        <img
                          src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                          alt={item.description}
                        />
                      </div>
                    </div>
                    <div className=" flex flex-col justify-between ">
                      <div className=" flex gap-1 items-center justify-end ">
                        <p className=" font-semibold ">{item.temp_max}°</p>
                      </div>
                      <div className=" flex gap-1 items-center justify-end ">
                        <p className=" font-semibold ">{item.temp_min}°</p>
                      </div>
                    </div>
                  </div>
                  <p className=" text-center text-sm mt-2 ">{item.description}</p>
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
