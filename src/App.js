import React, { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const APP_KEY = "54aef32fafdc8cce5ef9a336bde143c7";
  const APP_URL = "https://api.openweathermap.org/data/2.5/";

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${APP_URL}weather?q=${query}&units=metric&APPID=${APP_KEY}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
      document.getElementById("form").value = "";
    }
  };

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 20
            ? "app hot"
            : "app"
          : "app"
      }
    >
      <main>
        <Header onChange={handleChange} onKeyPress={search} />

        {typeof weather.main != "undefined" ? (
          <Results
            name={weather.name}
            country={weather.sys.country}
            temp={weather.main.temp}
            text={weather.weather[0].main}
          />
        ) : (
          ""
        )}

        <Footer />
      </main>
    </div>
  );
}

export default App;
