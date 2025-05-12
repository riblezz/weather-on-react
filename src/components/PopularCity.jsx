import CardWithInfo from "./CardWithInfo";
import weatherData from "../data/weatherData";
import fetchTemperature from "../api/weatherApi"
import { useState, useEffect } from "react";

function PopularCity() {
    const [cities, setCities] = useState([])

    useEffect(() => {
      async function loadWeatherData() {
        const promises = await weatherData.map(city => fetchTemperature(city.city));
        const results = await Promise.all(promises);
        setCities(results)
      }

      loadWeatherData()
    }, [])


    return(
        <div className="popular-city">
            <h2>Popular city</h2>
            {cities.map((item, index) => (
                <CardWithInfo key={index} city={item.name} country={item.country} temperature={item.temperature + "°C"} />
            ))}
        </div>)
}

export default PopularCity;