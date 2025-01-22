import {useState} from "react";
import axios from "axios";


function Movies() {

    const [movieName, setMovieName] = useState();

    const searchMovieByTitle = () => {

        const OMDBAPI_URL = import.meta.env.VITE_APP_OMDBAPI_URL
        const OMDBAPI_KEY = import.meta.env.VITE_OMDBAPI_KEY

        axios.get(`${OMDBAPI_URL}?t=${movieName}&apikey=${OMDBAPI_KEY}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    return (
        <>
            <form action="">
                <input onInput={e => setMovieName(e.target.value)} type="text" placeholder="Vnesi nekoj film"/>
                <button  onClick={searchMovieByTitle} type="button">Search Movie</button>
            </form>
        </>
    );
}


export default Movies;