import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <img
            className="rmdb-tmdb-logo"
            src="./images/tmdb_logo_0.png"
            alt="tmdb-logo"
          />
        </div>
      </div>
    );
  }
}
