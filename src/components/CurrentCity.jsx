import CardWithInfo from "./CardWithInfo";
import fetchTemperature from "../api/weatherApi"
import { useEffect, useState } from "react";

function CurrentCity({cityName}) {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        async function currentCity() {
            const getCity = await fetchTemperature(cityName);
            setInfo(getCity);
        }

        currentCity();
    }, [cityName])

  return (
    <div className="current-city">
      <h2>Current city:</h2>

      {info ? (
        <CardWithInfo
          country={info.country}
          city={info.name}
          temperature={info.temperature + "°C"}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default CurrentCity;