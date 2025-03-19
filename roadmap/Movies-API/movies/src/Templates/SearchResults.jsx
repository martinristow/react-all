import React from 'react'
import MovieCard from "./Snippets/MovieCard.jsx";

const SearchResults = ({movies}) => {
    console.log(movies);
    return (
        <div className="d-flex flex-wrap container">
            {
                movies.map(movie => {
                    return <MovieCard movie={movie} />
                })
            }
        </div>

    )
}
export default SearchResults
