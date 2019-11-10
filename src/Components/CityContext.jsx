import React, { useState, createContext, useEffect } from "react";

export const CityContext = createContext();

export const CityInfoProvider = props => {
  const [cityInfo, setCityInfo] = useState([]);

  useEffect(() => {
    const cityData = async () => {
      const res = await fetch(
        "https://data.cityofchicago.org/resource/k7hf-8y75.json"
      );
      const resText = await res.json();
      setCityInfo(resText);
    };
    cityData();
  }, []);

  return (
    <CityContext.Provider value={[cityInfo, setCityInfo]}>
      {props.children}
    </CityContext.Provider>
  );
};
