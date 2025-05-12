import searchImg from "../assets/icons/search.svg"
import CurrentCity from "./CurrentCity";
import { useState, useEffect } from "react";

function Search({onSearch}) {
    const [info, setInfo] = useState("");

    const handleSearch = () => {
        onSearch(info);
    };

    const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        handleSearch();  
    }
    };


    return(
        <div className="search-location">
            <input value={info} onChange={(city) => setInfo(city.target.value)} onKeyDown={handleKeyDown} type="text" id="userLocation" placeholder="Search for places"/>

            <div className="search">
                <img src={searchImg} alt="searchImg" className="search-icon" onClick={handleSearch}/>
            </div>
        </div>
    )
}

export default Search;