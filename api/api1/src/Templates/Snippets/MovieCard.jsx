import App from "../../App.jsx";


const MoviesExample = ({movie}) => {
    return (
        <>
            <br/><hr/>

            <img src={movie.Poster}/>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <br/><hr/>
        </>
    );
}


export default MoviesExample;