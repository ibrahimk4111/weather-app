interface WeatherData {
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  wind: {
    speed: number;
  };
  name: string;
}

interface HourlyResponse {
  city: {
    name: string;
  };
  list: HourlyData[];
}

interface HourlyData {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
}

interface AirPollutionData {
  list: {
    main: {
      aqi: number;
    };
  }[];
}

export interface hourlyStatementsData {
  dateFromHourly: number;
  dt_txt: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  description: string;
  icon: string;
  HourlyCondition: string;
}

export interface FullWeatherData {
  name: string;
  areaName: string;
  country: string;
  dt: number;
  timezone: number;
  sunrise: number;
  sunset: number;
  visibility: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  description: string;
  icon: string;
  cityCondition: string;
  airPollution: number;
  speed: number;
  hourlyStatementsData: hourlyStatementsData[];
  units: string;
}


const API_KEY = "0fefc06467470fbdc6c6545407c150be";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const apiCall = async (searchType: string, searchParams: object): Promise<any> => {
  const url = new URL(`${BASE_URL}${searchType}`);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  }).toString();
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Api call error: ", error);
  }
};

export const getWeather = async (city: string, units: "metric" | "imperial" ): Promise<FullWeatherData> => {
  const data = (await apiCall("weather", { q: city })) as WeatherData;
  const { lat, lon } = data.coord;
  const weatherStatement = await apiCall("weather", { lat, lon, units }) as WeatherData;
  const hourlyStatement = (await apiCall("forecast", { lat, lon, units })) as HourlyResponse;
  const airPollutionStatement = (await apiCall("air_pollution", { lat, lon, units })) as AirPollutionData;

  console.log({weatherStatement, hourlyStatement, airPollutionStatement})
  // Data from air pollution statement
  const { main: airCondition } = airPollutionStatement.list[0];
  const airPollution = airCondition.aqi;

  // Data from hourly statement
  const { city: cityName, list } = hourlyStatement;
  const { name } = cityName;
  const hourlyStatementsData = list.map((item) => {
    const { dt:dateFromHourly, dt_txt, main, weather } = item;
    const { temp, temp_max, temp_min } = main;
    const { description, icon, main: HourlyCondition } = weather[0];

    return {
      dateFromHourly,
      dt_txt,
      temp,
      temp_max,
      temp_min,
      description,
      icon,
      HourlyCondition,
    };
  });

  // Data from weather statement
  const { dt, name: areaName, main, sys, timezone, visibility, weather, wind } =
    weatherStatement;
  const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main;
  const { country, sunrise, sunset } = sys;
  const { description, icon, main: cityCondition } = weather[0];
  const { speed } = wind;


  return {
    name,
    areaName,
    country,
    dt,
    timezone,
    sunrise,
    sunset,
    visibility,
    feels_like,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
    description,
    icon,
    cityCondition,
    airPollution,
    speed,
    hourlyStatementsData,
    units
  };
};