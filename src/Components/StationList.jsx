import React, { useContext } from "react";
import { CityContext } from "Components/CityContext";

const StationList = () => {
  const [apiData, setApiData] = useContext(CityContext);

  const stationsNames = apiData
    .map(d => d.station_name)
    .filter((item, i, ar) => ar.indexOf(item) === i);

  const handleChange = e => {
    setApiData(apiData.filter(d => d.station_name === e.target.value));
  };

  return (
    <div className="station-list-container">
      <span>Select station: </span>
      <select name="station-data" onChange={handleChange}>
        {stationsNames.map((data, i) => (
          <option key={i}> {data} </option>
        ))}
        {/* <option value="63rd Street Weather Station">63rd street</option>
        <option value="Foster Weather Station">Foster</option>
        <option value="Oak Street Weather Station">Oak street</option> */}
      </select>
    </div>
  );
};

export default StationList;
