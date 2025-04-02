import React, {useState} from 'react'

const ObjectState = () => {

    const [movie, setMovie] = useState({
        title: 'Baby Driver',
        ratings: 7
    });

    const handleClick = () => {
        // This is the longest way
        // const copyMovie = {
        //     ...movie,
        //     ratings: 5
        // }
        // setMovie(copyMovie);

        setMovie({...movie, ratings: 5})
    }

    return (
        <div>
            <h1>
                ObjectState
            </h1>

            <h1>Title: {movie.title}</h1>
            <p>Rating: {movie.ratings}</p>
            <button onClick={handleClick}>Change Rating</button>

        </div>
    )
}
export default ObjectState
