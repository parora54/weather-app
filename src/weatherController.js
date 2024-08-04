export function weatherDisplay() {
  // Create and append the weather section
  const weatherSection = document.createElement("div");
  weatherSection.id = "weather";

  const currentWeather = document.createElement("div");
  currentWeather.className = "current";

  const imgSection = document.createElement("div");
  imgSection.id = "img-section";

  const weatherIcon = document.createElement("img");
  weatherIcon.src = "../src/assets/cloudy.svg";
  weatherIcon.alt = "weather icon";
  imgSection.appendChild(weatherIcon);

  currentWeather.appendChild(imgSection);

  const place = document.createElement("div");
  place.id = "place";
  place.textContent = "Placeholder, Place";
  currentWeather.appendChild(place);

  const datetime = document.createElement("div");
  datetime.id = "datetime";
  datetime.textContent = "datetime";
  currentWeather.appendChild(datetime);

  const temp = document.createElement("div");
  temp.id = "temp";

  const currentTemp = document.createElement("div");
  currentTemp.textContent = "Current Temp: ";
  temp.appendChild(currentTemp);

  const feelsLike = document.createElement("div");
  feelsLike.textContent = "Feels Like:";
  temp.appendChild(feelsLike);

  currentWeather.appendChild(temp);

  const humidity = document.createElement("div");
  humidity.id = "humidity";
  humidity.textContent = "Humidity:";
  currentWeather.appendChild(humidity);

  const conditions = document.createElement("div");
  conditions.id = "conditions";
  conditions.textContent = "conditions";
  currentWeather.appendChild(conditions);

  weatherSection.appendChild(currentWeather);

  // Create and append the week forecast
  const weekForecast = document.createElement("div");
  weekForecast.className = "week";

  for (let i = 0; i < 6; i++) {
    const day = document.createElement("div");
    day.className = "day";

    const dayDatetime = document.createElement("div");
    dayDatetime.textContent = "datetime";
    day.appendChild(dayDatetime);

    const dayTemp = document.createElement("div");
    dayTemp.textContent = "temp";
    day.appendChild(dayTemp);

    weekForecast.appendChild(day);
  }

  weatherSection.appendChild(weekForecast);

  return weatherSection;
}

function imageSelector(prompt) {
  //IMAGE STUFF
  // const myIcon = new Image();
  // myIcon.src = rainyIcon;
  // console.log(rainyIcon);
  // body.appendChild(myIcon);
}
