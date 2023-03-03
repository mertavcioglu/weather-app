import React from "react";
import logo from "../img/logo.png";

function Header(props) {
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <div className="search-box">
        <input
          autoComplete="off"
          id="form"
          autoFocus
          type="text"
          className="search-bar"
          placeholder="Search for a city..."
          onChange={props.onChange}
          value={props.query}
          onKeyPress={props.onKeyPress}
        />
      </div>
    </div>
  );
}

export default Header;
