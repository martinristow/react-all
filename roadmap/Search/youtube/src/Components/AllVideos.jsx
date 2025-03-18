import VIDEOS from '../videos.json'


const AllVideos = () => {
    return (
        VIDEOS.map((video, index) => {
            return <a key={index} href={video.url} target="_blank">
                <img src={video.cover} alt="cover"/>
                <h3>{video.title}</h3>
            </a>
        })

    );
};
export default AllVideos
