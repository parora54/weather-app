export function loadHome() {
  const topSection = document.createElement("div");
  topSection.id = "top-section";

  // Create and append the header
  const header = document.createElement("div");
  header.className = "header";

  const headerImage = document.createElement("img");
  headerImage.src = "../src/assets/title.svg";
  headerImage.alt = "weather icon";
  header.appendChild(headerImage);

  const headerText = document.createElement("p");
  headerText.textContent = "WEATHER APP";
  header.appendChild(headerText);

  topSection.appendChild(header);

  // Create and append the form
  const formContainer = document.createElement("div");
  formContainer.className = "form";

  const subheading = document.createElement("div");
  subheading.className = "subheading";
  subheading.textContent = "Search For";
  formContainer.appendChild(subheading);

  const form = document.createElement("form");
  form.id = "weather-form";

  const cityWrapper = document.createElement("div");
  cityWrapper.className = "form-wrapper";

  const cityLabel = document.createElement("label");
  cityLabel.htmlFor = "city";
  cityLabel.textContent = "City:";
  cityWrapper.appendChild(cityLabel);

  const cityInput = document.createElement("input");
  cityInput.type = "text";
  cityInput.id = "city";
  cityInput.name = "city";
  cityInput.required = true;
  cityWrapper.appendChild(cityInput);

  form.appendChild(cityWrapper);

  const countryWrapper = document.createElement("div");
  countryWrapper.className = "form-wrapper";

  const countryLabel = document.createElement("label");
  countryLabel.htmlFor = "country";
  countryLabel.textContent = "Country:";
  countryWrapper.appendChild(countryLabel);

  const countryInput = document.createElement("input");
  countryInput.type = "text";
  countryInput.id = "country";
  countryInput.name = "country";
  countryInput.required = true;
  countryWrapper.appendChild(countryInput);

  form.appendChild(countryWrapper);

  formContainer.appendChild(form);

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "button-div";

  const searchButton = document.createElement("button");
  searchButton.setAttribute("form", "weather-form");
  searchButton.textContent = "Search";
  buttonDiv.appendChild(searchButton);

  formContainer.appendChild(buttonDiv);

  topSection.appendChild(formContainer);

  return topSection;
}
