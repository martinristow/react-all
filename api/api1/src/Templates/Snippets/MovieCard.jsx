import App from "../../App.jsx";


const MoviesExample = ({movie}) => {
    return (
        <div className="col-3 text-white">
            <br/><hr/>

            <img className="w-100" src={movie.Poster}/>
            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>
            <br/><hr/>
        </div>
    );
}


export default MoviesExample;