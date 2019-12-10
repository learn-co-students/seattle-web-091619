import React from 'react';
import MovieCard from './MovieCard';

class Movies extends React.Component {

  state = {
    movies: []
  }

  renderMovies = () => {
    return this.state.movies.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} />
    })
  }

  componentDidMount() {
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(movies => this.setState({
      movies
    }))
  }

  render() {
    return (
      <React.Fragment>
        {this.renderMovies()}
      </React.Fragment>
    )
  }
}

export default Movies;