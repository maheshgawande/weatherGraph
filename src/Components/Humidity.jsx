import React, { useContext } from "react";
import { CityContext } from "Components/CityContext";
import Graph from "Components/Layout/Graph";
import StationList from "Components/StationList";

const Humidity = () => {
  const [cityInfo] = useContext(CityContext);

  const tempData = cityInfo.map(data => parseFloat(data.humidity)).slice(0, 6);

  const mean = () => {
    let total = tempData.reduce((pre, i) => pre + i, 0);
    return (total / tempData.length).toFixed(2);
  };

  return (
    <div className="card graph">
      <StationList />
      <Graph
        Data={tempData}
        meanValue={mean()}
        labelName="Humidity"
        annotation={mean()}
      />
    </div>
  );
};

export default Humidity;
