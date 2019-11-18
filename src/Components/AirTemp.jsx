import React, { useContext } from "react";
import { CityContext } from "Components/CityContext";
import Graph from "Components/Layout/Graph";
import StationList from "Components/StationList";

const AirTemp = () => {
  const [cityInfo] = useContext(CityContext);

  const tempData = cityInfo
    .slice(0, 6)
    .map(data => parseFloat(data.air_temperature));

  const mean = () => {
    let total = tempData.reduce((prev, i) => prev + i, 0);
    return (total / tempData.length).toFixed(2);
  };

  return (
    <div>
      <StationList />
      <div className="card graph">
        <Graph
          Data={tempData}
          meanValue={mean()}
          labelName="Air Temperature"
          annotation={mean()}
        />
      </div>
    </div>
  );
};

export default AirTemp;
