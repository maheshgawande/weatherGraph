import React, { useContext } from "react";
import { CityContext } from "Components/CityContext";
import Graph from "Components/Layout/Graph";

const WindSpeed = () => {
  const [cityInfo] = useContext(CityContext);

  const tempData = cityInfo
    .map(data => parseFloat(data.wind_speed))
    .slice(0, 6);

  const mean = () => {
    let total = tempData.reduce((pre, i) => pre + i, 0);
    return (total / tempData.length).toFixed(2);
  };

  return (
    <Graph
      Data={tempData}
      meanValue={mean()}
      labelName="Wind Speed"
      annotation={mean()}
    />
  );
};

export default WindSpeed;
