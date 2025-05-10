import searchImg from "../assets/icons/search.svg"

function Search() {
    return(
        <div className="search-location">
            <input type="text" id="userLocation" placeholder="Search for places"/>

            <div className="search">
                <img src={searchImg} alt="searchImg" className="search-icon"/>
            </div>
        </div>
    )
}

export default Search;