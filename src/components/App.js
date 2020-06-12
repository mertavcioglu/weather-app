import React, { useState } from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import Header from "./Header"
import Results from "./Results"
import Footer from "./Footer"

function App() {
  const env = runtimeEnv()

  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const APP_KEY = env.REACT_APP_APP_KEY;
  const APP_URL = env.REACT_APP_APP_URL;

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${APP_URL}weather?q=${query}&units=metric&APPID=${APP_KEY}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result)
          setQuery("")
          console.log(result)
        })
      document.getElementById("form").value = ""
    }
  }

  function handleChange(event) {
    setQuery(event.target.value);

  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 20) ? "app hot" : "app") : "app"}>
      <main>
        <Header
          onChange={handleChange}
          onKeyPress={search}
        />

        {(typeof weather.main != "undefined") ? (

          <Results
            name={weather.name}
            country={weather.sys.country}
            temp={weather.main.temp}
            text={weather.weather[0].main}
          />

        ) : ("")}

        <Footer />
      </main>
    </div>
  );
}

export default App