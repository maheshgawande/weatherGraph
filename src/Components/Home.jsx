import React, { useContext } from "react";
import { CityContext } from "Components/CityContext";

const Weather = () => {
  const [weatherData] = useContext(CityContext);

  return (
    <div className="card home">
      {weatherData.slice(0, 1).map(data => (
        <div className="location-section" key={data.measurement_id}>
          <p>Chicago, IL, USA</p>
          <p>
            <b>Station:</b> {data.station_name}
          </p>
          <p>
            <b>Date {"&"} Time:</b> {data.measurement_timestamp_label}
          </p>
        </div>
      ))}
      <div className="data-section">
        {weatherData.slice(0, 1).map(data => (
          <div className="temp-data" key={data.measurement_id}>
            <span> {parseInt(data.air_temperature)} </span>
            <span>
              <i>deg</i>
            </span>
          </div>
        ))}
        {weatherData.slice(0, 1).map(data => (
          <div className="weather-data" key={data.measurement_id}>
            <p>
              <b>Barometric Pressure:</b> {data.barometric_pressure}
            </p>
            <p>
              <b>Humidity:</b> {data.humidity}
            </p>
            <p>
              <b>Wind speed:</b> {data.wind_speed} mph
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
