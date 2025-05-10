import CardWithInfo from "./CardWithInfo"
import weatherData from "../data/weatherData";

function PopularCity() {
    return(
        <div className="popular-city">
            <h2>Popular city</h2>
            {weatherData.map(item => (
                <CardWithInfo key={item.id} city={item.city} country={item.country} />
                
            ))}
        </div>)
}

export default PopularCity;