import React, { useContext } from "react";
import { StationList, StationContext } from "Components/StationList";
import Graph from "Components/Layout/Graph";

const Humidity = () => {
  const [cityInfo] = useContext(StationContext);

  const tempData = cityInfo.map(data => parseFloat(data.humidity)).slice(0, 6);

  const mean = () => {
    let total = tempData.reduce((pre, i) => pre + i, 0);
    return (total / tempData.length).toFixed(2);
  };

  const stationName = cityInfo.slice(0, 1).map(d => d.station_name);

  return (
    <div>
      <StationList />
      <div className="card graph">
        <Graph
          Data={tempData}
          meanValue={mean()}
          labelName="Humidity"
          annotation={mean()}
          stationName={stationName}
        />
      </div>
    </div>
  );
};

export default Humidity;
