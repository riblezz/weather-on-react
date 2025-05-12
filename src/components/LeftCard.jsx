import Search from "./Search";
import CurrentCity from "./CurrentCity";
import PopularCity from "./PopularCity";
import { useState } from "react";

function LeftCard() {
    const [cityName, setCityName] = useState("Kyiv");

    return (
        <div className="card left-card">
            <Search onSearch={setCityName}/>
            <div className="current-and-popular-city">
                <CurrentCity cityName={cityName} />
                <PopularCity />
            </div>
        </div>
    )
}

export default LeftCard;