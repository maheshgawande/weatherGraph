import React, { useContext } from "react";
import { CityContext } from "Components/CityContext";
import { Bar } from "react-chartjs-2";

const Weather = () => {
  /*--- Context ---*/
  const [weatherData] = useContext(CityContext);
  /*---------------*/

  /*--- Station data ---*/
  const fosterStation = [];
  const oakStreetStation = [];
  const street63rdStation = [];

  weatherData.map(data => {
    const func = () => {
      if (data.station_name === "Foster Weather Station") {
        fosterStation.push(data);
      } else if (data.station_name === "Oak Street Weather Station") {
        oakStreetStation.push(data);
      } else if (data.station_name === "63rd Street Weather Station") {
        street63rdStation.push(data);
      } else {
        return;
      }
    };
    return func();
  });
  /*---------------*/

  /*--- Last 30th day ---*/
  let d = new Date();
  let last30thDay = new Date(d.setDate(d.getDate() - 30));
  const lastYear = last30thDay.getFullYear();
  const lastMonth = last30thDay.getMonth() + 1;
  const lastDate = last30thDay.getDate();
  last30thDay = lastYear + "-" + lastMonth + "-" + lastDate;
  /*---------------------*/

  /*--- Average cumulative algo ---*/
  const labels = [];

  const cumulative = APIdata => {
    const Dates = APIdata.map(data =>
      data.measurement_timestamp
        .split("")
        .slice(0, 10)
        .join("")
    );
    const AirTemp = APIdata.map(data => data.air_temperature);

    const arrOfIndex = [];
    const toBeCalc = [];
    Dates.map((data, i) => (last30thDay === data ? arrOfIndex.push(i) : ""));

    arrOfIndex.length > 0
      ? toBeCalc.push(AirTemp.slice(0, arrOfIndex[arrOfIndex.length - 1]))
      : toBeCalc.push(AirTemp.slice(0, 30));

    let total = toBeCalc[0].reduce(
      (prev, i) => parseInt(prev) + parseInt(i),
      0
    );

    labels.push(APIdata.slice(0, 1).map(data => data.station_name));
    return (total / toBeCalc[0].length).toFixed(2);
  };
  /*---------------------------------*/

  /*--- Average cumulative data calculated ---*/
  const fosterCumulative = cumulative(fosterStation);
  const oakStreetCumulative = cumulative(oakStreetStation);
  const street63rdCumulative = cumulative(street63rdStation);
  /*----------------------------*/

  /*--- Graph data ---*/
  const cumulativeData = [];
  cumulativeData.push(fosterCumulative);
  cumulativeData.push(oakStreetCumulative);
  cumulativeData.push(street63rdCumulative);

  const newSortedData = cumulativeData.map(data => data).sort();
  const minValue = newSortedData[0];

  const dt = new Date();
  const asOnDate =
    dt.getFullYear() + "-" + parseInt(dt.getMonth() + 1) + "-" + dt.getDate();

  const data = {
    labels: labels,
    datasets: [
      {
        data: cumulativeData,
        label: `Average cumulative air temperature in Chicago city (From ${asOnDate} to ${last30thDay})`,
        backgroundColor: "rgba(255,135,0,0.6)",
        borderColor: "rgba(255,135,0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,135,0,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        responsive: true
      }
    ]
  };
  const options = {
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            min: minValue - 0.5
          }
        }
      ]
    }
  };
  /*------------------*/

  return (
    <div>
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
      <div className="card graph">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Weather;
