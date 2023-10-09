import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Brisbane</h1>
      <ul>
        <li>Saturday 9:03</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="" />
          <span className="temperature"> 24</span>
          <span className="unit"> °C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 28% </li>
            <li>Wind: 29 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
