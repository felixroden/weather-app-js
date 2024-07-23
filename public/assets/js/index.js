import { getCurrentWeather, getWeatherbyName } from "./fetch.js";

const WEATHER_WIDGET = document.getElementById("weather-widget");
const SEARCH_BUTTON = document.getElementById("search-button");
const LOCATION_BUTTON = document.getElementById("location-button");
const SEARCH_INPUT = document.getElementById("search-input");
const unit = "°C";

SEARCH_BUTTON.addEventListener("click", async function(event) {
    event.preventDefault()
    console.log("searchbutton was clicked");
    let query = SEARCH_INPUT.value.trim();

    if (!query) {
        displayError("Please enter a city name.");
        return;
    }
    
    let weather = await getWeatherbyName(query);

    displayCurrentWeather(weather);
    SEARCH_INPUT.value = "";
});

LOCATION_BUTTON.addEventListener("click", function() {
    navigator.geolocation.getCurrentPosition( async (position) => {
        const lat =  position.coords.latitude;
        const lon = position.coords.longitude;
        const weather = await getCurrentWeather(lat, lon);
        displayCurrentWeather(weather)
    })
});

function displayError(error) {
    WEATHER_WIDGET.innerHTML = "";
    let errorMessage = document.createElement('p');
    errorMessage.innerText = error;
    errorMessage.classList.add("warning");
    WEATHER_WIDGET.appendChild(errorMessage);
}

function displayCurrentWeather(weather) {
    WEATHER_WIDGET.innerHTML = "";

    let currentWeatherContainer = document.createElement("div");
    currentWeatherContainer.id = "currentWeatherContainer";
    WEATHER_WIDGET.appendChild(currentWeatherContainer);

    let forecastDescription = document.createElement("h2");
    forecastDescription.classList.add("forecastDescription");
    forecastDescription.innerText = "Current weather";
    currentWeatherContainer.appendChild(forecastDescription);

    let locationTitle = document.createElement("p");
    locationTitle.classList.add("locationTitle");
    let locationName = weather.name;
    let country = weather.sys.country;
    locationTitle.innerText = locationName + ", " + country;

    let weatherIcon = document.createElement("img");
    weatherIcon.classList.add("weatherIcon");
    let weatherConditionCode = weather.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherConditionCode}@4x.png`;

    let description = document.createElement("p");
    description.classList.add("weatherDescription");
    description.innerText = weather.weather[0].description;

    let currentTemp = Math.round(weather.main.temp);
    let temp = document.createElement("p");
    temp.innerText = "Temperature: " + currentTemp + unit;

    let feelsLikeTemp = document.createElement("p");
    feelsLikeTemp.innerText = "Feels like: " + Math.round(weather.main.feels_like) + unit;

    let textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");
    textContainer.appendChild(locationTitle);
    textContainer.appendChild(description);
    textContainer.appendChild(temp);
    textContainer.appendChild(feelsLikeTemp);

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContainer");
    iconContainer.appendChild(textContainer);
    iconContainer.appendChild(weatherIcon);

    currentWeatherContainer.appendChild(iconContainer);
}