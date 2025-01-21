import { useState } from 'react'
import './App.css'

const VIDEOS = [
    {
        id: 1,
        title: "How to learn React",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
        cover: "https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A"
    },
    {
        id: 2,
        title: "How to learn CSS",
        url: "https://www.youtube.com/watch?v=Z4pCqK-V_Wo",
        cover: "https://i.ytimg.com/vi/Z4pCqK-V_Wo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPA3sbcpqOW9aUTVIWfzwVxlLQnQ"
    },
];


const App = () => {
    return (
        <>
            { VIDEOS.map( video => {
                return <div><a href={video.url} target='_blank'>
                <h3>{video.title}</h3>
                <img src={video.cover}></img>
                    </a>
                </div>
            }) }
        </>
    )
}


export default App
