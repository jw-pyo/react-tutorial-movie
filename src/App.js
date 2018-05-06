import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  /*process of rendering & update component */
  // render: componentWillMount() -> render() -> componentDidMount()
  // update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  /*state*/
  //When state changes, render() calls again
  state = {
  }

  componentWillMount(){
  }
  render() {
    const { movies } = this.state;
      return (
        <div className={movies ? "App" : "App--loading"}>
          {this.state.movies ? this._renderMovies() : "Loading..."}
        </div>
      );
  }
  componentDidMount(){
    this._getMovies();
  }

  _getMovies = async () => {
        const mov = await this._apiCall();
        this.setState({
          movies: mov
        })
  }
  _apiCall = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    .then(json => json.data.movies)
    //.then(zz => console.log(zz))
    .catch(err => console.log(err))
  }

  _renderMovies = () => {

    const movies = this.state.movies.map(movie => {
      return <Movie
      title={movie.title_english}
      poster={movie.small_cover_image}
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }


}

export default App;
