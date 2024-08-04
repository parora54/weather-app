import { convert } from "./metric";

export async function getWeather(location, apiKey) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
    { mode: "cors" }
  ).catch((error) => console.log(error)); //FIXME: fix error handling

  const weatherData = await response.json();

  const currentConditionsData = {
    address: weatherData.resolvedAddress,
    desc: weatherData.description,
    datetime: weatherData.currentConditions.datetime,
    temp: weatherData.currentConditions.temp,
    feelslike: weatherData.currentConditions.feelslike,
    conditions: weatherData.currentConditions.conditions,
    humidity: weatherData.currentConditions.humidity,
    icon: weatherData.currentConditions.icon,
  };

  const weekData = [];

  for (let i = 1; i < 7; i++) {
    weekData.push({
      datetime: weatherData.days[i].datetime,
      temp: weatherData.days[i].temp,
      conditions: weatherData.days[i].conditions,
    });
  }

  // console.log(currentConditionsData);
  // console.log(weekData);
  // console.log(
  //   `The weather in celsius is ${convert(currentConditionsData.temp, "c")}`
  // );

  const dataArray = [currentConditionsData, weekData];

  return dataArray;
}
