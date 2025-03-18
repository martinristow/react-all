const AllVideos = ({videos}) => {
    return (
        videos.map((video, index) => {
            return <a key={index} href={video.url} target="_blank">
                <img src={video.cover} alt="cover"/>
                <h3>{video.title}</h3>
            </a>
        })

    );
};
export default AllVideos
