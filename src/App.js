import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "App.css";
import Header from "Components/Layout/Header";
import { CityInfoProvider } from "Components/CityContext";
import Home from "Components/Home";
import AirTemp from "Components/AirTemp";
import Humidity from "Components/Humidity";
import WindSpeed from "Components/WindSpeed";

function App() {
  return (
    <Router>
      <CityInfoProvider>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />>
              <Route path="/air-temperature" exact component={AirTemp} />
              <Route path="/humidity" exact component={Humidity} />
              <Route path="/wind-speed" exact component={WindSpeed} />
            </Switch>
          </div>
        </div>
      </CityInfoProvider>
    </Router>
  );
}

export default App;
