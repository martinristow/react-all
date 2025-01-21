import App from "../App.jsx";
import VIDEOS from "../videos.json";



const GetAllVideos = () => {
    return (
        VIDEOS.map( video => {
                return <div><a href={video.url} target='_blank'>
                    <h3>{video.title}</h3>
                    <img src={video.cover}></img>
                </a>
                </div>
            })
    );
}


export default GetAllVideos;