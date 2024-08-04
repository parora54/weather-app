import cloudyDay from "./assets/cloudy-day-1.svg";
import cloudyNight from "./assets/cloudy-night-1.svg";
import day from "./assets/day.svg";
import night from "./assets/night.svg";
import rainy from "./assets/rainy-3.svg";
import snowy from "./assets/snowy-3.svg";
import thunder from "./assets/thunder.svg";
import { convert, formatDate } from "./metric";

function imageSelector(prompt) {
  switch (prompt) {
    case "clear-day":
      return day;
    case "clear-night":
      return night;
    case "partly-cloudy-night":
      return cloudyNight;
    case "partly-cloudy-day":
      return cloudyDay;
    case "cloudy":
      return cloudyDay;
    case "rain":
      return rainy;
    case "snow":
      return snowy;
    case "thunder-rain":
      return thunder;
    default:
      return day;
  }
}

export function weatherDisplay(currentCondObj, weekDataObj) {
  // Create and append the weather section
  const weatherSection = document.createElement("div");
  weatherSection.id = "weather";

  const currentWeather = document.createElement("div");
  currentWeather.className = "current";

  const imgSection = document.createElement("div");
  imgSection.id = "img-section";

  const weatherIcon = new Image();
  console.log(currentCondObj.icon);
  weatherIcon.src = imageSelector(currentCondObj.icon);
  imgSection.appendChild(weatherIcon);

  currentWeather.appendChild(imgSection);

  const place = document.createElement("div");
  place.id = "place";
  place.textContent = currentCondObj.address;
  currentWeather.appendChild(place);

  const datetime = document.createElement("div");
  datetime.id = "datetime";
  datetime.textContent = currentCondObj.datetime.slice(0, -3);
  currentWeather.appendChild(datetime);

  const temp = document.createElement("div");
  temp.id = "temp";

  const currentTemp = document.createElement("div");
  currentTemp.textContent = `Current Temp: ${convert(
    currentCondObj.temp,
    "c"
  )} \u00B0C`;
  temp.appendChild(currentTemp);

  const feelsLike = document.createElement("div");
  feelsLike.textContent = `Feels Like: ${convert(
    currentCondObj.feelslike,
    "c"
  )} \u00B0C`;
  temp.appendChild(feelsLike);

  currentWeather.appendChild(temp);

  const humidity = document.createElement("div");
  humidity.id = "humidity";
  humidity.textContent = `Humidity: ${currentCondObj.humidity}`;
  currentWeather.appendChild(humidity);

  const conditions = document.createElement("div");
  conditions.id = "conditions";
  conditions.textContent =
    currentCondObj.conditions + ". " + currentCondObj.desc;
  currentWeather.appendChild(conditions);

  weatherSection.appendChild(currentWeather);

  // Create and append the week forecast
  const weekForecast = document.createElement("div");
  weekForecast.className = "week";

  for (let i = 0; i < 6; i++) {
    const day = document.createElement("div");
    day.className = "day";

    const dayDatetime = document.createElement("div");
    if (i === 0) {
      dayDatetime.textContent = "Tomorrow";
    } else {
      dayDatetime.textContent = formatDate(weekDataObj[i].datetime);
    }
    day.appendChild(dayDatetime);

    const dayTemp = document.createElement("div");
    dayTemp.textContent = `${convert(weekDataObj[i].temp, "c")} \u00B0C`;
    day.appendChild(dayTemp);

    weekForecast.appendChild(day);
  }

  weatherSection.appendChild(weekForecast);

  return weatherSection;
}
