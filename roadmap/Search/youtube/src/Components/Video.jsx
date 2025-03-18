import React from 'react'
import {useParams} from "react-router";
import VIDEOS from '../videos.json'

const Video = () => {

    const {id} = useParams();
    let videoFound = null;

    VIDEOS.forEach((video) => {
        if (parseInt(video.id) === parseInt(id)) {
            videoFound = video
        }
    })

    if (videoFound === null) {
        return (
            <>
                <h1>This video does not exist!</h1>
            </>
        )
    }

    return (
        <>
            <h3>{videoFound.title}</h3>
            <a href={videoFound.url}>Link to this video</a><br/>
            <iframe
                width="560"
                height="315"
                src={videoFound.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </>

    )
}
export default Video
