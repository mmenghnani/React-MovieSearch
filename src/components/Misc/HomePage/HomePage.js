import React, { Component } from "react";
import "./HomePage.css";
import LoadButton from "../LoadButton/LoadButton";
import {
  API_URL,
  API_KEY,
  IMAGE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../../config";
import MovieItem from "../MovieItem/MovieItem";
import Grid from "../Grid/Grid";
import SearchBar from "../SearchBar/SearchBar";
import Spinner from "../Spinner/Spinner";
import HeroImage from "../HeroImage/HeroImage";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      hero: null,
      isLoading: false,
      currentPage: 0,
      totalPages: 0,
      search: ""
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    const url = `${API_URL}movie/popular?api_key=${API_KEY}&langugage=en-us&page=1`;
    this.fetchResults(url);
  }

  loadMoreItems = () => {
    let url = "";
    this.setState({
      isLoading: true
    });

    if (this.state.search === "") {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&langugage=en-us&page=${this
        .state.currentPage+1}`;
    } else {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&langugage=en-us&query=${
        this.state.search
      }&page=1`;
    }
    this.fetchResults(url);
  };

  search = search => {
    let url = "";
    this.setState({
      movies: [],
      isLoading: true,
      search
    });
    if (this.state.search === "") {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&langugage=en-us&page=${this
        .state.currentPage + 1}`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-us&query=${search}&page=1`;
    }
    console.log(url);
    this.fetchResults(url);
  };

  fetchResults = url => {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          hero: result.results[0],
          isLoading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      })
      .catch(error => console.error("Error : ", error));
  };

  render() {
    return (
      <div className="home">
      <SearchBar callback={this.search} />
        <div>
          {this.state.hero ? (
            <HeroImage
              image={`${IMAGE_URL}${BACKDROP_SIZE}${
                this.state.hero.backdrop_path
              }`}
              title={this.state.hero.title}
              text={this.state.hero.overview}
            />
          ) : null}
        </div>
        <div className="home-grid">
          <Grid
            header={this.state.search ? "Search Result" : "Popular Movies"}
            isLoading={this.state.isLoading}
          >
            {this.state.movies.map((elem, i) => {
              return (
                <MovieItem
                  key={i}
                  clickable={true}
                  image={
                    elem.poster_path
                      ? `${IMAGE_URL}${POSTER_SIZE}${elem.poster_path}`
                      : './images/no_image.jpg'
                  }
                  movieId={elem.id}
                  movieName={elem.title}
                />
              );
            })}
          </Grid>
        </div>

        {this.state.isLoading ? <Spinner /> : null}
        {this.state.currentPage <= this.state.totalPages &&
        !this.state.isLoading ? (
          <LoadButton onClick={this.loadMoreItems} />
        ) : null}
      </div>
    );
  }
}

export default HomePage;
