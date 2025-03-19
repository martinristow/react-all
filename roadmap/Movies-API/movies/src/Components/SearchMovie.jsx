import React, {useState} from 'react'
import axios from 'axios'

const SearchMovie = () => {

    const [movieName, setMovieName] = useState("")

    const searchMovie = () => {
        const API_KEY = import.meta.env.VITE_OMDBAPI_KEY;
        const API_URL = import.meta.env.VITE_OMDBAPI_URL;
        const FULL_API_URL = API_URL + "t=" + movieName + "&apikey=" + API_KEY;

        axios.get(FULL_API_URL)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <form>
            <input type="text" placeholder="Enter a movie" onInput={e => setMovieName(e.currentTarget.value)}/>
            <button type="button" onClick={searchMovie}>Search Movie</button>
        </form>
    )
}
export default SearchMovie
