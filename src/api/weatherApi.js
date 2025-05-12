const WEATHER_API = "http://api.weatherapi.com/v1/forecast.json?days=5&key=927baf2d296442549b3122200250304&q="

function fetchTemperature(city) {
    return fetch(WEATHER_API + city)
    .then(response => response.json())
    .then(data => {
        return {
            temperature: data.current.temp_c,
            name: data.location.name,
            country: data.location.country,
            weatherIcon: data.current.condition.icon,
            feelslikeC: data.current.feelslike_c,
            humidity: data.current.humidity,
            pressure: data.current.pressure_mb,
            wind: data.current.wind_kph
        }
    })
}

export default fetchTemperature;