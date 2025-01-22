import {useState} from "react";
import axios from "axios";


function MoviesExample() {

    const OMDBAPI_URL = import.meta.env.VITE_APP_OMDBAPI_URL;
    const OMDBAPI_KEY = import.meta.env.VITE_OMDBAPI_KEY;

    let [searchMovie, setSearchMovie] = useState();

    function searchMovieByTitle(){
        axios.get(`${OMDBAPI_URL}?t=${searchMovie}&apikey=${OMDBAPI_KEY}`)
            .then(response => {console.log(response.data);})
            .catch(error => console.log(error));
    }
    return (
      <>
      <p>Rabote</p>

          <form onSubmit={ e => e.preventDefault() }>
              <input onInput={ (e) => setSearchMovie(e.target.value)} type="text" placeholder="Vnesi nekoj film"/>
              <button onClick={searchMovieByTitle} type="button">Prebaruvaj film</button>

          </form>
      </>
    );
}

export default MoviesExample;