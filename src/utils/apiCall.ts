const API_KEY = "0fefc06467470fbdc6c6545407c150be";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiCall = async (searchType: string, searchParams: object): Promise<any> => {
  const url = new URL(`${BASE_URL}${searchType}`);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  }).toString();
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      return ({status: "wrong url"})
    }
    return await response.json();
  } catch (error) {
    console.error("Api call error: ", error);
  }
};
























// import { AirPollutionData, FullWeatherData, HourlyResponse, WeatherData } from "../../utils/interfaces";

// const API_KEY = "0fefc06467470fbdc6c6545407c150be";
// const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const apiCall = async (searchType: string, searchParams: object): Promise<any> => {
//   const url = new URL(`${BASE_URL}${searchType}`);
//   url.search = new URLSearchParams({...searchParams,appid: API_KEY,}).toString();
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.error(`Error: ${response.status} ${response.statusText}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Api call error: ", error);
//   }
// };

// export const getWeather = async (city: string, units: "metric" | "imperial" ): Promise<FullWeatherData> => {
//   const data = (await apiCall("weather", { q: city }))
//   const { lat, lon } = data.coord;
//   const weatherStatement = await apiCall("weather", { lat, lon, units }) as WeatherData;
//   const hourlyStatement = (await apiCall("forecast", { lat, lon, units })) as HourlyResponse;
//   const airPollutionStatement = (await apiCall("air_pollution", { lat, lon, units })) as AirPollutionData;

//   // console.log({weatherStatement, hourlyStatement, airPollutionStatement})
//   // Data from air pollution statement
//   const { main: airCondition } = airPollutionStatement.list[0];
//   const airPollution = airCondition.aqi;

//   // Data from hourly statement
//   const { city: cityName, list } = hourlyStatement;
//   const { name } = cityName;
//   const hourlyStatementsData = list.map((item) => {
//     const { dt:dateFromHourly, dt_txt, main, weather } = item;
//     const splitedDateFromHourly = dt_txt.split(" ")[0]
//     const splitedTimeFromHourly = dt_txt.split(" ")[1].split(":").slice(0,2).join(":")
//     const { temp, temp_max, temp_min } = main;
//     const { description, icon, main: HourlyCondition } = weather[0];

//     return {
//       dateFromHourly,
//       splitedDateFromHourly,
//       splitedTimeFromHourly,
//       temp,
//       temp_max,
//       temp_min,
//       description,
//       icon,
//       HourlyCondition,
//     };
//   });

//   // Data from weather statement
//   const { dt, name: areaName, main, sys, timezone, visibility, weather, wind } =
//     weatherStatement;
//   const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main;
//   const { country, sunrise, sunset } = sys;
//   const { description, icon, main: cityCondition } = weather[0];
//   const { speed } = wind;


//   return {
//     name,
//     areaName,
//     country,
//     dt,
//     timezone,
//     sunrise,
//     sunset,
//     visibility,
//     feels_like,
//     humidity,
//     pressure,
//     temp,
//     temp_max,
//     temp_min,
//     description,
//     icon,
//     cityCondition,
//     airPollution,
//     speed,
//     hourlyStatementsData,
//     units
//   };
// };