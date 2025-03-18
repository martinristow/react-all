import React from 'react'

const VIDEOS = [
    {
        id: 1,
        title: "How to Remember Everything You Read",
        url: "https://www.youtube.com/watch?v=okHkUIW46ks&t=64s",
        cover: "https://i.ytimg.com/vi/okHkUIW46ks/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAfA05NGmNvSuKpRtpB-8Li0-eHYQ"
    },
    {
        id: 2,
        title: "Jordan Peterson - How to Remember Everything You Read",
        url: "https://www.youtube.com/watch?v=okHkUIW46ks&t=64s",
        cover: "https://i.ytimg.com/vi/ch55SHnLs_M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhRFIUmhhSNKYo64N2PDQLuu1qLA"
    }
];

const App = () => {
    return (
        <>
            {
                VIDEOS.map((video, index) => {
                    return <a key={index} href={video.url} target="_blank">
                        <img src={video.cover} alt="cover"/>
                        <h3>{video.title}</h3>
                    </a>
                })
            }

        </>
    )
}
export default App


