import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <WeatherIcon code={props.data.icon} size={55} />
        </div>
        <div className="p-2">
          <WeatherTemperature celsius={props.data.temperature} />
          <div className="Weatherdetails">
            <div className="d-flex flex-row-reverse">
              <div class="p-2">
                <ul>
                  <li>Humidity: {props.data.humidity} %</li>
                  <li>Wind: {props.data.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
