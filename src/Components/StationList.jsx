import React, { useContext, useState, createContext, useEffect } from "react";
import { CityContext } from "Components/CityContext";

export const StationContext = createContext();

export const StationList = () => {
  const [apiData] = useContext(CityContext);
  const [stationData, setStationData] = useContext(StationContext);

  const stationsNames = apiData
    .map(d => d.station_name)
    .filter((item, i, ar) => ar.indexOf(item) === i);

  const handleChange = e => {
    setStationData(apiData.filter(d => d.station_name === e.target.value));
    return e.target.value;
  };

  return (
    <div className="station-list-container">
      <span>Select station: </span>
      <select name="station-data" onChange={handleChange}>
        {stationsNames.map((data, i) => (
          <option key={i}> {data} </option>
        ))}
      </select>
    </div>
  );
};

export const StationProvider = props => {
  const [apiData] = useContext(CityContext);
  const [stationData, setStationData] = useState([]);

  useEffect(() => {
    setStationData(apiData);
  }, [apiData]);

  return (
    <StationContext.Provider value={[stationData, setStationData]}>
      {props.children}
    </StationContext.Provider>
  );
};
