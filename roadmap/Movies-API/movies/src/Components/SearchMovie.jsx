import React, {use, useEffect, useState} from 'react'
import axios from 'axios'
import MovieCard from "../Templates/Snippets/MovieCard.jsx";


const SearchMovie = () => {

    const [movieName, setMovieName] = useState("Baby Driver");
    const [movieData, setMovieData] = useState({});

    const searchMovieByTitle = () => {
        const API_KEY = import.meta.env.VITE_OMDBAPI_KEY;
        const API_URL = import.meta.env.VITE_OMDBAPI_URL;
        const FULL_API_URL = API_URL + "t=" + movieName + "&apikey=" + API_KEY;

        axios.get(FULL_API_URL)
            .then(response => {
                setMovieData(response.data);
            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {
        searchMovieByTitle();
    }, []);


    return (
        <>
            <form>
                <input type="text" placeholder="Enter a movie" onInput={e => setMovieName(e.currentTarget.value)}/>
                <button type="button" onClick={searchMovieByTitle}>Search Movie</button>
            </form>

            <MovieCard movie={movieData}/>
        </>
    )
}
export default SearchMovie
