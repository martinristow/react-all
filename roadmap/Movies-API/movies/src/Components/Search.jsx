import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import SearchResults from "../Templates/SearchResults.jsx";

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    const searchMovies = () => {
        const API_KEY = import.meta.env.VITE_OMDBAPI_KEY;
        const API_URL = import.meta.env.VITE_OMDBAPI_URL;
        const FULL_API_URL = API_URL + "s=" + searchTerm + "&apikey=" + API_KEY;

        axios.get(FULL_API_URL)
            .then(response => {
                setMovies(response.data.Search);
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <>
            <Form>
                <Container className="p-5">
                    <Form.Group className="mb-1" controlId="formBasicTerm">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control onInput={e => setSearchTerm(e.currentTarget.value)} type="text" placeholder="Movie Title"/>
                    </Form.Group>

                    <Button onClick={searchMovies} variant="primary" type="submit">
                        Submit
                    </Button>
                </Container>

            </Form>

            <SearchResults movies={movies}/>

        </>
    )
}
export default Search
