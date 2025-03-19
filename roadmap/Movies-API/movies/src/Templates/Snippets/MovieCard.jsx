import React from 'react'

const MovieData = ({movie}) => {
    console.log(movie);
    return (
        <div className="col-4 p-2">
            <img src={movie.Poster}/>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>

        </div>
    )
}
export default MovieData
