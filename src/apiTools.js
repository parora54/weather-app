import { convert } from "./metric";

export async function getWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
    { mode: "cors" }
  );

  const weatherData = await response.json();

  const currentConditionsData = [
    weatherData.resolvedAddress,
    weatherData.description,
    weatherData.currentConditions.datetime,
    weatherData.currentConditions.temp,
    weatherData.currentConditions.feelslike,
    weatherData.currentConditions.conditions,
    weatherData.currentConditions.humidity,
    weatherData.currentConditions.icon,
  ];

  const weekData = [];

  for (let i = 1; i < 7; i++) {
    weekData.push({
      temp: weatherData.days[i].temp,
      conditions: weatherData.days[i].conditions,
    });
  }

  console.log(currentConditionsData);
  console.log(weekData);
  console.log(
    `The weather in celsius is ${convert(currentConditionsData[3], "c")}`
  );

  return currentConditionsData, weekData;
}
