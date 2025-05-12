function CardWithInfo(props) {
    return (
        <div className="cards-for-left-card card-current-city"  >
                <div className="city-and-country">
                    <h2>{props.city}</h2>
                    <h3>{props.country}</h3>
                </div>

                <div className="temperature">
                    <p>{props.temperature}</p>
                </div>
            </div>
    )
}

export default CardWithInfo;
