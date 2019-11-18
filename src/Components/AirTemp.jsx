import React, { useContext } from "react";
import { StationList, StationContext } from "Components/StationList";
import Graph from "Components/Layout/Graph";

const AirTemp = () => {
  const [cityInfo] = useContext(StationContext);

  const tempData = cityInfo
    .slice(0, 6)
    .map(data => parseFloat(data.air_temperature));

  const mean = () => {
    let total = tempData.reduce((prev, i) => prev + i, 0);
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
          labelName="Air Temperature"
          annotation={mean()}
          stationName={stationName}
        />
      </div>
    </div>
  );
};

export default AirTemp;
