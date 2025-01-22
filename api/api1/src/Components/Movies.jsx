import {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "../Templates/Snippets/MovieCard.jsx";


function Movies() {

    const [movieName, setMovieName] = useState();
    const [movieData, setMovieData] = useState({});

    const searchMovieByTitle = () => {

        const OMDBAPI_URL = import.meta.env.VITE_APP_OMDBAPI_URL
        const OMDBAPI_KEY = import.meta.env.VITE_OMDBAPI_KEY

        axios.get(`${OMDBAPI_URL}?t=${movieName}&apikey=${OMDBAPI_KEY}`)
            .then(response => setMovieData(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        searchMovieByTitle();
    }, []);

    return (
        <>
            <form onSubmit={ e => e.preventDefault() }>
                <input onInput={e => setMovieName(e.currentTarget.value)} type="text" placeholder="Vnesi nekoj film"/>
                <button  onClick={searchMovieByTitle} type="button">Search Movie</button>
            </form>

        <MovieCard movie={movieData} />
        </>
    );
}


export default Movies;