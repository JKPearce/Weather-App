const APP_ID = "286b2e8186f06128e6e0f106f95dd6eb";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APP_ID}&units=metric`
    );
    const weatherData = await response.json();
    const processedData = processWeatherData(weatherData);
    console.log(processedData);
  } catch (error) {
    console.log(error);
  }
}

function processWeatherData(data){
    const weather = {
        condition: data['weather'][0]['description'],
        temp: data['main']['temp'],
        feelsLike: data['main']['feels_like'],
        tempMin: data['main']['temp_min'],
        tempMax: data['main']['temp_max'],
        humidity: data['main']['humidity'],
        name: data['name']

    }
    return weather;
}
getWeatherData("Sydney");
