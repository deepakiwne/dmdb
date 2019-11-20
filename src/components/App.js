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
      <div className='container'>
        <Dashboard movies={this.state.movies}/>
      </div>
    )
  }
}

export default App
