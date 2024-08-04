import * as css from "./style.css";
import rainyIcon from "./assets/cloudy-day-1.svg";
import { loadHome } from "./home";
import { weatherDisplay } from "./weatherController";
import { getWeather } from "./apiTools";

const body = document.querySelector("#container");
const apiKey = "CDD8XUVVSUEXJSJAUPXP9A4NG";

body.appendChild(loadHome());
body.appendChild(weatherDisplay());

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const city = document.getElementById("city");
  const country = document.getElementById("country");

  city.value = "";
  country.value = "";

  const apiPrompt = city.value + "," + country.value;

  const weatherObj = getWeather(apiPrompt, apiKey);

  console.log(weatherObj);
});
