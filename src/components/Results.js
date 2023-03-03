import React from "react";

function Results(props) {
  let date = String(new window.Date()).slice(0, 15);

  return (
    <div className="location-box">
      <div className="location">
        {props.name}, {props.country}
      </div>
      <div className="date">{date}</div>
      <div className="weather-box">
        <div className="temp">{Math.round(props.temp)} °C</div>
        <div className="weather">{props.text}</div>
      </div>
    </div>
  );
}

export default Results;
