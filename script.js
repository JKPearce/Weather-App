const APP_ID = "286b2e8186f06128e6e0f106f95dd6eb";
const searchForm = document.getElementById('searchForm');
const searchBtn = document.getElementById('submitBtn');

searchForm.onsubmit = handleSubmit;

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APP_ID}&units=metric`
    );
    const weatherData = await response.json();
    const processedData = processWeatherData(weatherData);
    displayWeather(processedData);
  } catch (error) {
    console.log(error);
  }
}

function processWeatherData(data) {
  const weather = {
    condition: data["weather"][0]["description"],
    temp: data["main"]["temp"],
    feelsLike: data["main"]["feels_like"],
    tempMin: data["main"]["temp_min"],
    tempMax: data["main"]["temp_max"],
    humidity: data["main"]["humidity"],
    name: data["name"],
  };
  return weather;
}

function displayWeather(weather) {
  const currentWeatherWrapper = document.getElementById('currentDayWeather');
  const name = document.createElement('p');
  const temp = document.createElement('p');
  const condition = document.createElement('p');
  const feelsLike = document.createElement('p');
  const humidity = document.createElement('p');

  currentWeatherWrapper.innerHTML = '';
  name.innerText = weather.name;
  temp.innerText = "Current Temp: " + weather.temp + "°C";
  condition.innerText = weather.condition;
  feelsLike.innerText = "Feels like: " + weather.feelsLike + "°C";
  humidity.innerText = "Humidity: " + weather.humidity + "%";

  currentWeatherWrapper.appendChild(name);
  currentWeatherWrapper.appendChild(temp);
  currentWeatherWrapper.appendChild(condition);
  currentWeatherWrapper.appendChild(feelsLike);
  currentWeatherWrapper.appendChild(humidity);
}

function handleSubmit(e){
  e.preventDefault();
  const searchData = document.getElementById('search').value;
  if(!searchData) return;
  getWeatherData(searchData);
}
// getWeatherData("Sydney");


