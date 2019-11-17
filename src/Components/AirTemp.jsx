import React, { useContext } from "react";
import { CityContext } from "Components/CityContext";
import Graph from "Components/Layout/Graph";

const AirTemp = () => {
  const [cityInfo] = useContext(CityContext);

  const tempData = cityInfo
    .slice(0, 6)
    .map(data => parseFloat(data.air_temperature));

  const mean = () => {
    let total = tempData.reduce((pre, i) => pre + i, 0);
    return (total / tempData.length).toFixed(2);
  };

  return (
    <div className="card">
      <Graph
        Data={tempData}
        meanValue={mean()}
        labelName="Air Temperature"
        annotation={mean()}
      />
    </div>
  );
};

export default AirTemp;
