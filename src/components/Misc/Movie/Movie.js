import React, { Component } from "react";
import "./Movie.css";
import {
  API_URL,
  API_KEY,
} from "../../../config";
import Navigation from "../Navigation/Navigation";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import Grid from "../Grid/Grid";
import Actor from "../Actor/Actor";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: null,
      movie: null,
      directors: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    // first fetch the movie
    const url = `${API_URL}movie/${
      this.props.match.params.movieId
    }?api_key=${API_KEY}&language=en-us`;
    this.fetchDetails(url);
  }

  fetchDetails = url => {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        if (result.status_code) {
          this.setState({
            isLoading: false
          });
        } else {
          this.setState(
            {
              movie: result
            },
            () => {
              const url = `${API_URL}movie/${
                this.props.match.params.movieId
              }/credits?api_key=${API_KEY}`;
              fetch(url)
                .then(result => result.json())
                .then(result => {
                  const directors = result.crew.filter(
                    elem => elem.job === "Director"
                  );
                  this.setState({
                    actors: result.cast,
                    directors,
                    isLoading: false
                  });
                });
            }
          );
        }
      });
  };

  render() {
    return (
      <div className="movie">
        {this.state.movie ? (
          <div>
            <Navigation movie={this.state.movie.original_title} />
            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
              genres={this.state.movie.genres}
            />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
              release_date={this.state.movie.release_date}
            />
          </div>
        ) : null}
        {this.state.actors ? 
        <div className="movie-grid">
          <Grid header={'Actors'}>
            {this.state.actors.map((elem,i) => {
                return <Actor key={i} actor={elem} />
            })}
          </Grid>
        </div> : null}
        {!this.state.actors && !this.state.isLoading ? <h1>No Movie Found</h1> : null}
      </div>
    );
  }
}
