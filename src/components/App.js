import React, { Component } from 'react'
import Dashboard from './Dashboard'
import * as MovieAPI from '../MovieAPI'

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    MovieAPI.discover('sort_by=popularity.desc')
    .then((movies) => {
      this.setState(() => ({
        movies
      }))
    })
  }

  render(){
    return (
      <Dashboard movies={this.state.movies}/>
    )
  }
}

export default App
