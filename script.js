const APP_ID = "286b2e8186f06128e6e0f106f95dd6eb";

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APP_ID}&units=metric`
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}

getWeather("Sydney");
