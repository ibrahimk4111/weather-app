import fewClouds from '../../public/few clouds.jpg'
import clear from '../../public/clear.jpg'
import haze from '../../public/haze.jpg'
import rainy from '../../public/rainy.jpg'
import scatteredClouds from '../../public/scattered clouds.jpg'
import thunderstorm from '../../public/thunderstorm.jpg'
import brokenClouds from '../../public/broken clouds.jpg'
import snow from '../../public/snow.jpg'
import mist from '../../public/mist.jpg'

interface WeatherImage {
  condition: string;
  imageUrl: string;
}

export const weatherImages: WeatherImage[] = [
  {
    condition: "haze",
    imageUrl: haze,
  },
  {
    condition: "clear sky",
    imageUrl: clear,
  },
  {
    condition: "few clouds",
    imageUrl: fewClouds,
  },
  {
    condition: "scattered clouds",
    imageUrl: scatteredClouds,
  },
  {
    condition: "broken clouds",
    imageUrl: brokenClouds,
  },
  {
    condition: "shower rain",
    imageUrl: rainy,
  },
  {
    condition: "thunderstorm",
    imageUrl: thunderstorm,
  },
  {
    condition: "snow",
    imageUrl: snow,
  },
  {
    condition: "mist",
    imageUrl: mist,
  },
];