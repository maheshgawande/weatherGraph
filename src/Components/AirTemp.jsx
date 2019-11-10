import React, { useContext } from "react";
import { CityContext } from "Components/CityContext";
import Graph from "Components/Layout/Graph";

const AirTemp = () => {
  const [cityInfo] = useContext(CityContext);

  const tempData = cityInfo
    .map(data => parseFloat(data.air_temperature))
    .slice(0, 6);

  const mean = () => {
    let total = tempData.reduce((pre, i) => pre + i, 0);
    return (total / tempData.length).toFixed(2);
  };

  return (
    <Graph
      Data={tempData}
      meanValue={mean()}
      labelName="Air Temperature"
      annotation={mean()}
    />
  );
};

export default AirTemp;
