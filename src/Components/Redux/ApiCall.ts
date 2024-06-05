const API_KEY = "0fefc06467470fbdc6c6545407c150be";

interface FormattedDataType {
  coord: {
    lon: number;
    lat: number;
  };
  country: string;
  name: string;
  sunrise: number;
  sunset: number;
  timezone: number;
}

let formatedData: FormattedDataType;

export const apiCallwithCity = async () => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=Dhaka&appid=${API_KEY}`
  );
  if (response.ok) {
    const data = await response.json();
    const { coord, country, name, sunrise, sunset, timezone } = data.city;
    formatedData = {
      coord,
      country,
      name,
      sunrise,
      sunset,
      timezone,
    };
  }

  return formatedData;
};
