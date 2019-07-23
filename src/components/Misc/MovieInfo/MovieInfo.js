import React, { Component } from "react";
import { IMAGE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";
import FontAwesome from "react-fontawesome";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieInfo.css";

const MovieInfo = props => {
  console.log(props);
  return (
    <div
      className="movieinfo"
      style={{
        background: props.movie.backdrop_path
          ? `url('${IMAGE_URL}${BACKDROP_SIZE}/${props.movie.backdrop_path}')`
          : "black"
      }}
    >
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieItem
            image={
              props.movie.poster_path
                ? `${IMAGE_URL}${POSTER_SIZE}/${props.movie.poster_path}`
                : "./images/no_image.jpg"
            }
            clickable={false}
          />
        </div>
        <div className="movieinfo-text">
          <h1>{props.movie.title}</h1>
          <h3>Story</h3>
          <p>{props.movie.overview}</p>
          <div>
            <h3>
              <bold>TMDB Rating:</bold> <span>{props.movie.vote_average}</span>{" "}
            </h3>
            <meter
              min="0"
              max="10"
              optimum="10"
              low="4"
              high="7"
              value={props.movie.vote_average}
            />
          </div>
          {props.directors.length > 1 ? (
            <h3>DIRECTORS:</h3>
          ) : (
            <h3>DIRECTOR:</h3>
          )}
          {props.directors.map((elem, i) => {
            return (
              <p key={i} className="director">
                {elem.name}
              </p>
            );
          })}
          {props.genres.length > 1 ? <h3>GENRES:</h3> : <h3>GENRE:</h3>}
          {props.genres.map((elem, i) => {
            return (
              <span key={i} className="director">
                <bold> {elem.name} |</bold>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
