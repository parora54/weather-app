import * as css from "./style.css";
import rainyIcon from "./assets/cloudy-day-1.svg";
import { loadHome } from "./home";
import { weatherDisplay } from "./weatherController";
import { getWeather } from "./apiTools";

const body = document.querySelector("#container");
const apiKey = "CDD8XUVVSUEXJSJAUPXP9A4NG";

body.appendChild(loadHome());
// body.appendChild(weatherDisplay());

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  try {
    const weather = document.querySelector("#weather");
    body.removeChild(weather);
  } catch (error) {}

  const city = document.getElementById("city");
  const country = document.getElementById("country");

  const apiPrompt = city.value + "," + country.value;

  city.value = "";
  country.value = "";

  getWeather(apiPrompt, apiKey).then(([currentConditionsData, weekData]) => {
    console.log(currentConditionsData, weekData);

    body.appendChild(weatherDisplay(currentConditionsData, weekData));
  });
});
