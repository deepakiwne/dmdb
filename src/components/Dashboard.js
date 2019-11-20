import React, { Component } from 'react'

class Dashboard extends Component {

    render() {

        const { movies } = this.props

        return (
            <div>
                <ul>
                    {movies.map((m) => (
                        <div>
                            <li>{m.original_title}</li>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                                alt='movie poster' />
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Dashboard