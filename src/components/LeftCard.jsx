import Search from "./Search";
import CurrentCity from "./CurrentCity";
import PopularCity from "./PopularCity";

function LeftCard() {
    return (
        <div className="card left-card">
            <Search />
            <div className="current-and-popular-city">
                <CurrentCity />
                <PopularCity />
            </div>
        </div>
    )
}

export default LeftCard;