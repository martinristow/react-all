import React, {useState} from 'react'
import AllVideos from "../Components/AllVideos.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import VIDEOS from '../videos.json'

const Home = () => {
    let [videos, setVideos] = useState(VIDEOS); // THIS WILL SHOW ALL VIDEOS
    let [filteredVideos, setFilteredVideos] = useState(VIDEOS); // THIS IS THE PART THAT IS CHANGING

    const handleSearchVideo = (results) => {
        setFilteredVideos(results);
    }

    console.log(filteredVideos);

    return (
        <>
            <SearchBar videos={videos} onSearchVideo={handleSearchVideo}/>
            <AllVideos videos={filteredVideos}/>
        </>
    )
}
export default Home
