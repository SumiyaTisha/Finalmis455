async function searchWeather() {
    const apiKey = '19506f04dda7898217d5fc54795e51f0';
    const country = document.getElementById('country').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2>
                                <p>Temperature: ${data.main.temp} °C</p>
                                <p>Weather: ${data.weather[0].description}</p>
                                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}

