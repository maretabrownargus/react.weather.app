import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brisbane" />
        <footer>
          This project was coded by Mareta Brown and is{" "}
          <a
            href=" https://github.com/maretabrownargus/react.weather.app.git"
            target="blank"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
