import React, { Component } from "react";
import "./HeroImage.css";

export default class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="heroimage"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
                    39%,rgba(0,0,0,0)
                    41%,rgba(0,0,0,0.65)
                    100%),
                    url('${this.props.image}'), #1c1c1c`
        }}
      >
        <div className="heroimage-content">
          <div className="heroimage-text">
            <h1>{this.props.title}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}
