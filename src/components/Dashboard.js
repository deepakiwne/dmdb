import React, { Component } from 'react'

class Dashboard extends Component {

    render() {

        const { movies } = this.props

        return (
            <div>
                <ul>
                    <div class="card-columns">
                        {movies.map((m) => (
                            <div className="card" style={{width: '18rem'}}>
                                <img className="card-img-top"
                                    src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                                    alt={m.original_title} />
                            </div>
                        ))}
                    </div>
                </ul>
            </div>
        )
    }
}

export default Dashboard