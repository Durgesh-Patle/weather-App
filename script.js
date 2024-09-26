document.querySelector(".search button").addEventListener("click", () => {
    const city = document.querySelector(".search input").value;
    if (city) {
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    const apiKey = "bd5e378503939ddaee76f12ad7a97608";  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                alert("City not found!");
            }
        })
        .catch(() => {
            alert("An error occurred while fetching the weather data.");
        });
}

function displayWeatherData(data) {
    document.querySelector(".weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.querySelector(".temp").textContent = `${data.main.temp}°C`;
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
    document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
}
