import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieItem.css";

export default class MovieItem extends Component {
  render() {
    return (
      <div className="moviethumb">
        {this.props.clickable ? (
          <Link to={{ pathname: `/${this.props.movieId}`,movieName:`${this.props.movieName}` }}>
            <img src={this.props.image} alt="moviethumb" />
          </Link>
        ) : (
          <img src={this.props.image} alt="moviethumb" />
        )}
      </div>
    );
  }
}
