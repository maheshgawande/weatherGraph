import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/"
        className="a"
        exact={true}
        activeClassName={"active-link"}
      >
        <div className="head-logo-container">
          <div className="weather-logo">
            <svg viewBox="0 0 288 288">
              <g
                id="ICONS-/-Forecast-/-Color-/-03---Partly-Sunny-LK"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Partly-Sunny"
                  transform="translate(0.000000, 21.000000)"
                  strokeWidth="9.59322034"
                >
                  <path
                    d="M143.898305,0 L143.898305,47.9661017"
                    id="Path"
                    stroke="#FF8700"
                  ></path>
                  <path
                    d="M0,143.898305 L47.9661017,143.898305"
                    id="Path"
                    stroke="#FF8700"
                  ></path>
                  <path
                    d="M211.722373,76.0742373 L245.634407,42.1622034"
                    id="Path"
                    stroke="#FF8700"
                  ></path>
                  <path
                    d="M76.0742373,76.0742373 L42.1622034,42.1622034"
                    id="Path"
                    stroke="#FF8700"
                  ></path>
                  <path
                    d="M42.1622034,245.634407 L76.0742373,211.722373"
                    id="Path"
                    stroke="#FF8700"
                  ></path>
                  <path
                    d="M220.356271,138.142373 C217.690045,102.41186 190.655114,73.2808488 155.222716,67.9588636 C119.790318,62.6368784 85.3903619,82.5403014 72.345068,115.910927 C59.2997741,149.281553 71.0809918,187.238188 100.728814,207.357458"
                    id="Path"
                    stroke="#FF8700"
                  ></path>
                  <path
                    d="M239.830508,148.694915 L232.299831,148.694915 C218.649379,132.402881 196.556074,125.892234 176.252116,132.17829 C155.948157,138.464345 141.398466,156.319572 139.341525,177.474576 L129.508475,177.474576 C113.613907,177.474576 100.728814,190.359669 100.728814,206.254237 C100.728814,222.148805 113.613907,235.033898 129.508475,235.033898 L239.830508,235.033898 C263.67236,235.033898 283,215.706259 283,191.864407 L283,191.864407 C283,168.022555 263.67236,148.694915 239.830508,148.694915 Z"
                    id="Path"
                    stroke="#BABABA"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="heading">
            <span>Weather App</span>
          </div>
        </div>
      </NavLink>
      <div className="navbar">
        <ul className="nav">
          <li>
            <NavLink
              to="/air-temperature"
              className="a"
              activeClassName={"active-link"}
            >
              Air temperature
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/humidity"
              className="a"
              activeClassName={"active-link"}
            >
              Humidity
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wind-speed"
              className="a"
              activeClassName={"active-link"}
            >
              Wind speed
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
