import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "App.css";
import Header from "Components/Layout/Header";
import { CityInfoProvider } from "Components/CityContext";
import { StationProvider } from "Components/StationList";
import Home from "Components/Home";
import AirTemp from "Components/AirTemp";
import Humidity from "Components/Humidity";
import WindSpeed from "Components/WindSpeed";
import Error404 from "Components/Pages/Error404";

function App() {
  return (
    <Router>
      <CityInfoProvider>
        <div className="App">
          <Header />
          <StationProvider>
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/air-temperature" exact component={AirTemp} />
                <Route path="/humidity" exact component={Humidity} />
                <Route path="/wind-speed" exact component={WindSpeed} />
                <Route component={Error404} />
              </Switch>
            </div>
          </StationProvider>
        </div>
      </CityInfoProvider>
    </Router>
  );
}

export default App;
