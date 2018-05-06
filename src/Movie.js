import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';


class Movie extends Component {

  /* The Role of PropTypes */
  // It can check the missing of params and wrong types,
  // throw error message when it is not fit

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
  }

  render(){
    return (
      <div className="Movie">
          <div className="Movie__Column">
              <MoviePoster poster={this.props.poster}
                           alt={this.props.title}
              />
          </div>
          <div className="Movie__Column">
              <h1>{this.props.title}</h1>
              <div className="Movie__Genres">
                  {this.props.genres.map((genre_, index_) =>
                    <MovieGenre genre={genre_}
                                key={index_}
                    />
                  )}
              </div>
              <div className="Movie__Synopsis">
                  <LinesEllipsis
                    text={this.props.synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
              </div>
          </div>
      </div>
    );
  }
}
/*
//Smart component: have states, props
class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <img src={this.props.poster} />
    );
  }
}
*/
//Dumb component: have no state, only props
function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

function MovieGenre({genre}) {
  return (
    <span className="Movie__Genre"> {genre} </span>
  )
}


MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}


export default Movie;
