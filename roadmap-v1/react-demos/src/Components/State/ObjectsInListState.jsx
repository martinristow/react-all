import React, {useState} from 'react'

const ObjectsInListState = () => {

    const [movies, setMovies] = useState([
        {id: 1, title: 'Spider Man', ratings: 3},
        {id: 2, title: 'Super Man', ratings: 7},
        {id: 3, title: 'Baby Driver', ratings: 5},
    ]);

    // const handleClick = () => {
    //     setMovies(movies.map(movie => {
    //         return movie.id === 1 ? {...movie, title: "John Wick 5"} : movie}));
    // }

    const handleClick = () => {
        setMovies(movies.map(movie => movie.id === 1 ? {...movie, title: "John Wick 5"} : movie))
    }

    return (
        <div>
            {
                movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))
            }

            <button onClick={handleClick}>Change Name</button>

        </div>
    )
}
export default ObjectsInListState
