import React, { Component } from "react";
import "./LoadButton.css";

export default class LoadButton extends Component {
  render() {
    return (
      <div className="loadbtn" onClick={this.props.onClick}>
        <p>See more results</p>
      </div>
    );
  }
}
