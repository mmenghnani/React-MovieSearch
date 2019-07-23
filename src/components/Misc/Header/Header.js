import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          {/* <Link to="/">
                        <img className="rmdb-logo" src="./images/reactMovie_logo.png" alt="rmdb-logo" />
                    </Link> */}
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
